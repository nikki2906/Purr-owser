import React from "react";
import "./HistoryExhibit.css";

const HistoryExhibit = ({ cats }) => {
    return (
        <div className="exhibit col">
            <h3>Cat Exhibit</h3>
            <div className="histor-container">
                {/* display a list*/}
                {/* checks if cats exists and if its length is greater than 0. If it is, it executes the first block ( ... ), 
                otherwise it executes the second block ( ... ) */}
                <ul>
                {cats && cats.length > 0 ? (
                    cats.map((cat, index) => {
                        return (
                            <li key={index}>
                                <img className="exhibit-img" src={cat.url}/>
                                <p>A {cat.breed} cat from {cat.origin}.</p>
                            </li>
                        );
                    })
                ) : (
                    <li> 
                        <p> No cat here yet</p>
                    </li>
                )}
                </ul>
            </div>
        </div>
    );
};

export default HistoryExhibit;