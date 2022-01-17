import Head from "next/head";
import Footer from "@components/Footer";
import Header from "@components/Header";
import SectionOne from "@components/Section-one";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Spacestagram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <SectionOne />
      <Footer />
    </div>
  );
}
