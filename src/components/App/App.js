import React, { useState, useEffect, useContext } from 'react'
import { Router } from '@reach/router'
import themeContext from '../ContextProviders/themeContext'
import pet, { ANIMALS } from '@frontendmasters/pet'
import { QButton, QLink } from '../QButtons'
import useDropdown from '../hooks/useDropdown'
import AnimalsListDisplay from '../Displays/AnimalsListDisplay'
import './App.css'
import Details from '../Details/Details'
import SelectTheme from '../SelectTheme/SelectTheme'
import CssBox from '../CssBox/CssBox'

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
        <QButton type="q_button" action={() => requestPets()}>
          Click me and see
        </QButton>
      </div>
      <AnimalsListDisplay animalsList={pets || []} />
    </div>
  )
}

function App() {
  const location = 'Seattle, WA'
  const [breeds, setBreeds] = useState([])
  const [animal, AnimalDropdown] = useDropdown('Animal', 'dog', ANIMALS)
  const [breed, BreedDropdown, setBreed] = useDropdown('Breed', '', breeds)
  const [pets, setPets] = useState([])
  const [theme] = useContext(themeContext)

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
      <header className="q_header">
        <QLink path="/">Home</QLink>
        <QLink path="selecttheme">Select Theme</QLink>
        <QLink path="cssbox">CSS Box</QLink>
      </header>
      <div className="main_container" style={{ backgroundColor: theme.main }}>
        <Router>
          <InteractiveElement
            path="/"
            AnimalDropdown={AnimalDropdown}
            BreedDropdown={BreedDropdown}
            requestPets={requestPets}
            pets={pets}
          />

          <Details path="details/:id" />
          <SelectTheme path="selecttheme" />
          <CssBox path="cssbox" />
        </Router>
      </div>
    </div>
  )
}

export default App
