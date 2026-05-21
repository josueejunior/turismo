import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ScrollExperience } from "@/components/layout/ScrollExperience";

type AppLayoutProps = {
  children: React.ReactNode;
};

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="page-shell">
      <ScrollExperience />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
