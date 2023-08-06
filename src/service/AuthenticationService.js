import axios from 'axios'
const BASE_URL = 'http://localhost:8080/api/v1/auth';


let login=(body)=>{
   return axios.post(BASE_URL+"/signin",body)
      .then( (response)=> {
       return response;
      })
      .catch(function (error) {
        console.log(error);
      });
}


export{
  login
}