import Image from "next/image";
import styles from "./page.module.css";
import { HomeLayout } from "../components/layouts/home-layout";
import { getGalleries, getWebsite } from "../../sanity/sanity-utils";
import Link from "next/link";
import { Footer } from "../components/layouts/footer/Footer";

const images = [
  {
    index: 1,
    height: 400,
    width: 200,
  },
  {
    index: 2,
    height: 300,
    width: 300,
  },
  {
    index: 3,
    height: 280,
    width: 300,
  },
  {
    index: 4,
    height: 281,
    width: 210,
    // fullWidth: true,
  },
  {
    index: 5,
    height: 290,
    width: 270,
  },
  {
    index: 6,
    height: 310,
    width: 210,
  },
  {
    index: 7,
    height: 280,
    width: 210,
  },
  {
    index: 8,
    height: 302,
    width: 209,
  },
  {
    index: 9,
    height: 270,
    width: 301,
  },
  {
    index: 10,
    height: 250,
    width: 410,
  },
  {
    index: 11,
    height: 290,
    width: 400,
  },
];

export const revalidate = 1;

export default async function Home() {
  const galleries = await getGalleries().catch(console.error);
  // galleries.sort((a, b) => (a.title > b.title ? 1 : -1));
  return (
    <HomeLayout>
      <main>
        <div className="image-grid">
          {galleries.map((image, index) => (
            <div
              className="image-container"
              style={{
                height: images[index].height * 2,
                width: images[index].width * 2,
              }}
              // data-full-width={images[index].fullWidth}
              key={index}
            >
              {image.title}
              <Image
                className="image"
                key={index}
                height={images[index].height * 2}
                width={images[index].width * 2}
                // height={400}
                // width={250}
                src={image.image}
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
