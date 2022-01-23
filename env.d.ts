/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PLANTUML_SERVER: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
