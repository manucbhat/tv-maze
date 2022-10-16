import React from "react";
import "../index.css";

function ActorsBox(props){
    
    const item = props.item;
    console.log(item)


    return(
        <div className="Abox-div">
                {item.image ? (
                        <a href="item._links.self.href">
                      <img
                        src={item.image.medium}
                        class="poster"
                        alt={
                          item.name != null
                            ? item.name
                            : "Not found"
                        }
                      />
                      </a>
                    ) : (
                      <div className="poster" style={{ height: "325px" }}>
                        <img src="https://www.prokerala.com/movies/assets/img/no-poster-available.jpg" />
                      </div>
                    )}
                    <div className="rating-div"></div>
             <h3>{item.name}</h3>
        </div> 
    );
}

export default ActorsBox;