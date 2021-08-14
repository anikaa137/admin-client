import React from 'react';
import { useForm } from "react-hook-form";

const AddUser = () => {
    const { register, handleSubmit,formState: { errors } } = useForm();

    const onSubmit = (data,e) => {
        fetch("https://tranquil-escarpment-70020.herokuapp.com/addUser", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((res) => {
                if (res) {
                    alert('user succefully')
                    e.target.reset()
                }
            });
        console.log(data)
    };
    return (
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
    );
};

export default AddUser;