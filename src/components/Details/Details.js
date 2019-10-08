import React, { Component } from 'react'
import pet from '@frontendmasters/pet'
import './details.css'

class Details extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true
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
          loading: false,
          hero: 'http://placecorgi.com/300/300'
        })
      })
      .catch(err => this.setState({ error: err }))
  }

  render() {
    if (this.state.loading) {
      return <h3>Loading...</h3>
    }

    const {
      animal,
      breed,
      location,
      description,
      photos,
      media,
      hero,
      name
    } = this.state

    if (photos) {
      this.setState({ hero: photos[0].large })
    }

    return (
      <div className="details">
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} — ${breed} — ${location}`}</h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
          <img src={hero} alt={name} />
        </div>
      </div>
    )
  }
}

export default Details
