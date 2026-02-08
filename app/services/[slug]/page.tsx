import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceHero from '@/components/services/ServiceHero';
import ServiceSections from '@/components/services/ServiceSections';
import MaintenanceSupport from '@/components/services/MaintenanceSupport';
import ServiceFAQs from '@/components/services/ServiceFAQs';
import { servicesData } from '@/lib/servicesData';

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service =
    servicesData[params.slug] ||
    servicesData['custom-software-development'];

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <ServiceHero title={service.title} subtitle={service.subtitle} />
      <ServiceSections sections={service.sections} />
      <MaintenanceSupport />
      <ServiceFAQs />
      <Footer />
    </main>
  );
}
