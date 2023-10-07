/// <reference types="vite/client" />
/// <reference types="redux-persist" />

interface ImportMetaEnv {
  readonly VITE_API_KEY: string
  readonly VITE_PROJECT_ID: string
  readonly VITE_DATABASE_NAME: string
  readonly VITE_SENDER_ID: string
  readonly VITE_APP_ID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
