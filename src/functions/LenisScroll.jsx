// src/LenisScroll.js
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

const LenisScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      // opsi konfigurasi Lenis jika ada
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      // Membersihkan Lenis saat komponen unmount
      lenis.destroy();
    };
  }, []);

  return null;
};

export default LenisScroll;
