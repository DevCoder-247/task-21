// App.jsx
import React from "react";
import Card from "./components/Card";
import './components/Card.css'
import './App.css'

function App() {
  const cards = [
    { title: "Card 1", description: "This is card 1 description", image: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { title: "Card 2", description: "This is card 2 description", image: "https://images.pexels.com/photos/757889/pexels-photo-757889.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { title: "Card 3", description: "This is card 3 description", image: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { title: "Card 4", description: "This is card 4 description", image: "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { title: "Card 5", description: "This is card 5 description", image: "https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { title: "Card 6", description: "This is card 6 description", image: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { title: "Card 7", description: "This is card 7 description", image: "https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800" },
    { title: "Card 8", description: "This is card 8 description", image: "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { title: "Card 9", description: "This is card 9 description", image: "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { title: "Card 10", description: "This is card 10 description", image: "https://images.pexels.com/photos/267151/pexels-photo-267151.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { title: "Card 11", description: "This is card 11 description", image: "https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { title: "Card 12", description: "This is card 12 description", image: "https://images.pexels.com/photos/209842/pexels-photo-209842.jpeg?auto=compress&cs=tinysrgb&w=800" }
  ];
  

  return (
    <div className="app">
      <h2>Showing My Collection !</h2>
      <div className="card-container">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
