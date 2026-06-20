import { Dimensions, FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { useRef } from 'react';
import { Colors } from '@/constants/colors';
import { Spacing } from '@/constants/spacing';
import { OnboardingSlide } from '@/features/auth/components/OnboardingSlide';
import { useOnboarding } from '@/features/auth/hooks/useOnboarding';

const { width } = Dimensions.get('window');

const SLIDES = [
  {
    id: '1',
    title: 'Donnez une seconde vie\nà vos objets',
    subtitle:
      'Échangez ce que vous n\'utilisez plus contre ce\ndont vous avez besoin — simplement, entre\nvoisins.',
    backgroundColor: '#1A3A2E',
  },
  {
    id: '2',
    title: 'Le système de points\néquitable',
    subtitle:
      'Chaque objet reçoit des points selon son état et\nsa valeur. La différence se règle en quelques\nsecondes.',
    backgroundColor: '#2A1F1A',
  },
  {
    id: '3',
    title: 'Des échanges sécurisés',
    subtitle:
      'Profils vérifiés, traçabilité complète et\nconfirmation mutuelle avant chaque transaction.',
    backgroundColor: '#1A2A2A',
  },
];

export default function OnboardingScreen() {
  const { currentIndex, goNext, skip, isLast } = useOnboarding();
  const flatListRef = useRef<FlatList>(null);

  const handleNext = () => {
    if (!isLast) {
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1, animated: true });
    }
    goNext();
  };

  const handleSkip = () => {
    skip();
  };

  return (
    <View style={styles.root}>
      {/* Carrousel de slides */}
      <FlatList
        ref={flatListRef}
        data={SLIDES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <OnboardingSlide
            title={item.title}
            subtitle={item.subtitle}
            backgroundColor={item.backgroundColor}
          />
        )}
        horizontal
        pagingEnabled
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
      />

      {/* Barre de contrôle fixe en bas */}
      <View style={styles.controls}>
        {/* Dots de progression */}
        <View style={styles.dots}>
          {SLIDES.map((_, i) => (
            <View
              key={i}
              style={[styles.dot, i === currentIndex ? styles.dotActive : styles.dotInactive]}
            />
          ))}
        </View>

        {/* Boutons navigation */}
        {isLast ? (
          /* Dernier slide — bouton pleine largeur "C'est parti !" */
          <Pressable style={styles.ctaButton} onPress={handleNext}>
            <Text style={styles.ctaText}>C'est parti !</Text>
          </Pressable>
        ) : (
          <View style={styles.navRow}>
            <Pressable onPress={handleSkip} style={styles.skipButton}>
              <Text style={styles.skipText}>Passer</Text>
            </Pressable>
            <Pressable onPress={handleNext} style={styles.nextButton}>
              <Text style={styles.nextText}>Suivant →</Text>
            </Pressable>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.primary.dark,
  },
  controls: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: Spacing.lg,
    paddingBottom: Spacing['2xl'],
    paddingTop: Spacing.md,
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: Spacing.xs,
    marginBottom: Spacing.md,
  },
  dot: {
    height: 6,
    borderRadius: 3,
  },
  dotActive: {
    width: 24,
    backgroundColor: Colors.neutral.white,
  },
  dotInactive: {
    width: 6,
    backgroundColor: 'rgba(255,255,255,0.4)',
  },
  navRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  skipButton: {
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.md,
  },
  skipText: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 15,
    fontWeight: '500',
  },
  nextButton: {
    backgroundColor: Colors.primary.DEFAULT,
    borderRadius: 10,
    paddingVertical: Spacing.sm + 2,
    paddingHorizontal: Spacing.lg,
  },
  nextText: {
    color: Colors.neutral.white,
    fontSize: 15,
    fontWeight: '600',
  },
  ctaButton: {
    backgroundColor: Colors.primary.DEFAULT,
    borderRadius: 12,
    paddingVertical: Spacing.md,
    alignItems: 'center',
  },
  ctaText: {
    color: Colors.neutral.white,
    fontSize: 16,
    fontWeight: '600',
  },
});
