/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SOME_KEY: number;
  readonly VITE_TEST: number;

}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
