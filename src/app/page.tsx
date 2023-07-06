"use client";
import QRCodeComponent from "./components/QRCode";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-white">
      <QRCodeComponent />
    </main>
  );
}
