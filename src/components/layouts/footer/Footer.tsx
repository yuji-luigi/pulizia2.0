import React from "react";
import { getWebsite } from "../../../../sanity/sanity-utils";
import Link from "next/link";

export const Footer = async () => {
  const [website] = await getWebsite();
  return (
    <footer>
      {website.footer}
      {/* 2.0, porta la pulizia a un step più qualificato, trasformandola da una
      attività tradizionale di solo superficie a una esperienza di consumo e un
      efficace strumento di comunicazione. Rafforzando la tua autenticità della
      storia di ogni azienda. */}
      <section className="mobile info">
        <article className="">
          <h3>Contact</h3>
          <p>{website.owner}</p>
          <p>{website.address}</p>
          <p>{website.email}</p>
          <p>{website.tel}</p>
        </article>
      </section>
    </footer>
  );
};
