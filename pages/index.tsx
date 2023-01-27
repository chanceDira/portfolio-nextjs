import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Services from "../components/Services";
import Work from "../components/Work";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="  bg-white h-full flex flex-col justify-center items-center ">
      <Header />
      <About />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}
