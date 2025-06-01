import Hero from "@/components/Hero";
import MenuPreview from "@/components/MenuPreview";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <MenuPreview />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default Index;
