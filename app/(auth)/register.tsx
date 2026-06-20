import { useState } from 'react';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { router } from 'expo-router';
import { Colors } from '@/constants/colors';
import { Spacing } from '@/constants/spacing';
import { useRegister } from '@/features/auth/hooks/useRegister';

export default function RegisterScreen() {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { loading, error, register } = useRegister();

  const handleRegister = async () => {
    const success = await register({ firstName, email, password });
    if (success) {
      // Supabase envoie un email de confirmation → écran OTP
      router.replace('/(auth)/otp');
    }
  };

  const isFormValid = firstName.trim().length > 0 && email.includes('@') && password.length >= 6;

  return (
    <KeyboardAvoidingView
      style={styles.root}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        {/* Icône marque */}
        <View style={styles.iconContainer}>
          <Text style={styles.iconText}>↕</Text>
        </View>

        <Text style={styles.title}>Créer un compte</Text>
        <Text style={styles.subtitle}>Rejoignez la communauté du troc intelligent</Text>

        {/* Boutons OAuth — structure visible mais non connectés (Stripe Connect future) */}
        <View style={styles.oauthRow}>
          <Pressable style={styles.oauthButton}>
            <Text style={styles.oauthText}>🔵 Google</Text>
          </Pressable>
          <Pressable style={styles.oauthButton}>
            <Text style={styles.oauthText}>🍎 Apple</Text>
          </Pressable>
        </View>

        <View style={styles.dividerRow}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>ou</Text>
          <View style={styles.dividerLine} />
        </View>

        {/* Champ Prénom */}
        <Text style={styles.label}>PRÉNOM</Text>
        <TextInput
          style={styles.input}
          placeholder="Sophie"
          placeholderTextColor={Colors.neutral[500]}
          value={firstName}
          onChangeText={setFirstName}
          autoCapitalize="words"
          autoComplete="given-name"
        />

        {/* Champ Email */}
        <Text style={styles.label}>EMAIL</Text>
        <TextInput
          style={styles.input}
          placeholder="sophie@exemple.fr"
          placeholderTextColor={Colors.neutral[500]}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoComplete="email"
        />

        {/* Champ Mot de passe */}
        <Text style={styles.label}>MOT DE PASSE</Text>
        <View style={styles.passwordRow}>
          <TextInput
            style={styles.passwordInput}
            placeholder="••••••••"
            placeholderTextColor={Colors.neutral[500]}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            autoComplete="new-password"
          />
          <Pressable onPress={() => setShowPassword((v) => !v)} style={styles.eyeButton}>
            <Text style={styles.eyeText}>{showPassword ? '🙈' : '👁'}</Text>
          </Pressable>
        </View>

        {/* Affichage erreur */}
        {error && <Text style={styles.errorText}>{error.message}</Text>}

        {/* Mentions légales */}
        <Text style={styles.legalText}>
          En créant un compte, vous acceptez nos{' '}
          <Text style={styles.legalLink}>Conditions d'utilisation</Text>
          {'\n'}et notre{' '}
          <Text style={styles.legalLink}>Politique de confidentialité</Text>.
        </Text>

        {/* Bouton principal */}
        <Pressable
          style={[styles.submitButton, !isFormValid && styles.submitButtonDisabled]}
          onPress={handleRegister}
          disabled={!isFormValid || loading}
        >
          {loading ? (
            <ActivityIndicator color={Colors.neutral.white} />
          ) : (
            <Text style={styles.submitText}>S'inscrire</Text>
          )}
        </Pressable>

        {/* Lien connexion */}
        <View style={styles.loginRow}>
          <Text style={styles.loginText}>Déjà un compte ? </Text>
          <Pressable onPress={() => router.push('/(auth)/login')}>
            <Text style={styles.loginLink}>Se connecter</Text>
          </Pressable>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.neutral.white,
  },
  container: {
    padding: Spacing.lg,
    paddingTop: Spacing['2xl'],
    paddingBottom: Spacing['2xl'],
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: Colors.primary.DEFAULT,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.lg,
  },
  iconText: {
    color: Colors.neutral.white,
    fontSize: 22,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: Colors.neutral[900],
    marginBottom: Spacing.xs,
  },
  subtitle: {
    fontSize: 15,
    color: Colors.neutral[700],
    marginBottom: Spacing.lg,
  },
  oauthRow: {
    flexDirection: 'row',
    gap: Spacing.sm,
    marginBottom: Spacing.md,
  },
  oauthButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: Colors.neutral[300],
    borderRadius: 10,
    paddingVertical: Spacing.sm + 2,
    alignItems: 'center',
  },
  oauthText: {
    fontSize: 14,
    color: Colors.neutral[900],
    fontWeight: '500',
  },
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: Spacing.md,
    gap: Spacing.sm,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.neutral[300],
  },
  dividerText: {
    color: Colors.neutral[500],
    fontSize: 13,
  },
  label: {
    fontSize: 11,
    fontWeight: '600',
    color: Colors.neutral[700],
    letterSpacing: 0.8,
    marginBottom: Spacing.xs,
    marginTop: Spacing.sm,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.neutral[300],
    borderRadius: 10,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm + 2,
    fontSize: 15,
    color: Colors.neutral[900],
    backgroundColor: Colors.neutral.white,
    marginBottom: Spacing.xs,
  },
  passwordRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.neutral[300],
    borderRadius: 10,
    backgroundColor: Colors.neutral.white,
    marginBottom: Spacing.xs,
  },
  passwordInput: {
    flex: 1,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm + 2,
    fontSize: 15,
    color: Colors.neutral[900],
  },
  eyeButton: {
    padding: Spacing.sm,
  },
  eyeText: {
    fontSize: 18,
  },
  errorText: {
    color: Colors.error,
    fontSize: 13,
    marginTop: Spacing.xs,
    marginBottom: Spacing.sm,
  },
  legalText: {
    fontSize: 12,
    color: Colors.neutral[700],
    lineHeight: 18,
    marginTop: Spacing.md,
    marginBottom: Spacing.lg,
  },
  legalLink: {
    color: Colors.primary.DEFAULT,
    textDecorationLine: 'underline',
  },
  submitButton: {
    backgroundColor: Colors.primary.dark,
    borderRadius: 12,
    paddingVertical: Spacing.md,
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  submitButtonDisabled: {
    opacity: 0.5,
  },
  submitText: {
    color: Colors.neutral.white,
    fontSize: 16,
    fontWeight: '600',
  },
  loginRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: Spacing.xs,
  },
  loginText: {
    color: Colors.neutral[700],
    fontSize: 14,
  },
  loginLink: {
    color: Colors.primary.DEFAULT,
    fontSize: 14,
    fontWeight: '600',
  },
});
