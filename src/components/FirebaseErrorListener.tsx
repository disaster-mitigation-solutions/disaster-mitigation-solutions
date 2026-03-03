
'use client';

import { useEffect } from 'react';
import { errorEmitter } from '@/firebase/error-emitter';
import { useToast } from '@/hooks/use-toast';

export function FirebaseErrorListener() {
  const { toast } = useToast();

  useEffect(() => {
    const handlePermissionError = (error: any) => {
      // In a production app, we might handle this differently.
      // For development, we want to surface this clearly.
      toast({
        variant: "destructive",
        title: "Security Rules Error",
        description: error.message || "You don't have permission to perform this action.",
      });
      
      // Throwing the error ensures it hits the Next.js error overlay in development
      if (process.env.NODE_ENV === 'development') {
        throw error;
      }
    };

    errorEmitter.on('permission-error', handlePermissionError);
    return () => {
      errorEmitter.off('permission-error', handlePermissionError);
    };
  }, [toast]);

  return null;
}
