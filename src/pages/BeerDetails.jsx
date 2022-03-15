import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'

function BeerDetails() {

    const [ beerDetails, setBeerDetails ] = useState(null)

    const { id } = useParams()

    useEffect(() => {
        getBeerDetails()
    }, [])

    const getBeerDetails = async () => {
        const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
        setBeerDetails(response.data)
    }

    if (!beerDetails){
        return <h2>...Loading</h2>
    }

  return (
    <div>BeerDetails
    
        <Navbar />

                <div>
                    <img src={beerDetails.image_url} alt="Beer" width="100px"/>
                    <h3>{beerDetails.name}</h3>
                    <p>{beerDetails.tagline}</p>
                    <p>{beerDetails.first_brewed}</p>
                    <p>{beerDetails.attenuation_level}</p>
                    <p>{beerDetails.description}</p>
                    <p>{beerDetails.contributed_by}</p>

                </div>

    
    </div>
  )
}

export default BeerDetails