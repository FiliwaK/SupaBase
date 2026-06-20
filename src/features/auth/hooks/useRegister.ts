import { useState } from 'react';
import { supabase } from '@/services/supabase';
import type { RegisterFormData, AuthError } from '../types';

interface UseRegisterReturn {
  loading: boolean;
  error: AuthError | null;
  register: (data: RegisterFormData) => Promise<boolean>;
}

export function useRegister(): UseRegisterReturn {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AuthError | null>(null);

  const register = async ({ firstName, email, password }: RegisterFormData): Promise<boolean> => {
    setLoading(true);
    setError(null);

    const { error: supabaseError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        // Le prénom est stocké dans les métadonnées utilisateur
        data: { first_name: firstName },
      },
    });

    setLoading(false);

    if (supabaseError) {
      setError({ message: supabaseError.message });
      return false;
    }

    return true;
  };

  return { loading, error, register };
}
