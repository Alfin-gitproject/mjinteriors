import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";

import ArchitecturalPlan from "@/components/pages/service/ArchitecturalPlan";

import Banner from "@/components/ui/sections/banner";

export default function cupboard() {
    return (
        <>
            <Header />
            <Banner pathName="ARCHITECTURE PLAN" title="Architecture plan" />

            <ArchitecturalPlan />
            <Footer />
        </>
    );
}
