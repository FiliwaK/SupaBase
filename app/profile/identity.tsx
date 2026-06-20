/** Écran 13 — Vérification d'identité. */
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '@/constants/colors';

export default function IdentityVerificationScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vérification d'identité</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.neutral.white },
  title: { color: Colors.neutral[900], fontSize: 24, fontWeight: 'bold', padding: 16 },
});
