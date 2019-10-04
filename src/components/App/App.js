import React, { useState, useEffect } from 'react'
import './App.css'
import { QButton } from '../QButton/QButton'
import pet, { ANIMALS } from '@frontendmasters/pet'
import useDropdown from '../hooks/useDropdown'
import AnimalsListDisplay from '../Displays/AnimalsListDisplay'

function Display(props) {
  return (
    <div className="q_display">
      <p>{props.text}</p>
    </div>
  )
}

function App() {
  const location = 'Seattle, WA'
  const [text, setText] = useState('')
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
        <div className="interactive_element">
          <div className="i_e_text">
            <p>This is textfield saying something very interesting</p>
            <p>{text}</p>
          </div>
          <Display text={text} />
          <AnimalDropdown />
          <BreedDropdown />
          <QButton action={() => requestPets()}>Click me and see</QButton>
          <QButton action={() => console.log(pets)}>Console.log(pets)</QButton>
        </div>
        <div className="list_container">
          <AnimalsListDisplay animalsList={pets || []} />
        </div>
      </div>
    </div>
  )
}

export default App
