import React from "react";
import Banner from "./Banner";
import Missonvission from "./Missonvission";

const About = () => {
  return (
    <>
      <Banner />
      <div className="about">
        <h1 className="text-3xl font-bold text-center mb-12 underline">
          About Us
        </h1>
      We are a Ship Management Company headquartered in Mumbai, India We are
        currently holders of Oil Tanker DOC from Indian Flag and Oil/Chemical
        DOC from Marshall Islands to comply with our present owners/fleet
        requirement. In light of the ever-evolving regulatory landscape,
        particularly regarding the stringent decarbonization goals established
        by various organizations, we are aiming to adopt a holistic approach
        that benefits all stakeholders. In today’s dynamic market environment,
        our organization endeavors to swiftly and effectively adapt to emerging
        requirements. Our overarching goal is to ensure we operate our fleet
        with full statutory compliance while maintaining operational excellence
        and fostering stakeholder satisfaction.
      </div>
      <Missonvission />
    </>
  );
};

export default About;
