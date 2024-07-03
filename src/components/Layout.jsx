import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import Head from "next/head";

export const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Hotel Pousada Bambuzal</title>
      </Head>

      <Header />
      <main className="mx-auto max-w-[1600px] mt-24">{children}</main>
      <Footer />
    </>
  );
};
