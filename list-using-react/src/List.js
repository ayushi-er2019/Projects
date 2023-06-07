import React from 'react'
import './List.css'
import Ratings from './Ratings.js'

function List({list}) {
  return (
    <div className="list-card">
        <img src={list.image} alt={list.title} />
        <span>
        <h2 style={{padding: '0px', margin: '0px'}}>{list.title}</h2>
        <p style={{padding: '0px', margin: '0px 0px 18px 0px', fontSize: '12px'}}>{list.appeal}</p>
        </span>
        <br/>
        <span>
        <img style={{height:'24px', width: '24px', padding: '0px', margin: '0px'}} src={list.company.logo} alt="" /> {list.company.name} 
        <label style={{color:'green', fontSize:'24px', padding: '0px', margin: '0px'}}> &nbsp; * </label>{list.company.grade}({list.company.grade})
        </span>
        <p style={{padding: '0px', margin: '0px 0px 18px 0px', fontSize: '16px'}}>{list.review}</p>
       
        <Ratings rating={list.company.ratings}/>
    </div>
  )
}

export default List;