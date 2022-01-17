import Head from "next/head";

export default function Footer() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className=" relative bg-shopifyGreen flex  flex-col items-center justify-center h-40 w-full text-white mt-10">
        <div className=" text-lg  sm:text-2xl font-semibold font-sourcesans ">
          Spacestagram
        </div>
        <div className="font-light text-sm bottom-0 absolute">
          Designed by Blessing Ojo, 2022
        </div>
      </div>
    </>
  );
}
