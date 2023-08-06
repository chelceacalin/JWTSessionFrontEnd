import React,{useState} from 'react'
function Home() {

  let [storedUser,setStordUser] = useState({})
  storedUser = JSON.parse(localStorage.getItem('user'));

  let [token,setToken]=useState(localStorage.getItem('token')||'')
  return (
    <div className='text-white text-xl'>
     Welcome Home, {storedUser.firstName} {storedUser.lastName} {storedUser.email} {storedUser.role}

     <div>
      Token: {token}
     </div>

    </div>
  )
}

export default Home