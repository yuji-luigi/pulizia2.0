import Image from "next/image";
import styles from "./page.module.css";
import { HomeLayout } from "../components/layouts/home-layout";
import { getWebsite } from "../../sanity/sanity-utils";
import Link from "next/link";
import { Footer } from "../components/layouts/footer/Footer";

const images = [
  {
    height: 300,
    width: 200,
  },
  {
    height: 280,
    width: 400,
  },
  {
    height: 280,
    width: 210,
  },
  {
    height: 290,
    width: 390,
  },
  {
    height: 310,
    width: 210,
  },
  {
    height: 280,
    width: 210,
  },
  {
    height: 302,
    width: 209,
  },
  {
    height: 270,
    width: 401,
  },
  {
    height: 250,
    width: 410,
  },
  {
    height: 290,
    width: 400,
  },
  {
    height: 210,
    width: 310,
  },
  {
    height: 280,
    width: 216,
  },
];

export default async function Home() {
  const [website] = await getWebsite();
  return (
    <HomeLayout>
      <main>
        <div className="image-grid">
          {images.map((image, index) => (
            <div key={index}>
              <Image
                className="image"
                key={index}
                // height={image.height}
                // width={image.width}
                height={400}
                width={250}
                src={`https://source.unsplash.com/random/${image.width}x${image.height}`}
                alt="logo"
              />
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </HomeLayout>
  );
}
