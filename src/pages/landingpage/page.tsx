import Nav from "./nav";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Contactus from "./sections/Contactus";
import Faqs from "./sections/Faqs";
import About from "./sections/Aboutus";
import Footer from "./footer";
import { Separator } from "@/components/ui/separator";

const LandingPage = () => {
  return (
    <div className="">
      <Nav />
      <Hero />
      <Features />
      <Separator />
      <About />
      <Separator />
      <Contactus />
      <Separator />
      <Faqs />
      <Footer />
    </div>
  );
};

export default LandingPage;
