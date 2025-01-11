import React from "react";
import img from "./img.png";

const Header = () => {
  return (
  
      <header style={styles.header}>
        <img src={img} alt="Logo" style={styles.image} />
        <h1 style={styles.text}>Item List Manager</h1>
      </header>
    
  );
};

const styles = {
  header: {
    backgroundColor: "#333",
    color: "green",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    flexWrap: "wrap", 
  },
  image: {
    width: "50px", 
    height: "50px",
    marginRight: "10px",
  },
  text: {
    margin: 0,
    fontSize: "24px",
  },
  '@media (max-width: 600px)': {
    image: {
      width: "40px", 
      height: "40px",
      marginBottom: "10px",
    },
    text: {
      fontSize: "20px",
      textAlign: "center",
    },
  },
};

export default Header;
