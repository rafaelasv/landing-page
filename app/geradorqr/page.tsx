"use client";
import { useState, useRef, useEffect } from "react";
import QRCodeStyling from "qr-code-styling-new";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function GeradorQRPage() {
  const [texto, setTexto] = useState("");
  const [qrCode, setQrCode] = useState<QRCodeStyling | null>(null);
  const qrRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (qrRef.current) {
      qrRef.current.innerHTML = ""; // Limpa o container antes de adicionar
    }
    const qr = new QRCodeStyling({
      width: 200,
      height: 200,
      type: "svg",
      data: "https://exemplo.com",
      dotsOptions: { color: "#003845", type: "rounded" },
      backgroundOptions: { color: "#9fffcb" },
    });

    if (qrRef.current) qr.append(qrRef.current);
    setQrCode(qr);
    setTexto("");
  }, []);

  const gerarQRCode = () => qrCode?.update({ data: texto });
  const baixarQRCode = () => qrCode?.download({ name: "qrcode", extension: "png" });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#003845]">
      <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-10 items-center max-w-[1100px] w-full border-4 border-[#9fffcb] rounded-[300px] bg-[#003845] p-10 mt-16">
        {/* Lado esquerdo */}
        <div className="flex flex-col items-center justify-center text-center min-h-[300px]">
          <h1
            className="font-bold text-[45px] text-[#9fffcb] mt-5 mb-8"
            style={{ fontFamily: "'Isidora Soft Alt', 'Isidora Soft', sans-serif" }}
          >
            Gerador de QR Code
          </h1>
          <h2
            className="text-base text-white max-w-[400px] mb-5 leading-relaxed"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Digite um link ou texto e gere seu QR Code instantaneamente.
          </h2>
          <input
            type="text"
            className="p-2 text-base w-[300px] rounded-[20px] border border-gray-300 font-sans text-center mb-4 bg-white"
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            placeholder="Digite um link ou texto..."
          />
          <Button
            className="font-bold rounded-[20px] bg-[#002631] text-white hover:bg-black px-5 py-2 mt-2"
            onClick={gerarQRCode}
          >
            Gerar QR Code
          </Button>
        </div>
        {/* Lado direito */}
        <div className="flex flex-col items-center justify-center bg-[#9fffcb] rounded-[200px] p-8 gap-6 min-h-[300px]">
          <div ref={qrRef}></div>
          <Button
            className="font-bold rounded-[20px] bg-[#002631] text-white hover:bg-black px-5 py-2"
            onClick={baixarQRCode}
          >
            Baixar
          </Button>
        </div>
      </div>
      
      {/* Back to Home Button */}
      <Button
        variant="outline"
        className="absolute top-4 left-4 font-bold border-2 border-white bg-transparent text-white hover:bg-white hover:text-black transition-colors"
        asChild
      >
        <Link href="/">← Voltar</Link>
      </Button>
    </div>
  );
}

