import React from 'react'
import styled from 'styled-components';
import spinIcon from '../img/Spinner.gif';
// import GifPlayer from 'react-gif-player'

function Spinner() {
    return (
        <Spin>
            <h1>Loading...</h1>
            {/* <GifPlayer gif={spinIcon} still={spinIcon} />, */}
            <img src={spinIcon} alt='spinner'/>
        </Spin>
    )
}

const Spin=styled.div`
  
   text-align:center;
    
    h1{
        margin:5rem;
        font-size:10rem;

        @media (max-width:1300px){
        margin:1rem;
        font-size:2rem;
    }
    }
    img{
        width:20%;

        @media (max-width:1300px){
        width:100%;
    }
        
    }
    @media (max-width:1300px){
        overflow-x:hidden;
    }
`


export default Spinner
