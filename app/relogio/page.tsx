"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

const days = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

function formatDate(date: Date) {
  const dayName = days[date.getDay()];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return `${dayName}, ${day} de ${month} de ${year}`;
}

export default function RelogioPage() {
  const [format, setFormat] = useState<"12h" | "24h">("24h");
  const [timezone, setTimezone] = useState(-3);
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Calculate time with timezone
  const utcHours = now.getUTCHours();
  const hours = (utcHours + timezone + 24) % 24;
  const minutes = now.getUTCMinutes();
  const seconds = now.getUTCSeconds();

  // Format to 2 digits
  const pad = (n: number) => n.toString().padStart(2, "0");

  let displayHours = hours;
  let suffix = "";
  if (format === "12h") {
    suffix = hours >= 12 ? "PM" : "AM";
    displayHours = hours % 12;
    if (displayHours === 0) displayHours = 12;
  }

  return (
    <div
      className={`${poppins.className} min-h-screen flex flex-col items-center justify-center`}
      style={{
        background: "linear-gradient(45deg, rgba(135,51,230,0.8), rgba(49,28,131,0.8), rgba(24,105,172,0.8), rgba(133,39,205,0.8))",
      }}
    >

      <div className="flex flex-col items-center justify-center bg-white/40 backdrop-blur-lg rounded-xl shadow-lg p-12 w-full max-w-2xl text-center mb-10"
        style={{
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        }}
      >
        <div className="text-5xl font-bold text-white mb-2 flex items-center justify-center"
        >
          <span className="inline-block w-16">{pad(displayHours)}</span>
          <span className="mx-4">:</span>
          <span className="inline-block w-16">{pad(minutes)}</span>
          <span className="mx-4">:</span>
          <span className="inline-block w-16">{pad(seconds)}</span>
          {format === "12h" && (
            <span className="ml-4 text-2xl text-white">{suffix}</span>
          )}
        </div>
        <div className="text-white text-sm mt-6 mb-2">{formatDate(new Date(now.getTime() + timezone * 3600000))}</div>
      </div>
      
      {/* Back to Home Button */}
      <Button
        variant="outline"
        className="absolute top-4 left-4 font-bold border-2 border-white bg-transparent text-white hover:bg-white hover:text-black transition-colors"
        asChild
      >
        <Link href="/">← Voltar</Link>
      </Button>

      {/* Fixed format and timezone buttons at the bottom */}
      <div className="fixed bottom-4 left-0 w-full flex flex-col md:flex-row gap-6 items-center justify-center z-10">
        <div className="flex items-center gap-2">
          <label htmlFor="format-select" className="text-white font-bold text-xs">Formato:</label>
          <select
            id="format-select"
            value={format}
            onChange={e => setFormat(e.target.value as "12h" | "24h")}
            className="bg-transparent border-2 border-white rounded-xl px-2 py-1 text-white text-xs"
          >
            <option className="text-black" value="12h">12h</option>
            <option className="text-black" value="24h">24h</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="timezone-select" className="text-white font-bold text-xs">Fuso Horário:</label>
          <select
            id="timezone-select"
            value={timezone}
            onChange={e => setTimezone(Number(e.target.value))}
            className="bg-transparent border-2 border-white rounded-xl px-2 py-1 text-white text-xs"
          >
            <option className="text-black" value="0">UTC (Londres, Lisboa)</option>
            <option className="text-black" value="-3">GMT-3 (Brasília, Buenos Aires)</option>
            <option className="text-black" value="1">GMT+1 (Madri, Paris)</option>
          </select>
        </div>
      </div>
    </div>
  );
}
