import React from 'react'
import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios, { Axios } from "axios"
import { Link } from 'react-router-dom'

function Beers() {

    const [ beers, setBeers ] = useState([])

    useEffect(() => {
        getBeers()
    }, [])

    const getBeers = async() => {
        try{
            const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers")
            console.log(response.data)
            setBeers(response.data)
        }catch(err){

        }

    }

    if (!beers){
        return <h2>...Loading</h2>
    }

  return (
    <div>beers
    
    <Navbar />

    {beers.map((eachBeer) => {
        return(
            <div key={eachBeer._id}>
            <img src={eachBeer.image_url} alt="Beer"  width="100px"/>
                <Link to={`/beers/${eachBeer._id}`}>
                    <h3>{eachBeer.name}</h3>
                </Link>
                    <p>{eachBeer.tagline}</p>
                    <p>Created by: {eachBeer.contributed_by}</p>
                    <hr />
            </div>
        )
    })}
    
    </div>
  )
}

export default Beers