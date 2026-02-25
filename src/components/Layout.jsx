import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[1600px] mt-24">{children}</main>
      <Footer />
    </>
  );
};
