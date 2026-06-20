/**
 * Devise unique de l'application — TOUJOURS importer d'ici, jamais écrire "$ CAD" en dur.
 * La plateforme est exclusive au Québec, une seule devise est supportée.
 */
export const CURRENCY = {
  code: 'CAD',
  symbol: '$',
  locale: 'fr-CA',
} as const;

/**
 * Formate un montant en dollars canadiens.
 * Ex: formatCAD(42.5) → "42,50 $"
 */
export function formatCAD(amount: number): string {
  return new Intl.NumberFormat(CURRENCY.locale, {
    style: 'currency',
    currency: CURRENCY.code,
    minimumFractionDigits: 2,
  }).format(amount);
}
