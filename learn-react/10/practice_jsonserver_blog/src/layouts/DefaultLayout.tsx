import { Link, Outlet } from "react-router";

export default function DefaultLayout() {
  return (
    <>
      <article className="container mx-auto px-5">
        <div className="max-w-[1100px] mx-auto">
          {/* 헤더 영역 */}
          <header className="flex justify-between items-center py-[54px]">
            <Link to="/">
              <h1 className="text-2xl text-[#000638] font-bold">Sucoding</h1>
            </Link>
            <nav>
              <ul className="flex gap-5 text-lg text-[#605C59]">
                <li>
                  <Link to="/write">Write</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </nav>
          </header>
          <main className="min-h-[calc(100vh)]">
            <Outlet />
          </main>
        </div>
      </article>
      <footer className="bg-[#F5F5F5] py-[36px] ">
        <div className="container flex flex-col justify-end items-center mx-auto">
          <nav className="flex gap-[25px] text-[#544B44] text-sm mb-[26px]">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </nav>
          <div>
            <p className="text-[#3E3E3E]">
              © 2025 Sucoding. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
