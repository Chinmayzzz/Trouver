import React, { useEffect, useState } from 'react'
import Map from './Map';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Box, Paper, Stack } from '@mui/material'


const Detail = ({ places }) => {

  const params = useParams();
  console.log(places);
  const longitude = places.lon;
  const latitude = places.lat;
  const [info, setInfo] = useState([]);

  const getInfo = (name) => {
    axios.get('https://api.opentripmap.com/0.1/en/places/autosuggest?name=' + params.name + '&radius=5000&lon=' 
            + longitude + '&lat=' + latitude + '&apikey=5ae2e3f221c38a28845f05b60faeb61ce51eb7e0cd270eab7226566a')
      .then(res => setInfo(res.data.features))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getInfo(params.name);
  });

  console.log(info);
  return (
    <Box sx={{ margin: 5}}>
      <Stack spacing={2} justifyContent={'space-between'} >
        <Box flex={5}>
            <Map />
        </Box>
        <Stack direction={"row"} spacing={2} justifyContent={'space-between'} >
        <Box flex={2} />
          <Box flex={5} sx={{ backgroundColor: "#24404b" }} >
            {
              info.map((item) => {
                return (
                  <>
                    <Paper sx={{ padding: 1, margin: 2, backgroundColor: "#4bb99a" }}>
                        <h4 style={{ marginTop: 10, marginBottom: 10, color: "white" }}>{item.properties.name}</h4>
                        <h5 style={{ margin: 5, color: "white" }}>Distance: {item.properties.dist}m</h5>
                        <p style={{ margin: 2, fontSize: 14, fontWeight: 500, letterSpacing: 2, color: "white" }}>{item.properties.kinds}</p>
                        <h6 style={{ margin: 2, fontSize: 14, fontWeight: 500, letterSpacing: 2, color: "white" }}>{item.geometry.coordinates[0]}, {item.geometry.coordinates[1]}</h6>
                    </Paper>
                  </>
                )
              })
            }
          </Box>
          <Box flex={2} />
        </Stack>
        
      </Stack>
    </Box>
  )
}

export default Detail
