import axios from 'axios';
import { useEffect } from 'react';



function LogoutUser (){

    useEffect(()=>{

        async function logoutUser(){
            await axios.get('http://localhost:3000/user/logout');
            window.location.href = '/';
        }

        logoutUser();
    
    },[]);
  

}

export default LogoutUser;