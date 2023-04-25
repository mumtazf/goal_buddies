import React from 'react'
import { useState, useEffect } from 'react'
import '../stylesheets/Card.css'
import more from './more.png'
import { Link } from 'react-router-dom'
import {supabase} from '../client'

const Card = (props) =>  {

 // console.log(props)
  const [count, setCount] = useState(props.upvote)

  const updateCount = async (event) => {
    event.preventDefault();

    await supabase
    .from('Posts')
    .update({ upvote: count + 1})
    .eq('id', props.id);

    setCount((count) => count + 1);
  }

  return (
      <div className="Card">
        <div>
        <Link to={'edit/'+ props.id}><img className="moreButton" alt="edit button" src={more} /></Link>
        <button className="upvotes" onClick={updateCount} >⬆️ {count}</button>  
        </div>
          <Link to={`/FullPost/${props.id}`} key = {props.id}>
                            {props.title} <span className="tab"></span>
          </Link>
          <p className = "time">{props.time}</p>
      </div>
  );
};

export default Card;