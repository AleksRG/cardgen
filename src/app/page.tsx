"use client";
import QRCodeComponent from "./components/QRCode";
export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-transparent">
      <QRCodeComponent />
    </main>
  );
}
