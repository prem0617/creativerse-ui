// src/components/custom/ThreeImageClient.tsx
"use client"; // This line makes this file a Client Component

import dynamic from "next/dynamic";

const ThreeImage = dynamic(() => import("./ThreeImage"), {
  ssr: false, // Disable SSR for this component
});

export default ThreeImage;
