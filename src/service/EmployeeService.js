import axios from "axios";

let url="http://localhost:8080/api/employees/list";

let retrieveEmps=(token)=>{
   return axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
}


export{
    retrieveEmps
}