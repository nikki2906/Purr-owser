import React from "react";
import "./MainDisplay.css";

const MainDisplay = ( { discoverHandler, clickedAttributeHandler, cat} ) => {
    return (
            <div className = "main-display align-self-center">
                <header>
                    <h1> Purr-owser! </h1>
                    <p> Let’s Purr-owse Through the World of Cats Together! </p>
                </header>
                <div className="display-cat">
                    {/*  if cat.url exists, it renders the first block ( ... ), otherwise it renders the second block ( ... ) */} 
                    {cat.url ? (
                        <div>

                            <h2>{cat.name}</h2>
                            {/* 4 buttons */}
                            <div className = "buttons-container">
                                {/*  it displays the cat’s name, four buttons each displaying one attribute of the cat (breed, life span, origin, weight), and an image of the cat. 
                                Each button has an onClick event handler that calls the clickedAttributeHandler function with the attribute as an argument when the button is clicked.*/} 
                                <button className="discover-button" onClick={() => {
                                    clickedAttributeHandler(cat.breed)
                                }}>
                                    {cat.breed}
                                </button>
                                
                                <button className="discover-button" onClick={() => {
                                    clickedAttributeHandler(`${cat.life_span} years`);
                                }}>
                                    {cat.life_span} years
                                </button>

                                <button className="discover-button" onClick={() =>{
                                    clickedAttributeHandler(cat.origin)
                                }}>
                                    {cat.origin}
                                </button>

                                <button className="discover-button" onClick={() => {
                                    clickedAttributeHandler(`${cat.weight} lbs`);
                                }}>
                                    {cat.weight} lbs
                                </button> 
                            </div>
                            
                            <div className="img-container">
                                <img className="display-image" src={cat.url} />
                            </div>

                        </div>
                    ) : ( <div> </div> )
                    }
                </div>
                <button className="discover-button" onClick={discoverHandler}>
                    <i className="fa-solid fa-shuffle"></i>Discover! 
                </button>
            </div>
    );
};

export default MainDisplay;