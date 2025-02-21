/// <reference types="vite/client" />

// If you are using import.meta.env variables:
interface ImportMetaEnv {
    readonly VITE_BASE_API_URL: string;
    readonly VITE_FAKE_STORE_API_URL: string;
    // Add other environment variables here
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
