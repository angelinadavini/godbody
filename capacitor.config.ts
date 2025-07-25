import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.41afa36f783d480c931c279cd9add1e1',
  appName: 'godbody',
  webDir: 'dist',
  server: {
    url: 'https://41afa36f-783d-480c-931c-279cd9add1e1.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 0
    }
  }
};

export default config;