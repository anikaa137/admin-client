import React,{useContext,useState} from 'react';
import { useForm } from "react-hook-form";
import {UserContext} from "../../../App"
import { useHistory } from "react-router-dom";

const Longin = () => {
    let history = useHistory();

const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [msg, setMsg] = useState('')

  const onSubmit = data => {
      fetch("http://localhost:8000/loginUser",{
          method:"POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(data)
      })
      .then((res) => res.json())
      .then((res)=>{
          console.log({res})
          if(res.status){
            fetch("http://localhost:8000/isAdmin",{
                method:"POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(data)
            })
            .then((res) => res.json())
            .then((isAdmin)=>{
                if(isAdmin){
                    setLoggedInUser({user:res.user, rule:'admin'})
                    history.push("/dashboard");    
                }else{
                setLoggedInUser({user:res.user , rule:'user'})
                history.push("/");
                }
            })
            
          }else{
              setLoggedInUser({})
              setMsg(res.msg)
          }
      })
  };
   
  
    return (
     <div class="d-flex justify-content-center">
            <form onSubmit={handleSubmit(onSubmit)}>
        <input type="email" placeholder="Email" {...register("email", {required: true, pattern: /^\S+@\S+$/i})} />
        {errors.email && <span>This field is required</span>}
        <br/>
        <input type="password" placeholder="password" {...register("pass", {required: true})} />
        {errors.pass && <span>This field is required</span>}
         
        <br/>
  
        <input type="submit" />
        <div>{msg}</div>
      </form>
     </div>
  );
}
  
export default Longin;