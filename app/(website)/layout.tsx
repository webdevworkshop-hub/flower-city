import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <div >
        <Header/>
        <main>{children}</main>
        <Footer />
      </div>
    );
  }