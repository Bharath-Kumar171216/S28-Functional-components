import React from 'react'

function CricketPlayer(props) {
  return (
      <div className='mainDiv'>
        <img src={props.imgURL} alt=''></img>
        <h1>Name:{props.name}</h1>
        <h2>Team:{props.team}</h2>
        <h3>Role:{props.role}</h3>
      </div>
  )
}

export default CricketPlayer

// rfce

