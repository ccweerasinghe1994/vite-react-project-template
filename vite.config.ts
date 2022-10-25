import { defineConfig,loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), 'VITE');
  return {
    plugins: [react()],
    // vite config
    //these defined constants can be accessed by window.__YOUR_VARIABLE_NAME
    define: {
      __TEST__:123
    }
  }
})
