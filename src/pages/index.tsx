import Head from "next/head";
import { Inter } from "@next/font/google";
import Navbar from "@/components/navbar/navbar";
import Slider from "@/components/home-page/slider";
import History from "@/components/home-page/History";
import Food from "@/components/home-page/Food";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <section>
        <Slider />
      </section>
      <main className="bg-black">
        <section>
          <History />
        </section>
        <section className="bg-black">
          <h3 className="text-primary text-center text-4xl uppercase tracking-widest mb-24">
            Foods
          </h3>
          <Food/>
        </section>
        <section>{/* <Experience/> */}</section>
        <section>{/* <Dines/> */}</section>
      </main>
      {/* <Footer/> */}
    </>
  );
}
