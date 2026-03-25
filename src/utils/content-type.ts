export const ContentType = {
  // JSON (mais comum em APIs REST)
  JSON: "application/json",

  // Texto
  TEXT: "text/plain",
  HTML: "text/html",

  // Formulários
  FORM_URLENCODED: "application/x-www-form-urlencoded",
  MULTIPART_FORM_DATA: "multipart/form-data",

  // Arquivos e downloads
  PDF: "application/pdf",
  CSV: "text/csv",
  XML: "application/xml",
  OCTET_STREAM: "application/octet-stream",

  // Imagens
  PNG: "image/png",
  JPEG: "image/jpeg",
  JPG: "image/jpg",
  GIF: "image/gif",
  WEBP: "image/webp",
  SVG: "image/svg+xml",

  // Outros formatos comuns
  ZIP: "application/zip",
  GZIP: "application/gzip",
  MP4: "video/mp4",
  WEBM: "video/webm",
  MP3: "audio/mpeg",
  WAV: "audio/wav"
} as const;