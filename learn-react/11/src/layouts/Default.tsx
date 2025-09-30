import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Default() {
  return (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-1 max-w-4xl mx-auto px-6 py-12 w-full">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
