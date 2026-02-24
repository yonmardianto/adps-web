import Head from 'next/head';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import WhatsAppFloat from '../components/ui/WhatsAppFloat';
import HeroSection from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';
import JobsSection from '../components/sections/JobsSection';
import ContactSection from '../components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>PT Alih Daya Pamungkas Sejahtera | HR & Outsourcing Solutions</title>
        <meta name="description" content="PT Alih Daya Pamungkas Sejahtera – Solusi HR dan outsourcing tenaga kerja profesional terpercaya di Indonesia." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <JobsSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat phone="6281234567890" />
    </>
  );
}
