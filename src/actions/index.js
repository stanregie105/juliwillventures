import axios from 'axios';
export const FETCH_POSTS='FETCH_POSTS';

const IMAGES=[
    {image:'/assets/images/cement.jpg',name:'Cement',describe:'Talk on sand'},
    {image:'/assets/images/granite.jpg',name:'Granite',describe:'Talk on granite'},
    {image:'/assets/images/tiper.jpg',name:'Truck',describe:'Talk on cement'},
    {image:'/assets/images/sand.jpg',name:'Sand',describe:'Talk on cement'}

]

export function fetchPosts(){
    //console.log("Action sent", request);
    //const request=axios.get(IMAGES);
    return {
         type: FETCH_POSTS,
         payload: IMAGES
    };
}
/*
export const fetchPosts=(dispatch)=>{
    //console.log("Action sent", request);
    //const request=axios.get(IMAGES);
    return(dispatch)=>{
    IMAGES.then(({data})=>{
        dispatch({type:FETCH_POSTS, payload:data});
    });
    
    };
}
*/