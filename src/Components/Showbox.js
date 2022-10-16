import React from "react";

function Showbox(props){

    const item = props.item;

    return(
        <div className="boxdiv">
            {item.image ? (
                <a href="item._links.self.href">
                <img
                src={item.image.medium}
                class="poster"
                alt={
                item.name != null ? item.name : "Not found! Try Different KeyWord"
                    }
                />
                </a>
                ) : (
                    <div>
                    <img src="https://www.prokerala.com/movies/assets/img/no-poster-available.jpg" alt="" />
                    </div>
                )}
            <div className="rating-div"></div>
            
             <h3>{item.name}</h3>
             <p>{item.language}</p>
             <p>length : {item.averageRuntime} Minutes</p> 
        </div>
    );
}

export default Showbox;