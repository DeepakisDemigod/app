import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  let navigate = useNavigate();
  return (
    <>
      <header>
        <section className="hero">
          <div className="hero-content">
            <h1>welcome to the cod<span>e</span>ditor</h1>
            <p>Create, edit, and run your web  projects `in` a powerful and user-friendly environment.</p>
            <button onClick={() => { navigate("/playground") }} class="cta-button">Get Started</button>
          </div>
        </section> 
      </header>
    </>
  )
};

export default HomePage;
