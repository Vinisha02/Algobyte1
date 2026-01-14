import React from "react";

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Teams</h2>

      <section>
        <TestimonialCard
          name={"Technical Team"}
          feedback={"Innovating solutions, enhancing efficiency."}
        />

        <TestimonialCard
          name={"Event-Management Team"}
          feedback={
            "Seamlessly organizing memorable events."
          }
        />

        <TestimonialCard
          name={"Content-Writing Team"}
          feedback={"Crafting impactful and engaging stories."}
        />
        <TestimonialCard
          name={"Digital-Design Team"}
          feedback={"Creating visually stunning digital experiences."}
        />
      </section>
    </div>
  );
};

const TestimonialCard = ({ name, feedback }) => (
  <article>
    <img
      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      alt="User"
    />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);

export default Testimonial;
