import React, { useEffect, useState } from 'react'
import "../App.css"
import * as tt from "@tomtom-international/web-sdk-maps"



const Map = () => {
  const [map, setMap] = useState({});
  const [longitude, setLongitude] = useState(77.2134171);
  const [latitude, setLatitude] = useState(28.6226254);

  useEffect(() => {
    var map = tt.map({
      key: "oWtPW4V2d9nDSoeZvTzrvCtrRMBWH5MG",
      container: "map",
      center: [longitude, latitude],
      zoom: 14,
    })
  
    setMap(map);
    const addMarker = () => {
      const element = document.createElement('div')
      element.className = 'marker'
      new tt.Marker({
        element: element
      })
      .setLngLat([longitude, latitude])
      .addTo(map)
    }

    addMarker()

    return () => map.remove()
  
  },[longitude, latitude])

  return (
    <div className='App'>
    <div id='map'/>
    <div className='search-bar'>
      <input type='text' id="longitude" placeholder='Longitude' style={{margin: 5}}
      onChange={(e) => {setLongitude(e.target.value)}} />
      <input type='text' id="latitude" placeholder='Latitude' style={{margin: 5}}
      onChange={(e) => {setLatitude(e.target.value)}} />
    </div>

    </div>
  )
}

export default Map
