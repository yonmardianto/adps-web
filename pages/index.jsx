import Head from "next/head";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import WhatsAppFloat from "../components/ui/WhatsAppFloat";
import HeroSection from "../components/sections/HeroSection";
import ServicesSection from "../components/sections/ServicesSection";
import JobsSection from "../components/sections/JobsSection";
import ContactSection from "../components/sections/ContactSection";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://adps-web.vercel.app";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          PT Alih Daya Pamungkas Sejahtera | HR & Outsourcing Solutions
        </title>
        <meta
          name="description"
          content="PT Alih Daya Pamungkas Sejahtera – Solusi HR dan outsourcing tenaga kerja profesional terpercaya di Indonesia."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/img/favicon/favicon.ico" />
        <meta property="og:locale" content="id_ID" />
        <meta
          property="og:site_name"
          content="PT Alih Daya Pamungkas Sejahtera"
        />
        <meta property="og:title" content="Business Supply Services" />
        <meta property="og:url" content={BASE_URL} />
        <meta
          property="og:description"
          content="HR, Outsourcing, Human Resources, Candidates , Job Vacancies"
        />

        <meta
          property="og:image"
          content={`${BASE_URL}/assets/img/og_image.png?refresh=1`}
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>

      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <JobsSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat phone="6281807847929" />
    </>
  );
}
