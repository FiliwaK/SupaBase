/**
 * Point d'entrée — redirige vers l'onboarding ou le feed selon l'état d'auth.
 */
import { Redirect } from 'expo-router';

export default function Index() {
  // TODO: remplacer par useAuthRedirect() pour rediriger selon session Supabase
  return <Redirect href="/(auth)/onboarding" />;
}
