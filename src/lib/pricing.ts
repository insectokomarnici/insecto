export const pricingOptions = [
  { id: "plise", label: "Plise", pricePerM2: 40 },
  { id: "rolo", label: "Rolo", pricePerM2: 42 },
  { id: "fiksni", label: "Fiksni", pricePerM2: 25 },
] as const;

export const colorOptions = [
  { id: "bela", label: "Bela" },
  { id: "braon", label: "Braon" },
  { id: "antracit", label: "Antracit" },
] as const;

export type PricingType = (typeof pricingOptions)[number]["id"];

export function getPricePerM2(type: PricingType) {
  return pricingOptions.find((option) => option.id === type)?.pricePerM2 ?? pricingOptions[0].pricePerM2;
}
