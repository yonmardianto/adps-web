"use client";

import { useState } from "react";
import { FaEnvelope, FaPaperPlane, FaSpinner } from "react-icons/fa";

export default function ContactSection() {
  const [toast, setToast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    type: "",
    message: "",
  });

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 4000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Get reCAPTCHA v2 token
      const token = grecaptcha.getResponse();

      if (!token) {
        showToast("⚠️ Harap selesaikan verifikasi reCAPTCHA terlebih dahulu");
        setIsLoading(false);
        return;
      }

      // Verify token on the backend
      const verifyResponse = await fetch("/api/verify-captcha", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });

      const verifyData = await verifyResponse.json();

      // const verifyData = await verifyCaptcha(token);

      if (!verifyData.success) {
        showToast("⚠️ Verifikasi reCAPTCHA gagal. Silakan coba lagi.");
        grecaptcha.reset();
        setIsLoading(false);
        return;
      }

      // Build mailto URL
      // const recipient = 'ymardianto@gmail.com';
      // const subject = encodeURIComponent('Kontak Kami');
      // const body = encodeURIComponent(
      //   `Nama    : ${form.name}\n` +
      //   `Tipe    : ${form.type}\n` +
      //   `Pesan   : ${form.message}`
      // );

      // const mailtoUrl = `mailto:${recipient}?subject=${subject}&body=${body}`;

      // Open mail client
      // window.location.href = mailtoUrl;

      // Send email via API
      const emailResponse = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!emailResponse.ok) {
        showToast("⚠️ Gagal mengirim email. Silakan coba lagi.");
        grecaptcha.reset();
        setIsLoading(false);
        return;
      } else {
        showToast(`✅ Terima kasih, ${form.name}! Pesan Anda telah terkirim.`);
        setForm({ name: "", email: "", type: "", message: "" });
        grecaptcha.reset();
      }
    } catch (error) {
      console.error("Captcha error:", error);
      showToast("⚠️ Terjadi kesalahan. Silakan coba lagi.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gray-light">
      <div className="max-w-6xl mx-auto">
        <div className="section-tag">
          <FaEnvelope size={11} /> Hubungi Kami
        </div>
        <h2 className="section-title">
          Mari <span className="text-blue-bright">Berkolaborasi</span> Bersama
          Kami
        </h2>
        <p className="text-gray-mid max-w-lg leading-relaxed mb-12">
          Kami siap membantu kebutuhan HR dan outsourcing perusahaan Anda.
          Hubungi tim kami sekarang.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.1)] min-h-[420px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.766919833593!2d106.78211377370118!3d-6.294332261602758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1459c0783e7%3A0x2a7c89b9fce0bb90!2sSouth%20Quarter!5e0!3m2!1sen!2sid!4v1771909982055!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ minHeight: "420px", border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-9 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
            <h3 className="font-sora font-bold text-2xl text-blue-deep mb-1">
              Kirim Pesan
            </h3>
            <p className="text-sm text-gray-mid mb-7">
              Isi form berikut dan tim kami akan menghubungi Anda dalam 1x24
              jam.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-semibold text-blue-deep mb-1.5">
                  Nama Lengkap *
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Masukkan nama lengkap Anda"
                  className="w-full px-4 py-3 rounded-xl border-[1.5px] border-blue-bright/15 bg-gray-light text-blue-deep text-sm outline-none focus:border-blue-bright focus:bg-white focus:ring-[3px] focus:ring-blue-bright/10 transition-all font-jakarta"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-blue-deep mb-1.5">
                  Alamat Email *
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="nama@perusahaan.com"
                  className="w-full px-4 py-3 rounded-xl border-[1.5px] border-blue-bright/15 bg-gray-light text-blue-deep text-sm outline-none focus:border-blue-bright focus:bg-white focus:ring-[3px] focus:ring-blue-bright/10 transition-all font-jakarta"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-blue-deep mb-1.5">
                  Kebutuhan
                </label>
                <select
                  value={form.type}
                  onChange={(e) => setForm({ ...form, type: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-[1.5px] border-blue-bright/15 bg-gray-light text-blue-deep text-sm outline-none focus:border-blue-bright focus:bg-white transition-all font-jakarta"
                >
                  <option value="">-- Pilih Layanan --</option>
                  <option>Konsultasi HR</option>
                  <option>Rekrutmen Profesional</option>
                  <option>Outsourcing Tenaga Kerja</option>
                  <option>Training & Development</option>
                  <option>Lamar Pekerjaan</option>
                  <option>Lainnya</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-blue-deep mb-1.5">
                  Pesan *
                </label>
                <textarea
                  required
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  placeholder="Ceritakan kebutuhan Anda secara singkat..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border-[1.5px] border-blue-bright/15 bg-gray-light text-blue-deep text-sm outline-none focus:border-blue-bright focus:bg-white focus:ring-[3px] focus:ring-blue-bright/10 transition-all font-jakarta resize-y"
                />
              </div>

              {/* reCAPTCHA v2 Checkbox */}
              <div
                className={`flex mb-4 ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                <div
                  className="g-recaptcha"
                  data-sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-gradient-to-r from-blue-bright to-blue-sky text-white font-bold rounded-xl hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(30,111,217,0.4)] transition-all duration-300 flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <FaSpinner className="animate-spin" /> Mengirim...
                  </>
                ) : (
                  <>
                    <FaPaperPlane /> Kirim Pesan
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <div className="fixed top-[90px] right-6 bg-blue-deep text-white px-5 py-3.5 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.25)] border-l-4 border-adps-yellow text-sm font-medium flex items-center gap-2.5 z-[9999] animate-fade-up">
          {toast}
        </div>
      )}
    </section>
  );
}
