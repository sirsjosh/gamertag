//base url

const base_url=`https://api.rawg.io/api/`;


const key=`key=${process.env.REACT_APP_RAWG_API}`;
//const key=`key=948aeef87bf24e7f8c5f766cc8c019c4`;

//getting the date
const getCurrentMonth=()=>{
    const month=new Date().getMonth()+1;
   
    if(month<10){
        return `0${month}`
    }else{
        return month;
    }
}

//getting the day
const getCurrentDay=()=>{
    const day=new Date().getDate();
    
    if(day<10){
        return `0${day}`
    }else{
        return day;
    }
}

//current year/month/day
const currentYear=new Date().getFullYear();
const currentMonth=getCurrentMonth();
const currentDay=getCurrentDay();

const currentDate=`${currentYear}-${currentMonth}-${currentDay}`
const lastYear=`${currentYear-1}-${currentMonth}-${currentDay}`
const nextYear=`${currentYear+1}-${currentMonth}-${currentDay}`

//populay games
const popular_games=`games?${key}&dates=${lastYear},${currentDate}&ordering=rating&page_size=10`;
const upcoming_games=`games?${key}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const new_games=`games?${key}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const upcomingGamesUrl=()=>`${base_url}${upcoming_games}`
export const popularGamesUrl=()=>`${base_url}${popular_games}`
export const newGamesUrl=()=>`${base_url}${new_games}`

//Game details
export const gameDetailsUrl=(game_id)=>`${base_url}games/${game_id}`

//searched game 
export const searchGameUrl=(game_name)=>`${base_url}games?${key}&search=${game_name}&page_size=6`;



