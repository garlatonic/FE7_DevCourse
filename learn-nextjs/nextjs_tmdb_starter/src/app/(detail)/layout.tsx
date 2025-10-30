import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
