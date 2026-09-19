export const pricingOptions = [
  { id: "plise", label: "Plise", prices: { bela: 40, braon: 41, antracit: 41 } },
  { id: "rolo", label: "Rolo", prices: { bela: 42, braon: 43, antracit: 43 } },
  { id: "fiksni", label: "Fiksni", prices: { bela: 25, braon: 26, antracit: 26 } },
] as const;

export const colorOptions = [
  { id: "bela", label: "Bela" },
  { id: "braon", label: "Braon" },
  { id: "antracit", label: "Antracit" },
] as const;

export type PricingType = (typeof pricingOptions)[number]["id"];
export type PricingColor = (typeof colorOptions)[number]["id"];

export function getPricePerM2(type: PricingType, color: PricingColor) {
  return pricingOptions.find((option) => option.id === type)?.prices[color] ?? pricingOptions[0].prices.bela;
}
