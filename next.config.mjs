/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      // Fotografías de muestra
      { protocol: "https", hostname: "images.unsplash.com" },
      // Deja lista la salida para cuando las fotos vengan de un CMS
      { protocol: "https", hostname: "res.cloudinary.com" }
    ],
    formats: ["image/avif", "image/webp"]
  }
};

export default nextConfig;
