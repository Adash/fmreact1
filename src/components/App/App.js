import React, { useState, useEffect } from 'react'
import { Router } from '@reach/router'
import pet, { ANIMALS } from '@frontendmasters/pet'
import { QButton } from '../QButton/QButton'
import useDropdown from '../hooks/useDropdown'
import AnimalsListDisplay from '../Displays/AnimalsListDisplay'
import './App.css'
import Details from '../Details/Details'

function InteractiveElement({
  AnimalDropdown,
  BreedDropdown,
  requestPets,
  pets
}) {
  return (
    <div className="search_results">
      <div className="interactive_element">
        <AnimalDropdown />
        <BreedDropdown />
        <QButton action={() => requestPets()}>Click me and see</QButton>
      </div>
      <AnimalsListDisplay path="/" animalsList={pets || []} />
    </div>
  )
}

function App() {
  const location = 'Seattle, WA'
  const [breeds, setBreeds] = useState([])
  const [animal, AnimalDropdown] = useDropdown('Animal', 'dog', ANIMALS)
  const [breed, BreedDropdown, setBreed] = useDropdown('Breed', '', breeds)
  const [pets, setPets] = useState([])

  async function requestPets() {
    const { animals } = await pet.animals({ location, breed, type: animal })
    setPets(animals)
  }

  useEffect(() => {
    setBreeds([])
    setBreed('')

    pet.breeds(animal).then(({ breeds }) => {
      const breedStrings = breeds.map(({ name }) => name)
      setBreeds(breedStrings)
    }, console.error)
  }, [animal, setBreed, setBreeds])

  return (
    <div className="App">
      <header className="q_header"></header>
      <div className="main_container">
        <Router>
          <InteractiveElement
            path="/"
            AnimalDropdown={AnimalDropdown}
            BreedDropdown={BreedDropdown}
            requestPets={requestPets}
            pets={pets}
          />

          <Details path="details/:id" />
        </Router>
      </div>
    </div>
  )
}

export default App
