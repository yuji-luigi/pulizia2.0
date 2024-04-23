import React from "react";
import { getSideArticles, getWebsite } from "../../../../sanity/sanity-utils";

export const SideBar = async () => {
  const [website] = await getWebsite();
  const sideArticles = await getSideArticles();
  return (
    <div className="sidebar">
      <div className="side-header">
        <h2 className="sidebar-title logo">Pulizia 2.0</h2>
        <p className="sidebar-text">
          Pulizia 2.0 is a cleaning service in the city of Milan.
        </p>
      </div>
      <section className="side-bar-scroll-section">
        {sideArticles.map((article) => (
          <div key={article._id} className="sticky-container">
            <div className="sticky-scroll">
              <p>{article.text}</p>
            </div>
          </div>
        ))}

        <div className="sticky-scroll">
          <article className="side-bar-footer">
            <h3>Contact</h3>
            <p>{website.owner}</p>
            <p>{website.address}</p>
            <p>{website.email}</p>
            <p>{website.tel}</p>
          </article>
        </div>
      </section>
    </div>
  );
};
