import Head from "next/head";
import style from "@styles/loader.module.css";

export default function Loading() {
  return (
    <>
      <Head>
        <title>Spacestagram</title>

        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="header fixed w-full h-full bg-shopifyGreen inset-0 flex justify-center items-center">
        <div className=" h-60  flex flex-col items-center">
          <div className="font-sourcesans ">
            <p className=" text-4xl sm:text-5xl md:text-6xl font-bold text-white">
              Spacestagram
            </p>
          </div>
          <div className="">
            <div className={style.blobs}>
              <div className={style.blobcenter}></div>
              <div className={style.blob}></div>
              <div className={style.blob}></div>
              <div className={style.blob}></div>
              <div className={style.blob}></div>
              <div className={style.blob}></div>
              <div className={style.blob}></div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              className="svg"
            >
              <defs>
                <filter id="goo">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="10"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                    result="goo"
                  />
                  <feBlend in="SourceGraphic" in2="goo" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
