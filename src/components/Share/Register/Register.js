import React from 'react';
import { useForm } from "react-hook-form";



const Register = () => {
    const { register, handleSubmit,formState: { errors } } = useForm();

    

    const onSubmit = (data,e) => {
        const userInfo = {
            name : data.name,
            contact : data.contact,
            number: data.number ,
            address: data.address ,
            email : data.email ,
            pass: data.pass,
            userType: data.value ,
            status:  "pending"
        }
        fetch("https://tranquil-escarpment-70020.herokuapp.com/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userInfo),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                if (data) {
                    alert('REGISTRATION SUCCESS')
                    e.target.reset()
                }
                 
            });
        console.log(userInfo)
    };
    return (
        
   <div className="d-flex justify-content-md-center align-items-center vh-100">
        <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Name" {...register("name", {required: true, maxLength: 80})} />
      {errors.name && <span>This field is required</span>}
      <br/>
      <input type="text" placeholder="Contact" {...register("contact", {required: true, maxLength: 100})} />
      {errors.contact && <span>This field is required</span>}
      <br/>
      <input type="email" placeholder="Email" {...register("email", {required: true, pattern: /^\S+@\S+$/i})} />
      {errors.email && <span>This field is required</span>}
      <br/>
      <input type="password" placeholder="password" {...register("pass", {required: true})} />
      {errors.pass && <span>This field is required</span>}
      <br/>
      <input type="tel" placeholder="Mobile number" {...register("number", {required: true, minLength: 6, maxLength: 12})} />
      {errors.number && <span>This field is required</span>}
      <br/>
      <select {...register("userType", { required: true })}>
        <option value="Agent">Agent</option>
        <option value="customer">customer</option>
        <option value="operator">operator</option>
      </select>
     
      <br/>

      <input type="submit" />
    </form>
   </div>
    );
};

export default Register;