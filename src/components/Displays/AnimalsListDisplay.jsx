import React from 'react'
import { Link } from '@reach/router'

import './displays.css'

function Animal({ name, age, coat, size, status, breed, photos, id }) {
  let hero = 'http://placecorgi.com/300/300'
  if (photos.length) {
    hero = photos[0].medium
  }

  return (
    <Link to={`/details/${id}`} className="animal">
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Coat: {coat}</p>
      <p>Size: {size}</p>
      <p>Status: {status}</p>
      <img src={hero} alt={name} />
    </Link>
  )
}

function AnimalsListDisplay({ animalsList }) {
  const list = animalsList.map(animal => <Animal key={animal.id} {...animal} />)
  return (
    <div className="list_container">
      <div className="animals_list">{list}</div>
    </div>
  )
}

export default AnimalsListDisplay
