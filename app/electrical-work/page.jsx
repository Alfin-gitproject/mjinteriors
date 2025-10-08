import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";

import ElectricalWork from "@/components/pages/service/ElectricalWork";

import Banner from "@/components/ui/sections/banner";

export default function cupboard() {
    return (
        <>
            <Header />
            <Banner pathName="ELECTRICAL WORK" title="Electrical work" />

            <ElectricalWork />  
            <Footer />
        </>
    );
}
