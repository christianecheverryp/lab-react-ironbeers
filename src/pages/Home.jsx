import React from 'react'
import { Routes, Route, Link } from "react-router-dom"
import AddBeer from './AddBeer'
import Beers from './Beers'
import RandomBeer from './RandomBeer'
import beers from '../assets/beers.png'
import randomBeer from '../assets/random-beer.png'
import newBeer from '../assets/new-beer.png'


function Home() {
  return (
    <div>
    
        <h1>IronBeer</h1>

        <Link to='/beers'>
            <div>
                <img src={beers} alt="beers" />
                <h2>All Beers</h2>
            </div>
        </Link>   
        <br />

        <Link to='/random-beer'>
            <div>
                <img src={randomBeer} alt="randomBeer" />
                <h2>Random Beer</h2>
            </div>
        </Link>
        <br />
        
        <Link to='/new-beer'>
            <div>
                <img src={newBeer} alt="NewBeer" />
                <h2>New Beer</h2>
            </div>
        </Link>

        

        

       
    
    
    
    </div>
  )
}

export default Home