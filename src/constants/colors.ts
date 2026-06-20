/**
 * Palette de couleurs centralisée — extrait des maquettes Figma.
 * Modifier ici = modifier partout dans l'app.
 */
export const Colors = {
  // Vert teal — couleur principale de la marque
  primary: {
    dark: '#0F6E56',    // fond header, fond écrans auth, boutons principaux
    DEFAULT: '#1D9E75', // badges de points, icônes actives, bordures focus
    light: '#E8F5F0',   // fond cards légères, états hover
  },

  // Corail — accent secondaire pour les appels à l'action alternatifs
  coral: {
    DEFAULT: '#D85A30', // bouton "Proposer un échange"
    light: '#FAEAE4',   // fond badges état "en cours"
  },

  // Neutres
  neutral: {
    900: '#1A1A1A', // texte principal
    700: '#4A4A4A', // texte secondaire
    500: '#8A8A8A', // placeholders, labels désactivés
    300: '#D4D4D4', // séparateurs, bordures
    100: '#F5F5F5', // fond de page (légèrement crème)
    white: '#FFFFFF',
  },

  // Sémantiques
  success: '#1D9E75',
  error: '#E53E3E',
  warning: '#D69E2E',

  background: '#FFFFFF',
  surface: '#F8FAF9',
} as const;

export type ColorKey = keyof typeof Colors;
