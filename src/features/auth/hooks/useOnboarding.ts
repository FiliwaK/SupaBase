import { useState } from 'react';
import { router } from 'expo-router';

const SLIDE_COUNT = 3;

export function useOnboarding() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = () => {
    if (currentIndex < SLIDE_COUNT - 1) {
      setCurrentIndex((i) => i + 1);
    } else {
      router.replace('/(auth)/register');
    }
  };

  const skip = () => {
    router.replace('/(auth)/register');
  };

  return { currentIndex, goNext, skip, isLast: currentIndex === SLIDE_COUNT - 1 };
}
