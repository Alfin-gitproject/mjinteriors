"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation"; // or `next/router` for Pages Router
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import About from "@/components/pages/home-1/about";
import Article from "@/components/pages/home-1/article";
import Brand from "@/components/pages/home-1/brand";
import Cta from "@/components/pages/home-1/cta";
import Hero from "@/components/pages/home-1/hero";
import Philosophy from "@/components/ui/sections/philosophy";
import Project from "@/components/pages/home-1/project";
import ServiceHome1 from "@/components/pages/home-1/service";
import ServiceHome3 from "@/components/pages/home-1/services";
import Team from "@/components/pages/home-1/team";
import Testimonial from "@/components/ui/sections/testimonial";
import Video from "@/components/ui/sections/video";
import Content from "@/components/pages/home-1/content";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    if (isMobile && !sessionStorage.getItem("homeReloaded")) {
      sessionStorage.setItem("homeReloaded", "true");
      window.location.reload(true);
    }
  }, []);

  return (
    <div key={Date.now()}>
      <Header />
      <Hero />
      <Brand />
      <Content />
      <ServiceHome1 />
      <About />
      <Project />
      <ServiceHome3 />
      <Philosophy style="home-1" />
      <Video />
      {/* <Team /> */}
      <Testimonial />
      {/* <Article /> */}
      <Cta />
      <Footer />
    </div>
  );
}