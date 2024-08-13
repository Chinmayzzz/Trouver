import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import "../index.css"

const Home = () => {
    const [name, setName] = useState("");
    const navigate = useNavigate();

  return (
    <div>
        <header>
            <div className='hero'>
                <div className='hero-banner'>
                    <h4>Trouver-Your Travel Buddy</h4>
                    <p>"Not all those who wander are lost." --- J.R.R. Tolkien</p>
                    <input type='text' placeholder='' className='input-bar' onChange={(e) => setName(e.target.value)} />
                    <button className='hero-btn' onClick={()=>navigate("/" + name)}>Search</button>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Home