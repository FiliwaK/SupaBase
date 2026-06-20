/** Écran 12 — Modifier le profil. */
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '@/constants/colors';

export default function EditProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modifier le profil</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.neutral.white },
  title: { color: Colors.neutral[900], fontSize: 24, fontWeight: 'bold', padding: 16 },
});
