/// <reference types="vite/client" />

// Figma asset imports (resolved by Vite aliases)
declare module 'figma:asset/*.png' {
  const src: string;
  export default src;
}
