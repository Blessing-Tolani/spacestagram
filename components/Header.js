import Head from "next/head";

export default function Header() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="bg-shopifyGreen text-2xl flex items-center justify-center sm:text-3xl md:text-4xl font-semibold text-white font-sourcesans h-20 w-full">
        <div>Spacestagram</div>
      </div>
    </>
  );
}
