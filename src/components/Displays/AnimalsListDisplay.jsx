import React from 'react'

import './displays.css'

function Animal({ name, age, coat, size, status, breed, photos, id }) {
  let hero = 'http://placecorgi.com/300/300'
  if (photos.length) {
    hero = photos[0].medium
  }

  return (
    <li key={id} className="animal">
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Coat: {coat}</p>
      <p>Size: {size}</p>
      <p>Status: {status}</p>
      <img src={hero} alt={name} />
    </li>
  )
}

function AnimalsListDisplay({ animalsList }) {
  const list = animalsList.map(animal => <Animal key={animal.id} {...animal} />)
  return <ul className="animals_list">{list}</ul>
}

export default AnimalsListDisplay
