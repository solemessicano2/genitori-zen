// Reference to vite/client removed to fix "Cannot find type definition file" error.
// Explicit process declaration removed to fix "Cannot redeclare block-scoped variable" error.
// Instead, we augment the NodeJS namespace to ensure API_KEY is typed on process.env.

declare namespace NodeJS {
  interface ProcessEnv {
    API_KEY: string;
  }
}
