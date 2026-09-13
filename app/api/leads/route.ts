import { NextResponse } from "next/server";
import { z } from "zod";
import { distributeLead } from "@/lib/integrations";

const leadSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.email(),
  phone: z.string().min(8).max(30),
  interest: z.string().min(1).max(120),
  message: z.string().max(1500).optional(),
  source: z.string().max(100).optional(),
  consent: z.literal(true),
});

export async function POST(request: Request) {
  try {
    const payload = leadSchema.parse(await request.json());
    const lead = {
      name: payload.name,
      email: payload.email,
      phone: payload.phone,
      interest: payload.interest,
      message: payload.message,
      source: payload.source,
    };
    const result = await distributeLead(lead);

    if (result.failed && result.configured) {
      return NextResponse.json(
        { ok: false, message: "A configured lead destination failed." },
        { status: 502 },
      );
    }

    return NextResponse.json({
      ok: true,
      integrationConfigured: result.configured,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ ok: false, issues: error.issues }, { status: 400 });
    }
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
