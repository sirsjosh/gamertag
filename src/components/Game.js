import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'
import {smallImage} from '../util'

import {useDispatch} from 'react-redux';
import {loadDetail} from '../actions/detailAction'
import {Popup} from '../animations'

function Game({name,released,image,id,game}) {

    const StringPathId=`:${id.toString()}`;
    
    //load details
    const dispatch = useDispatch();
   
    const loadDetailHandler=()=>{
        document.body.style.overflow='hidden'
       dispatch(loadDetail(game,game.short_screenshots));
     
      
    }

    return (
        <StyledGame variants={Popup} initial='hidden' animate='show' layoutId={StringPathId} onClick={loadDetailHandler}>
            <Link to={`/game/:${id}`}>
                <motion.h3 layoutId={`title${StringPathId}`}>{name}</motion.h3>
                <p>{released}</p>
                <motion.img layoutId={`image${StringPathId}`} src={smallImage(image,640)} alt={name}/>
            </Link>
        </StyledGame>
    )
}

const StyledGame=styled(motion.div)`

min-height:30vh;
box-shadow:0px 5px 30px rgba(0,0,0,0.3);
text-align:center;
border-radius:1rem;
cursor:pointer;
overflow:hidden;
    img{
        width:100%;
        height:40vh;
        object-fit:cover;
        display:block;
    }

    @media (max-width:1300px){
        border-radius:0rem;
        
    }
   
`

export default Game;
