export type LeadPayload = {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message?: string;
  source?: string;
};

async function sendToActiveCampaign(lead: LeadPayload) {
  const baseUrl = process.env.ACTIVECAMPAIGN_URL;
  const apiKey = process.env.ACTIVECAMPAIGN_API_KEY;
  if (!baseUrl || !apiKey) return { skipped: true };

  const response = await fetch(`${baseUrl.replace(/\/$/, "")}/api/3/contact/sync`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "Api-Token": apiKey },
    body: JSON.stringify({
      contact: {
        email: lead.email,
        firstName: lead.name,
        phone: lead.phone,
      },
    }),
  });
  if (!response.ok) throw new Error("ActiveCampaign sync failed");
  return { skipped: false };
}

async function sendToMonday(lead: LeadPayload) {
  const token = process.env.MONDAY_API_TOKEN;
  const boardId = process.env.MONDAY_BOARD_ID;
  if (!token || !boardId) return { skipped: true };

  const columnValues = JSON.stringify({
    email: { email: lead.email, text: lead.email },
    phone: { phone: lead.phone, countryShortName: "AU" },
    text: lead.interest,
    long_text: { text: lead.message ?? "" },
  });
  const query = `mutation ($board: ID!, $name: String!, $values: JSON!) {
    create_item(board_id: $board, item_name: $name, column_values: $values) { id }
  }`;
  const response = await fetch("https://api.monday.com/v2", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: token },
    body: JSON.stringify({
      query,
      variables: { board: boardId, name: lead.name, values: columnValues },
    }),
  });
  if (!response.ok) throw new Error("Monday CRM sync failed");
  return { skipped: false };
}

async function sendToWebhook(lead: LeadPayload) {
  const webhook = process.env.LEAD_WEBHOOK_URL;
  if (!webhook) return { skipped: true };
  const response = await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(lead),
  });
  if (!response.ok) throw new Error("Lead webhook failed");
  return { skipped: false };
}

export async function distributeLead(lead: LeadPayload) {
  const results = await Promise.allSettled([
    sendToActiveCampaign(lead),
    sendToMonday(lead),
    sendToWebhook(lead),
  ]);
  const configured = results.some(
    (result) => result.status === "fulfilled" && !result.value.skipped,
  );
  const failed = results.some((result) => result.status === "rejected");
  return { configured, failed };
}
