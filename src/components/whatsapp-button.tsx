"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phoneNumber = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5500000000000").replace(/\D/g, "");
  const message = encodeURIComponent(
    "Olá Antonio! Vi seu site e gostaria de saber mais sobre seus serviços."
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#1d1d1f] shadow-[0_10px_35px_rgba(0,0,0,0.28)] transition hover:scale-105 hover:bg-[#0071e3]"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-white" />
    </a>
  );
}
