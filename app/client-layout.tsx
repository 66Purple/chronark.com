"use client";

import { AudioProvider } from "./context/AudioContext";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AudioProvider>{children}</AudioProvider>;
}
