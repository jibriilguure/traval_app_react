import React from "react";
import Title from "./title";
import { tourComponentData } from "../data";
function Tours() {
  return (
    <section className="section" id="tours">
      <Title title="featured" subtitle="tOURS" />
      <div className="section-center featured-center">
        {tourComponentData.map((value) => {
          return (
            <article key={value.id} className="tour-card">
              <div className="tour-img-container">
                <img src={value.image} className="tour-img" alt="" />
                <p className="tour-date">{value.date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{value.title}</h4>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cumque vitae tempore voluptatum maxime reprehenderit eum quod
                  exercitationem fugit, qui corporis.
                </p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>
                    {value.country}
                  </p>
                  <p> {value.days} days</p>
                  <p>from {value.price}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Tours;
