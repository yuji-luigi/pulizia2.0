import Image from "next/image";
import styles from "./page.module.css";

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

export default function Home() {
  return (
    <main>
      <div className="image-grid">
        {images.map((image, index) => (
          <div key={index}>
            <Image
              className="image"
              key={index}
              height={image.height}
              width={image.width}
              src={`https://source.unsplash.com/random/${image.width}x${image.height}`}
              alt="logo"
            />
          </div>
        ))}
      </div>
      <footer>
        2.0, porta la pulizia a un step più qualificato, trasformandola da una
        attività tradizionale di solo superficie a una esperienza di consumo e
        un efficace strumento di comunicazione. Rafforzando la tua autenticità
        della storia di ogni azienda.
      </footer>
    </main>
  );
}
