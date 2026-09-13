const fs = require('fs');

let fileContent = fs.readFileSync('content/insights-data.ts', 'utf8');

const newImages = {
  "why-we-dont-feel-financially-secure": "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
  "what-should-your-financial-plan-look-like-now": "https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=1200&q=80",
  "why-migrant-families-can-build-wealth-but-feel-uncertain": "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=1200&q=80",
  "earning-more-paying-more-tax": "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80",
  "mortgage-super-or-investing-where-next-dollar": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
  "came-to-australia-later-in-life-super": "https://images.unsplash.com/photo-1581579186913-46eaeca68f6d?auto=format&fit=crop&w=1200&q=80",
  "how-much-money-need-to-retire-comfortably": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
  "10-year-retirement-countdown-focus-from-50": "https://images.unsplash.com/photo-1587522502846-f9479b18cb72?auto=format&fit=crop&w=1200&q=80",
  "is-1-million-in-super-enough": "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=1200&q=80",
  "helping-children-financially-without-sacrificing-retirement": "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=80"
};

for (const [slug, imageUrl] of Object.entries(newImages)) {
  const regex = new RegExp(\`(slug: "\${slug}"[\\\\s\\\\S]*?image: ")[^"]+("\)\`, 'g');
  fileContent = fileContent.replace(regex, \`$1\${imageUrl}$2\`);
}

fs.writeFileSync('content/insights-data.ts', fileContent);
console.log("Images replaced in insights-data.ts");
