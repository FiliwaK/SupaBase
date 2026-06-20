/** Écran 7 — Publier un article. */
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '@/constants/colors';

export default function PublishScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Publier un article</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.neutral.white },
  title: { color: Colors.neutral[900], fontSize: 24, fontWeight: 'bold', padding: 16 },
});
