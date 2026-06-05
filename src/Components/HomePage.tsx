import { useEffect, useState } from "react";
import About from "./About";
import Experience from "./Experience";
import Footer from "./Footer";
import Header from "./Header"
import { Loader } from "./Loader";
import Mail from "./Mail";
import Projects from "./Projects";
import Skills from "./Skills";
import Social from "./Social";
import { Toaster } from "react-hot-toast";

const HomePage = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 5000)
    }, [])
    return <div className={`focus-visible:[&_button]:!outline-none min-h-[100dvh] ${loading ? "flex" : ""} items-center overflow-x-hidden justify-center bg-transparent`}>
        {loading !== true ? <>
            <Toaster />
            <div className="relative w-full">
                <Header />
                <main className="px-6 pt-28 pb-10 sm-mx:px-3">
                    <div className="mx-auto flex w-full max-w-7xl flex-col gap-10">
                        <About />
                        <Experience />
                        <Skills />
                        <Projects />
                        {/* <Contact /> */}
                        <Footer />
                    </div>
                </main>
            </div>
            <Mail />
            <Social />
        </> :
            <Loader />}
    </div>
};
export default HomePage;
