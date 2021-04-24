import React,{useState} from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import logo from '../img/logo.svg'
//redux 
import {fetchSearch} from '../actions/gamesAction';
import {useDispatch} from 'react-redux'
import {FadeIn} from '../animations'

function Nav() {

  const dispatch = useDispatch();
  const [textInput,setTextInput]=useState('');
  
  const inputHandler=(e)=>{
      setTextInput(e.target.value)
  }

  const submitHandler=(e)=>{
    e.preventDefault();
      dispatch(fetchSearch(textInput));
      setTextInput('');
  }

  const clearSearched=()=>{
      dispatch({type:'CLEAR_SEARCHED'});
  }
    return (
        <StyledNav variants={FadeIn} initial="hidden" animate="show">
            <Logo onClick={clearSearched}>
                <img src={logo} alt='logo'/>
                <h1>GamerTag</h1>
            </Logo>
            <form onSubmit={submitHandler} className="search">
                <input onChange={inputHandler} value={textInput} type="text"/>
                <button type='submit'>Search</button>
            </form>
        </StyledNav>
    )
}

const StyledNav=styled(motion.nav)`
    padding:3rem 5rem;
    text-align:center;

    input{
        width:30%;
        font-size:1.5rem;
        padding: 1rem;
        border:none;
        margin-top:1rem;
        box-shadow:0px 0px 30px rgba(0,0,0,0.2);

        @media (max-width:1300px){
            width:55%;
            padding:0.5rem 0rem;
            font-size:0.5rem;
        }
       
    }

    button{
        font-size:1.5rem;
        border:none;
        border-radius:3px;
        padding:1rem 2rem;
        cursor:pointer;
        background:#ff7676;
        color:white;
        margin-left:1rem;

        @media (max-width:1300px){
            width:40%;
            padding:0.2rem;
            margin-left:5px
        }
    }
`

const Logo=styled(motion.div)`
    display:flex;
    justify-content:center;
    padding:1rem;
    cursor:pointer;

    h1{
        margin-left:1rem;
    }
`

export default Nav
