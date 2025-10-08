import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";


import GypsumWork from "@/components/pages/service/GypsumWork";

import Banner from "@/components/ui/sections/banner";

export default function cupboard() {
    return (
        <>
            <Header />
            <Banner pathName="GYPSUM WORK" title="Gypsum work" />

            <GypsumWork/>  
            <Footer />
        </>
    );
}
