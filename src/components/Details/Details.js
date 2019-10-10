import React, { Component } from 'react'
import pet from '@frontendmasters/pet'
import './details.css'
import ImageCarousel from '../ImageCarousel/ImageCarousel'
import { QButton } from '../QButton/QButton'

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

    const photos = this.state.media

    return (
      <div className="details">
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} — ${breed} — ${location}`}</h2>
          <QButton type="q_button">Adopt {name}</QButton>
          <p>{description}</p>
          {/* <img src={photos[0].large} alt={name} /> */}
          <ImageCarousel photos={photos} />
        </div>
      </div>
    )
  }
}

export default Details
