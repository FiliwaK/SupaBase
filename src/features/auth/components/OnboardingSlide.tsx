import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Colors } from '@/constants/colors';
import { Spacing } from '@/constants/spacing';

const { width, height } = Dimensions.get('window');

interface OnboardingSlideProps {
  title: string;
  subtitle: string;
  /** Couleur de fond simulant la photo (placeholder jusqu'à ajout d'images réelles) */
  backgroundColor: string;
}

export function OnboardingSlide({ title, subtitle, backgroundColor }: OnboardingSlideProps) {
  return (
    <View style={[styles.slide, { backgroundColor }]}>
      {/* Overlay dégradé du bas */}
      <View style={styles.overlay}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  slide: {
    width,
    height,
    justifyContent: 'flex-end',
  },
  overlay: {
    paddingHorizontal: Spacing.lg,
    paddingBottom: 120, // espace pour les boutons en dessous
    paddingTop: Spacing['2xl'],
    backgroundColor: 'rgba(0,0,0,0.55)',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: Colors.neutral.white,
    marginBottom: Spacing.sm,
    lineHeight: 36,
  },
  subtitle: {
    fontSize: 15,
    color: 'rgba(255,255,255,0.85)',
    lineHeight: 22,
  },
});
