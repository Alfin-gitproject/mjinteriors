import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";

import HandrailWork from "@/components/pages/service/HandrailWork";

import Banner from "@/components/ui/sections/banner";

export default function cupboard() {
    return (
        <>
            <Header />
            <Banner pathName="HANDRAIL WORK" title="Handrail work" />

            <HandrailWork />
            <Footer />
        </>
    );
}
