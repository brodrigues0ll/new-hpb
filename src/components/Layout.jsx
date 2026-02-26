import { Header } from "./Header";
import { Footer } from "./Footer";
import GalleryPrefetcher from "./GalleryPrefetcher";

export const Layout = ({ children }) => {
  return (
    <>
      <GalleryPrefetcher />
      <Header />
      <main className="mx-auto max-w-[1600px] mt-20 md:mt-24">{children}</main>
      <Footer />
    </>
  );
};
