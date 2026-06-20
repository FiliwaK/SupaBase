/** Écran 14 — Paiement. */
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '@/constants/colors';

export default function PaymentScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Paiement</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.neutral.white },
  title: { color: Colors.neutral[900], fontSize: 24, fontWeight: 'bold', padding: 16 },
});
