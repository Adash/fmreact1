import React, { useState, useEffect, useContext } from 'react'
import { Router } from '@reach/router'
import themeContext from '../ContextProviders/themeContext'
import pet, { ANIMALS } from '@frontendmasters/pet'
import { QButton } from '../QButtons'
import useDropdown from '../hooks/useDropdown'
import AnimalsListDisplay from '../Displays/AnimalsListDisplay'
import './App.css'
import Details from '../Details/Details'
import SelectTheme from '../SelectTheme/SelectTheme'
import CssBox from '../CssBox/CssBox'
import Header from '../Header/Header'
import Navbar2k from '../Navbar2000/Navbar2k'

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
  const [cssState, setCssState] = useState('1')
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
      <Navbar2k />
      <Header
        cssState={cssState}
        setCssState={setCssState}
        options={['Box One', 'Box Two']}
      />
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
          <CssBox cssState={cssState} path="cssbox" />
        </Router>
      </div>
    </div>
  )
}

export default App
