/** Écran 5 — Accueil / Feed. */
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '@/constants/colors';

export default function FeedScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Découvrir</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.neutral[100] },
  title: { color: Colors.neutral[900], fontSize: 24, fontWeight: 'bold', padding: 16 },
});
