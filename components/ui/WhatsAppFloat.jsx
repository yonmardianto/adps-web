import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppFloat({ phone = '6281234567890', message = 'Halo ADPS, saya ingin bertanya mengenai layanan HR dan outsourcing Anda.' }) {
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  return (
    <a href={url} target="_blank" rel="noopener noreferrer"
      className="wa-float-anim fixed bottom-7 right-7 z-50 w-14 h-14 rounded-full flex items-center justify-center text-white text-3xl shadow-[0_6px_24px_rgba(37,211,102,0.45)] bg-gradient-to-br from-[#25D366] to-[#128C7E] hover:scale-110 hover:shadow-[0_12px_32px_rgba(37,211,102,0.55)] transition-transform duration-300"
      title="Chat WhatsApp Admin">
      {/* Pulse ring */}
      <span className="wa-pulse-ring absolute inset-[-4px] rounded-full bg-[rgba(37,211,102,0.25)]" />
      <FaWhatsapp />
    </a>
  );
}
