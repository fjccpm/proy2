import React from "react";
import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import Card from "./components/Card";
import experiences from "./experiences.js";

function App() {

  const cards_info=experiences.map(exp1 => {
    return (
      <Card
        key={exp1.id} 
        {...exp1}
      />
    )
  })

  return (
    <div className="App">
      <NavBar />
      <Hero />
      <div className="container">
      {cards_info}
      </div>
    </div>
  );
}

export default App; 
