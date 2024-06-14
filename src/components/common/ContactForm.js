import React from 'react';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data); // You can handle form submission here
  };

  return (
    <div className="bg-richblack-800 rounded-lg shadow-md p-6 w-4/12 mx-auto ">
      <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-white mb-2">Name</label>
          <input type="text" id="name" {...register("name", { required: "Name is required" })} className="bg-richblack-700 rounded-md px-4 py-2 w-full text-white focus:outline-none focus:ring focus:border-richblack-500" />
          {errors.name && <p className="text-red-500 mt-1">{errors.name.message}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-white mb-2">Email</label>
          <input type="email" id="email" {...register("email", { required: "Email is required", pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid email address" } })} className="bg-richblack-700 rounded-md px-4 py-2 w-full text-white focus:outline-none focus:ring focus:border-richblack-500" />
          {errors.email && <p className="text-red-500 mt-1">{errors.email.message}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-white mb-2">Message</label>
          <textarea id="message" {...register("message", { required: "Message is required" })} rows="4" className="bg-richblack-700 rounded-md px-4 py-2 w-full text-white focus:outline-none focus:ring focus:border-richblack-500"></textarea>
          {errors.message && <p className="text-red-500 mt-1">{errors.message.message}</p>}
        </div>
        <button type="submit" className="bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045] text-white font-semibold px-6 py-2 rounded-md hover:bg-gradient-to-r hover:from-[#FCB045] hover:via-[#FD1D1D] hover:to-[#833AB4] focus:outline-none focus:ring focus:border-richblack-500">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
