import React, { useState, useEffect } from "react";
import Actorbox from "./Actorbox";
import "../index.css";

function Actor(props) {
  const [actorsData, setActorsData] = useState([]);
  
  let inputVal =  props.data;
  let Url = "";
  if (inputVal.length > 0) {
    Url = `https://api.tvmaze.com/search/people?q=${inputVal}`;
  } else {
    Url = `https://api.tvmaze.com/search/people?q=friends`;
  }

  const getActorsData = async () => {
    try {
      let respone = await fetch(Url);
      let resData = await respone.json();
      setActorsData(resData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getActorsData();
  }, [inputVal]);

  return (
    <>
      <div className='parent'>
        
          {
            actorsData.map((element, index) => {  
            return <Actorbox item = {element.person} />;
          })
          }
          </div>
    </>
  );
}

export default Actor;