import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import CategoriesGrid from "@/components/home/CategoriesGrid";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <CategoriesGrid />
      <WhyChooseUs />
      <CTASection />
    </Layout>
  );
};

export default Index;
