'use client';

import { useEffect } from 'react';
import { Crisp } from 'crisp-sdk-web';

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure('181f3040-9290-4245-9125-4f4196eb50d5');
  }, []);

  return null;
};
