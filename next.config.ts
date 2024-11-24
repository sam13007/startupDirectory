import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "*",
			},
		],
		// domains: ["avatars.githubusercontent.com"],
	},
};

export default nextConfig;
