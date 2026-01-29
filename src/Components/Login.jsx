import axios from 'axios'
import {  useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Login(){
const navigate=useNavigate()
 const[formdata,setFormdata]=useState({
    name:'',
    email:'',
})
const handlechange =(e)=>{
    setFormdata({
      ...formdata,[e.target.name]:e.target.value
    })
  }
const handlesubmit=async(e)=>{
    e.preventDefault()

    try {
      const res=await axios.post(`${import.meta.env.VITE_API_URL}login`,formdata)
      console.log(res);
      
if (res.status==200){
    localStorage.setItem("token",res.data.token)
     alert("user logined")
     navigate("/adddata")
}
else{
  alert("login error")
}
}catch (error){
    console.log(error);
    alert("login error",error)
    
}
}
 return(

    <div>
      <form onSubmit={handlesubmit}>
        <h2>login page</h2>
  <input type="email" name="email"onChange={handlechange} value={formdata.email} />,
  <input type="password" name="pass" onChange={handlechange} value={formdata.pass}/>,
  <button type='submit'>Login</button></form></div>
)}
export default Login