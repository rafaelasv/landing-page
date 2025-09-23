"use client";

import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SenhasPage() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);
  const [options, setOptions] = useState({
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,
  });

  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";

  const generatePassword = useCallback(() => {
    let charset = "";

    if (options.uppercase) charset += uppercaseChars;
    if (options.lowercase) charset += lowercaseChars;
    if (options.numbers) charset += numberChars;
    if (options.symbols) charset += symbolChars;

    if (charset === "") {
      setPassword("Selecione pelo menos uma opção");
      return;
    }

    let newPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      newPassword += charset[randomIndex];
    }

    setPassword(newPassword);
  }, [length, options]);

  const copyToClipboard = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(password);
      alert("Senha copiada!");
    } catch (err) {
      console.error("Erro ao copiar:", err);
    }
  }, [password]);

  const handleOptionChange = (option: keyof typeof options) => {
    setOptions((prev) => ({
      ...prev,
      [option]: !prev[option],
    }));
  };

  const progressPercentage = ((length - 6) / (20 - 6)) * 100;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative bg-gradient-to-br from-purple-700 via-purple-900 to-gray-900 font-sans">

      {/* Header */}
      <h2 className="absolute top-10 text-3xl font-bold text-cyan-400 font-mono">
        Gerador de Senhas
      </h2>

      <h1 className="absolute top-20 mt-5 text-sm text-white text-center px-4">
        Precisa de uma senha? Experimente o gerador de senhas fortes abaixo.
      </h1>

      {/* Main Container */}
      <div className="relative w-[400px] mt-20 max-w-sm sm:max-w-md">

        {/* Password Display Box */}
        <div className="absolute bottom-full mb-4 w-full flex items-center bg-black/40 backdrop-blur-md rounded-lg border-2 border-purple-500 p-3 shadow-lg">
          <input
            type="text"
            value={password}
            readOnly
            className="flex-1 bg-transparent text-white text-lg font-bold outline-none font-mono placeholder:text-gray-400"
            placeholder="Sua senha aparecerá aqui"
          />
          <button
            onClick={copyToClipboard}
            className="ml-3 bg-white/30 hover:bg-white/50 border-none p-2 rounded-lg cursor-pointer text-base transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!password || password === "Selecione pelo menos uma opção"}
          >
            📋
          </button>
        </div>

        {/* Options Container */}
        <div className="bg-black/40 backdrop-blur-md rounded-lg border-2 border-purple-500 p-5 shadow-lg h-[280px]">

          {/* Length Slider */}
          <div className="mb-6">
            <label className="block text-white mb-2">
              Tamanho da senha (caracteres): <span className="font-bold">{length}</span>
            </label>
            <div className="relative">
              <input
                type="range"
                min="6"
                max="20"
                value={length}
                onChange={(e) => setLength(Number(e.target.value))}
                className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-300 password-range"
                style={{
                  background: `linear-gradient(to right, #b400cc ${progressPercentage}%, #ddd ${progressPercentage}%)`
                }}
              />
            </div>
          </div>

          {/* Checkboxes */}
          <div className="flex flex-col gap-3 text-white mb-8">
            {[
              { key: "uppercase" as const, label: "Maiúsculas" },
              { key: "lowercase" as const, label: "Minúsculas" },
              { key: "numbers" as const, label: "Números" },
              { key: "symbols" as const, label: "Símbolos" },
            ].map(({ key, label }) => (
              <label key={key} className="flex items-center cursor-pointer">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={options[key]}
                    onChange={() => handleOptionChange(key)}
                    className="sr-only"
                  />
                  <div className={`w-5 h-5 mr-3 border-2 rounded bg-transparent cursor-pointer transition-all duration-200 flex items-center justify-center ${
                    options[key]
                      ? 'bg-purple-600 border-purple-600'
                      : 'border-cyan-400'
                  }`}>
                    {options[key] && (
                      <span className="text-white text-sm font-bold">✓</span>
                    )}
                  </div>
                </div>
                <span>{label}</span>
              </label>
            ))}
          </div>

          {/* Generate Button */}
          <button
            onClick={generatePassword}
            className="px-10 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white border-none rounded cursor-pointer text-base font-medium mx-auto block mt-8 hover:from-indigo-600 hover:to-purple-700 transition-all duration-200"
          >
            Gerar Senha
          </button>
        </div>
      </div>

      {/* GitHub Corner */}
      <Link
        href="https://github.com/Eles-estao-diolho-em-nois-da-silva"
        className="fixed top-0 right-0 w-20 h-20 z-50 github-corner group"
        aria-label="View source on GitHub"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          width="80"
          height="80"
          viewBox="0 0 250 250"
          className="fill-blue-400 text-white"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
        >
          <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" />
          <path
            d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
            fill="currentColor"
            className="octo-arm"
          />
          <path
            d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
            fill="currentColor"
          />
        </svg>
      </Link>

      {/* Made by */}
      <div className="fixed bottom-3 right-3 text-xs text-white/60 hover:text-white/100 transition-opacity duration-300">
        Made by Rafaela T.
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
