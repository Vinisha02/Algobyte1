import React from "react";

const EventPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Annual Tech Fest 2025</h1>
      
      <div style={styles.imageContainer}>
        <img src="https://via.placeholder.com/300" alt="Event 1" style={styles.image} />
        <img src="https://via.placeholder.com/300" alt="Event 2" style={styles.image} />
        <img src="https://via.placeholder.com/300" alt="Event 3" style={styles.image} />
      </div>
      
      <p style={styles.description}>
        The Annual Tech Fest 2025 was a grand success! We had exciting coding competitions, 
        hackathons, and inspiring talks from industry experts. A huge shoutout to all 
        participants and organizers for making this event memorable.
      </p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "40px",
    backgroundColor: "#f5f5f5",
  },
  heading: {
    fontSize: "2.5rem",
    color: "#333",
    marginBottom: "20px",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  },
  image: {
    width: "300px",
    height: "200px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  description: {
    marginTop: "20px",
    fontSize: "1.2rem",
    color: "#555",
    maxWidth: "800px",
    margin: "auto",
    lineHeight: "1.6",
  },
};

export default EventPage;
