import React from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaLinkedin } from "react-icons/fa";

// Import images
import nupurImage from "../assets/nupur.jpg";
import kopalImage from "../assets/kopal.jpg";
import swastiImage from "../assets/swasti.jpg";
import komalImage from "../assets/komal.jpg";
import teamImage from "../assets/team.jpg";

const Teams = () => {
  const teamData = [
    {
      name: "Nupur Mishra",
      role: "Technical Lead",
      image: nupurImage,
      linkedin: "https://linkedin.com/in/nupur",
    },
    {
      name: "Kopal Sahni",
      role: "Event-Management Lead",
      image: kopalImage,
      linkedin: "https://linkedin.com/in/kopal",
    },
    {
      name: "Swasti Mishra",
      role: "Content-Writing Lead",
      image: swastiImage,
      linkedin: "https://linkedin.com/in/swasti",
    },
    {
      name: "Komal Gupta",
      role: "Digital-Design Lead",
      image: komalImage,
      linkedin: "https://linkedin.com/in/komal",
    },
    {
      name: "Our Team",
      role: "Click to explore the full team.",
      image: teamImage,
      isLink: true,
    },
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  return (
    <div id="teams">
      <h2>Meet the Team</h2>
      <Slider {...settings}>
        {teamData.map((member, index) => (
          <TeamCard
            key={index}
            name={member.name}
            role={member.role}
            image={member.image}
            linkedin={member.linkedin}
            isLink={member.isLink}
          />
        ))}
      </Slider>
    </div>
  );
};

const TeamCard = ({ name, role, image, linkedin, isLink }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (isLink) {
      navigate("/team-details"); // Redirect to the TeamDetail page
    }
  };

  return (
    <article className="team-card" onClick={handleClick} style={{ cursor: isLink ? "pointer" : "default" }}>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>{role}</p>
      {linkedin && (
        <a href={linkedin} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
          <FaLinkedin />
        </a>
      )}
    </article>
  );
};

export default Teams;
