import axios from 'axios';
import {popularGamesUrl,upcomingGamesUrl,newGamesUrl,searchGameUrl} from '../api';

//action creater
export const loadGames=()=>async (dispatch)=>{
    dispatch({
        type:'LOADING_GAMES'
    })

    //fetch
    const popularData=await axios.get(popularGamesUrl());
    const newGamesData=await axios.get(newGamesUrl());
    const upcomingGamesData=await axios.get(upcomingGamesUrl());

    dispatch({
        type:'FETCH_GAMES',
        payload:{
            popular:popularData.data.results,
            upcoming:upcomingGamesData.data.results,
            newGames:newGamesData.data.results
        }
    })
}

export const fetchSearch=(game_name)=>async (dispatch)=>{
    const searchGames=await axios.get(searchGameUrl(game_name));

    dispatch({
        type:'FETCHED_SEARCH',
        payload:{
            searched:searchGames.data.results
        }
    })
}