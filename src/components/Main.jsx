import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Detail from './Detail';
import {  useParams } from 'react-router-dom';

const Home = () => {

  const params = useParams();
  console.log(params.name)

  
  const [places, setPlaces] = useState({});



  const getPlaces = (name) => {
    axios.get('https://api.opentripmap.com/0.1/en/places/geoname?name='
     + name + 
    '&apikey=5ae2e3f221c38a28845f05b60faeb61ce51eb7e0cd270eab7226566a')
      .then(res => setPlaces(res.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getPlaces(params.name);
  });

  return (
    <div>
    <Detail places={places} />
    </div>
  )
}

export default Home
