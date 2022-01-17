import Head from "next/head";
import Footer from "@components/Footer";
import Header from "@components/Header";
import SectionOne from "@components/Section-one";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Spacestagram</title>
        <link rel="icon" href="/shopify.jpg" />
      </Head>
      <div className="wrapper flex flex-col">
        <div>
          <Header />
        </div>
        <div>
          <SectionOne />
        </div>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
}
