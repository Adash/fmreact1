import React, { Component } from 'react'
import pet from '@frontendmasters/pet'
import './details.css'

class Details extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      error: false
    }
  }

  componentDidMount() {
    pet
      .animal(this.props.id)
      .then(({ animal }) => {
        this.setState({
          name: animal.name,
          animal: animal.type,
          location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
          description: animal.description,
          media: animal.photos,
          breed: animal.breeds.primary,
          loading: false
        })
      })
      .catch(err => this.setState({ error: err }))
  }

  render() {
    if (this.state.loading) {
      const { error } = this.state
      return (
        <>
          <h3>Loading...</h3>
          <p>{error ? JSON.stringify(error) : 'no errors'}</p>
        </>
      )
    }

    const { animal, breed, location, description, name } = this.state

    const photo = this.state.media[0].large

    return (
      <div className="details">
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} — ${breed} — ${location}`}</h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
          <img src={photo} alt={name} />
        </div>
      </div>
    )
  }
}

export default Details
