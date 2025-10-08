import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import ContactArea from "@/components/pages/contact/contact-area";
import ContactMap from "@/components/pages/contact/contact-map";
import InteriorDesign from "@/components/pages/service/InteriorDesign";
import Banner from "@/components/ui/sections/banner";

export default function Interior() {
    return (
        <>
            <Header />
            <Banner pathName="INTERIOR DESIGN" title="Interior design" />
            
            <InteriorDesign />
            <Footer />
        </>
    );
}
