import React from 'react';
import { useForm } from "react-hook-form";


const MakeAdmin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
   
    const onSubmit = data => {
        fetch("https://tranquil-escarpment-70020.herokuapp.com/makeAdmin",{
            method:"POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        })
        .then((res) => res.json())
        .then((res)=>{
            console.log({res})
            if(res){
               alert('Admin added successfully') 
            }else{
                alert('server err!') 
            }
        })
    };
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <input type="email" placeholder="Email" {...register("email", {required: true, pattern: /^\S+@\S+$/i})} />
        {errors.email && <span>This field is required</span>}
        <br/>
        <input type="password" placeholder="password" {...register("pass", {required: true})} />
        {errors.pass && <span>This field is required</span>}
         
        <br/>
  
        <input type="submit" />
          
      </form>
    );
};

export default MakeAdmin;