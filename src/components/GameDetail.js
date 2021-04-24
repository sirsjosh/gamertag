import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom'
import {smallImage} from '../util'

//import images
import playStation from '../img/playstation.svg';
import apple from '../img/apple.svg';
import gamepad from '../img/gamepad.svg';
import nintendo from '../img/nintendo.svg';
import steam from '../img/steam.svg';
import xbox from '../img/xbox.svg';

//star images
import starEmpty from '../img/star-empty.png';
import starFull from '../img/star-full.png';



function GameDetail({pathId}) {

    
    const history=useHistory();
    //exit detail
    const exitDetailHandler=(e)=>{
        const element=e.target;

        if(element.classList.contains('shadow')){
            document.body.style.overflow='auto';
            history.push('/')
            
        }
    }

    //get platform images
    const getPlatform=(platform)=>{
        switch(platform){
            case 'PlayStation 4':
                return playStation;
            case 'Xbox One':
                return xbox;
            case 'PC':
                return steam;
            case 'Nintendo Switch':
                return nintendo;
            case 'iOS':
                return apple;
            default:
                return gamepad;
        }
    }

    const getStars=()=>{
        const stars=[];
        const rating=Math.floor(game.rating);

        for(let i=1;i<=5;i++){
            if(i<=rating){
                stars.push(<img alt='star' key={i} src={starFull}></img>)
            }else{
                stars.push(<img alt='star' key={i} src={starEmpty}></img>)
            }
        }
        return stars;
    }

     //get data back
  const {screen,game,isLoading}=useSelector(state=>state.detail)
    
    return (
        <>
        {!isLoading &&
        <CardShadow className='shadow' onClick={exitDetailHandler}>
            <Detail layoutId={pathId}>
                <Stats>
                    <div className="rating">
                        <motion.h3 layoutId={`title${pathId}`}>{game.name}</motion.h3>
                        <p>{game.rating}</p>
                        {getStars()}
                    </div>
                    <Info>
                        <h3>Platforms</h3>
                        <Platforms>
                         
                            {game.platforms.map(data=>(
                                <img  src={getPlatform(data.platform.name)} alt={data.platform.name} key={data.platform.id}/>
                            ))}
                        </Platforms>
                    </Info>
                </Stats>
                <Media>
                
                    <motion.img layoutId={`image${pathId}`} src={smallImage(game.background_image,1280)} alt="pic"/> : ''
                    
                </Media>
                <div className="gallery">
                    
                    {screen.map(data=>(
                        <img key={data.id} src={smallImage(data.image,1280)} alt="pic"/>
                    ))}       
                </div>
            </Detail>
        </CardShadow>
        }       
        </>
    )
}

const CardShadow=styled(motion.div)`
    width:100%;
    min-height:100vh;
    overflow-y:scroll;
    background:rgba(0,0,0,0.5);
    position:fixed;
    top:0;
    left:0;
    z-index:10;

    &::-webkit-scrollbar{
        width:0.5rem;
    }
    &::-webkit-scrollbar-thumb{
        background-color:pink;
    }

    &::-webkit-scrollbar-track{
        background:white;
    }
`

const Detail=styled(motion.div)`
    width:80%;
    border-radius:1rem;
    padding:2rem 5rem;
    background:white;
    position:absolute;
    left:10%;
    color:black;
    z-index: 999;

    img{
        width:100%;
    }

    @media (max-width:1300px){
        padding:1rem 1rem;
    }
`

const Stats=styled(motion.div)`
    display:flex;
    align-items:center;
    justify-content:space-between;

    img{
        width:2rem;
        height:2rem;
        display:inline;

        @media (max-width:1300px){
        width:1rem;
        height:1rem;
        }
    }

    


    
`

const Info=styled(motion.div)`
    text-align:center;
`

const Platforms=styled(motion.div)`
    display:flex;
    justify-content:space-evenly;

    img{
        margin-left:3rem;
        @media (max-width:1300px){
        margin-left:1rem;
        
    }
    }

   
`
const Media=styled(motion.div)`
    margin-top:5rem;

    img{
        width:100%;

        
        
    }

    @media (max-width:1300px){
        margin:0;
    }
`
export default GameDetail
