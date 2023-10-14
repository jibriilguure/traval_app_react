import React from "react";
import Title from "./title";
import ServiceComponent from "./serviceComponent";

function Service() {
  return (
    <section className="section services" id="services">
      <Title title="Our" subtitle="Service" />
      <ServiceComponent />
    </section>
  );
}

export default Service;
