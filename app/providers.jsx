"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { usePathname } from "next/navigation"; // Use usePathname instead of useRouter
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Provider } from "react-redux";
import { store } from "@/redux/store/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SidebarNavigation from "@/components/header/sidebar-navigation";
import Preloader from "@/components/ui/preloader";

if (typeof window !== "undefined") {
    require("bootstrap");
}

export default function Providers({ children }) {
    const pathname = usePathname(); // Get current path

    useEffect(() => {
        if (typeof window !== "undefined") {
            // Initialize AOS
            AOS.init({
                once: true,
                duration: 1000,
                // Temporarily enable AOS on mobile for testing
                // disable: function () {
                //     var maxWidth = 991;
                //     return window.innerWidth < maxWidth;
                // },
            });
            AOS.refresh();

            // Reload Home page on mobile
            const isMobile = /Mobi|Android/i.test(navigator.userAgent);
            if (
                isMobile &&
                pathname === "/" &&
                !sessionStorage.getItem("homeReloaded")
            ) {
                sessionStorage.setItem("homeReloaded", "true");
                window.location.reload(true); // Force reload from server
            }
        }
    }, [pathname]);

    return (
        <>
            <Provider store={store}>
                <Preloader />
                {children}
                <ToastContainer
                    theme="light"
                    autoClose={800}
                    position="top-center"
                    hideProgressBar={true}
                />
                <SidebarNavigation />
            </Provider>
        </>
    );
}