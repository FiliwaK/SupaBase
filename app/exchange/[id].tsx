/** Écran 10 — Suivi de transaction. */
import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '@/constants/colors';

export default function ExchangeTrackingScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Échange #{id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.neutral.white },
  title: { color: Colors.neutral[900], fontSize: 24, fontWeight: 'bold', padding: 16 },
});
