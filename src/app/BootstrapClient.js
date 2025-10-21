'use client';
import { useEffect } from 'react';

export default function BootstrapClient() {
  useEffect(() => {
    // Only import Bootstrap JavaScript on the client side
    if (typeof window !== 'undefined') {
      require('bootstrap/dist/js/bootstrap.bundle.min.js');
    }
  }, []);

  return null;
}