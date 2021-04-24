import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux';
import {loadGames} from '../actions/gamesAction';
import Game from '../components/Game'
import GameDetail from '../components/GameDetail'
import styled from 'styled-components'
import {motion,AnimatePresence,AnimateSharedLayout} from 'framer-motion'
import {useLocation} from 'react-router-dom'
import Spinner from '../components/Spinner'
import {FadeIn} from '../animations'

function Home() {

    //get current location
    const location=useLocation();
    const pathId=location.pathname.split('/')[2];

    //fetch games
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(loadGames());
  },[dispatch])

  //get data back
  const {popular,newGames,upcoming,isLoading,searched}=useSelector(state=>state.games)
 
    return (
        <>
        {isLoading ? <Spinner/> :
        <GameList variants={FadeIn} initial='hidden' animate='show'>
            <AnimateSharedLayout type='crossfade'>
            <AnimatePresence>{pathId && <GameDetail pathId={pathId}/>}</AnimatePresence>
            
            {searched.length ? (
            <div className='searched'>
            <h2>Searched</h2>
            <Games>
                {searched.map(game=>(
                    
                    <Game game = {game} key={game.id} name={game.name} released={game.released} id={game.id}
                    image={game.background_image}/>
                  
                ))}
            </Games>
            </div>
            ) : ''}

            <h2>Upcoming Games</h2>
            <Games>
                {upcoming.map(game=>(
                    
                    <Game game = {game} key={game.id} name={game.name} released={game.released} id={game.id}
                    image={game.background_image}/>
                  
                ))}
            </Games>
            <h2>Popular Games</h2>
            <Games>
                {popular.map(game=>(
                    <Game game = {game} key={game.id} name={game.name} released={game.released} id={game.id}
                    image={game.background_image}/>
                ))}
            </Games>
            <h2>New Games</h2>
            <Games>
                {newGames.map(game=>(
                    <Game game = {game} key={game.id} name={game.name} released={game.released} id={game.id}
                    image={game.background_image}/>
                ))}
            </Games>
            </AnimateSharedLayout>
        </GameList>
        }
        </>
    )
}

const GameList=styled(motion.div)`
    padding:0rem 5rem;

    h2{
        text-align:center;
        padding:5rem 0rem;

        @media (max-width:1300px){
        padding:1rem 1rem;
    }
    
    }

    @media (max-width:1300px){
        overflow-x:hidden;
        padding:0rem;
    }
`

const Games=styled(motion.div)`
    min-height:80vh;
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(500px,1fr));
    grid-column-gap:3rem;
    grid-row-gap:5rem;

    @media (max-width:1300px){
        grid-column-gap:0rem;
        grid-row-gap:2rem;
        padding:0
        
    }
`

export default Home
