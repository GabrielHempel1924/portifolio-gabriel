import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoName = "portifolio-gabriel";

const nextConfig: NextConfig = {
  // obrigatório para GitHub Pages (site estático)
  output: "export",

  // evita 404 em rotas
  trailingSlash: true,

  // GitHub Pages não suporta Image Optimization do Next
  images: {
    unoptimized: true,
  },

  // necessário para https://USER.github.io/REPO/
  basePath: isProd ? `/${repoName}` : undefined,
  assetPrefix: isProd ? `/${repoName}/` : undefined,
};

export default nextConfig;
