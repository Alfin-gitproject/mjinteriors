import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import About from "@/components/pages/home-1/about";
import Article from "@/components/pages/home-1/article";
import Brand from "@/components/pages/home-1/brand";
import Cta from "@/components/pages/home-1/cta";
import Hero from "@/components/pages/home-1/hero";
import Philosophy from "@/components/ui/sections/philosophy";
import Project from "@/components/pages/home-1/project";
import ServiceHome1 from "@/components/pages/home-1/service"; // Alias for home-1 Service
import Team from "@/components/pages/home-1/team";
import Testimonial from "@/components/ui/sections/testimonial";
import Video from "@/components/ui/sections/video";
import Content from "@/components/pages/home-2/content";
import ServiceHome3 from "@/components/pages/home-3/service"; // Alias for home-3 Service

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Brand />
      <Content />
      <ServiceHome1 /> {/* Renders Service from home-1 */}
      <About />
      <Project />
      <ServiceHome3 /> {/* Renders Service from home-3 */}
      <Philosophy style="home-1" />
      <Video />
      {/* <Team /> */}
      <Testimonial />
      {/* <Article /> */}
      <Cta />
      <Footer />
    </>
  );
}