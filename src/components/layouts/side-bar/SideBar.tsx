import React from "react";
import { getSideArticles, getWebsite } from "../../../../sanity/sanity-utils";

export const SideBar = async () => {
  const [website] = await getWebsite();
  const sideArticles = await getSideArticles();
  return (
    <div className="sidebar">
      <section className="side-bar-scroll-section">
        {sideArticles.map((article) => (
          <div key={article._id} className="sticky-container">
            <div className="sticky-scroll">
              {/* <h3>{article.title}</h3> */}
              <p>{article.text}</p>
            </div>
          </div>
        ))}
        {/* <div className="sticky-container">
          <div className="sticky-scroll">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse in
            inventore doloremque dolores, dolor iure quod nemo? Delectus
            suscipit, ipsum placeat, error aut earum culpa ipsa molestias,
            fugiat dolor est!
          </div>
        </div>
        <div className="sticky-container">
          <div className="sticky-scroll">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
            voluptatibus, natus nisi saepe voluptates vel iste ullam corporis
            fuga commodi odio voluptatum. Reprehenderit, in, magni provident
            error consequatur iure quis vero inventore suscipit dignissimos
            mollitia. Assumenda sunt sapiente voluptate modi!
          </div>
        </div> */}

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
