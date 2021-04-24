

export const loadDetail=(game,screen)=> (dispatch)=>{
    
    dispatch({
        type:'LOADING_DETAIL'
    })

    dispatch({
        type:'GET_DETAIL',
        payload:{
            game:game,
            screen:screen,
        }
    })
}

