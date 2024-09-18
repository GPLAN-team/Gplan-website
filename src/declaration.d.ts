// src/declarations.d.ts

declare module "*.mp4" {
  const src: string;
  export default src;
}

declare module "*.pdf" {
  const src: string;
  export default src;
}

declare module "*.png" {
  const src: string;
  export default src;
}

// If you have other file types (e.g., jpg, svg), declare them similarly.
