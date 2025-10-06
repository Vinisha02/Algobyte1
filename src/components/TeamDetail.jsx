import React from "react";
import { FaLinkedin } from "react-icons/fa";

const teams = {
  "Technical Team": [
    { name: "Nupur Mishra ", img: "alice.jpg", linkedin: "https://linkedin.com/in/alice" },
    { name: "Vinisha Choudhary", img: "bob.jpg", linkedin: "https://linkedin.com/in/bob" },
    { name: "Vedanshi Awasthi", img: "charlie.jpg", linkedin: "https://linkedin.com/in/charlie" },
    { name: "Kritika jain", img: "david.jpg", linkedin: "https://linkedin.com/in/david" },
    { name: "Shruti Agarwal", img: "emma.jpg", linkedin: "https://linkedin.com/in/emma" },
  ],
  "Event Management Team": [
    { name: "Prashi Garg", img: "fiona.jpg", linkedin: "https://linkedin.com/in/fiona" },
    { name: "Sanskriti Mishra ", img: "george.jpg", linkedin: "https://linkedin.com/in/george" },
    { name: "Garima kapil", img: "hannah.jpg", linkedin: "https://linkedin.com/in/hannah" },
    { name: "Varali Gupta ", img: "isaac.jpg", linkedin: "https://linkedin.com/in/isaac" },
    { name: "Kopal Sahni", img: "julia.jpg", linkedin: "https://linkedin.com/in/julia" },
  ],
  "Content Team": [
    { name: "Palak Pandey ", img: "kevin.jpg", linkedin: "https://linkedin.com/in/kevin" },
    { name: "Swasti Mishra ", img: "liam.jpg", linkedin: "https://linkedin.com/in/liam" },
    { name: "Vasundra", img: "mia.jpg", linkedin: "https://linkedin.com/in/mia" },
    { name: "Paridhi Shukla", img: "noah.jpg", linkedin: "https://linkedin.com/in/noah" },
    { name: "Dittee Singh", img: "olivia.jpg", linkedin: "https://linkedin.com/in/olivia" },
  ],
  "Design Team": [
    { name: "Komal Gupta", img: "peter.jpg", linkedin: "https://linkedin.com/in/peter" },
    { name: "Sanya Anand", img: "quincy.jpg", linkedin: "https://linkedin.com/in/quincy" },
    { name: "Shikha Chaturvedi", img: "rachel.jpg", linkedin: "https://linkedin.com/in/rachel" },
    { name: "Shilpi Mishra", img: "steve.jpg", linkedin: "https://linkedin.com/in/steve" },
    { name: "Ananya Sharma ", img: "tina.jpg", linkedin: "https://linkedin.com/in/tina" },
  ],
};

const Team = () => {
  return (
    <div className="team-container">
      {Object.entries(teams).map(([teamName, members]) => (
        <div key={teamName} className="team-section">
          <h2>{teamName}</h2>
          <div className="team-grid">
            {members.map((member, index) => (
              <div key={index} className="team-member">
                <img src={member.img} alt={member.name} />
                <h3>{member.name}</h3>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="linkedin-icon" />
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Team;