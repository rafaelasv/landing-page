import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function GeradorQRPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-purple-50">
      <h1 className="text-2xl font-bold text-purple-600 mb-4">Gerador de QR Code</h1>

    <Button
      variant="outline"
      className="font-bold border-2 border-gray-900 bg-transparent text-gray-900 hover:bg-gray-100"
      asChild
    >
      <Link href="/">Voltar para a Página Inicial</Link>
    </Button>
    </div>
  )
}
