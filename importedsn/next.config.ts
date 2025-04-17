import { RemotePattern } from "next/dist/shared/lib/image-config";
import withPWA from "next-pwa";

const remotePatterns: RemotePattern[] = [
  {
    protocol: "https",
    hostname: "drive.google.com",
  },
];

const nextConfig = {
  images: {
    remotePatterns,
  },
  reactStrictMode: true,
};

export default withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
})(nextConfig);
