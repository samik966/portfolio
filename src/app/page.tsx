import Footer from "@/components/footer";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import Section from "@/components/section";
import Socials from "@/components/socials";
import ThemeToggle from "@/components/theme-toggle";

export default function Home() {
    return (
        <main className="bg-background min-h-screen">
            <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
                <div className="lg:flex lg:justify-between lg:gap-8">
                    <Header className="md:hidden" />
                    <Navbar className="bg-background sticky top-0 z-50 hidden w-full flex-1 gap-3 py-4 max-md:flex" />
                    <div className="fixed top-4 right-2 z-50 max-md:top-15">
                        <ThemeToggle />
                    </div>
                    <div className="bg-background z-10 flex justify-between max-md:flex-col lg:sticky lg:top-0 lg:max-h-screen lg:w-[fit-content] lg:flex-col lg:gap-12 lg:py-24">
                        <Header className="hidden md:block" />

                        <div className="flex flex-col gap-3 lg:flex-1">
                            <Navbar className="flex flex-1 flex-col items-end gap-2 max-md:hidden lg:items-start lg:gap-5" />
                            <Socials className="flex gap-3 md:justify-end lg:justify-start" />
                        </div>
                    </div>
                    <div className="flex-1 px-1 pt-16 lg:w-1/2 lg:py-24">
                        <Section />
                        <Footer />
                    </div>
                </div>
            </div>
        </main>
    );
}
