/** Écran 3 — Connexion. */
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '@/constants/colors';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bon retour !</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.neutral.white },
  title: { color: Colors.neutral[900], fontSize: 24, fontWeight: 'bold' },
});
