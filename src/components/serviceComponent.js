import React from "react";
import { serviceComponentData } from "../data";

function ServiceComponent() {
  return (
    <div className="section-center services-center">
      {serviceComponentData.map((value) => {
        return (
          <article key={value.id} className="service">
            <span className="service-icon">
              <i className={value.icon}></i>
            </span>
            <div className="service-info">
              <h4 className="service-title">{value.title}</h4>
              <p className="service-text">{value.pragraph}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default ServiceComponent;
