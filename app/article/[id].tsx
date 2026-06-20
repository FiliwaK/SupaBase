/** Écran 6 — Détail d'un article. */
import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '@/constants/colors';

export default function ArticleDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Article #{id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.neutral.white },
  title: { color: Colors.neutral[900], fontSize: 24, fontWeight: 'bold', padding: 16 },
});
