import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";

import CupboardWork from "@/components/pages/service/CupboardWork";

import Banner from "@/components/ui/sections/banner";

export default function cupboard() {
    return (
        <>
            <Header />
            <Banner pathName="CUPBOARD WORK" title="Cupboard work" />

            <CupboardWork />
            <Footer />
        </>
    );
}
