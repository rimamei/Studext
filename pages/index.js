import Head from "next/head";
import { Layout, Navbar } from "../components";

export default function Home() {
  return (
    <div className="font-primary m-0 p-0 box-border">
      <Head>
        <title>STUDEXT</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="shadow">
        <Navbar />
      </header>
      <main>
        <Layout />
      </main>

      <footer></footer>
    </div>
  );
}
