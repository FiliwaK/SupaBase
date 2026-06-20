/**
 * Point d'entrée Stripe Connect — structure préparée, intégration à venir.
 * Stripe Connect est requis car la plateforme perçoit une commission sur les différences de points.
 */

// TODO: installer @stripe/stripe-react-native quand on attaque la feature payments
export const STRIPE_PUBLISHABLE_KEY = process.env.EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? '';
