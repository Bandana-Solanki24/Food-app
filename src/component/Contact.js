import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace this with your actual form submission logic (e.g., sending data to a server)
    console.log(formData);
    // Reset the form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-[500px]  ">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block font-semibold mb-2">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border border-gray-300 px-2 py-1 rounded-md w-full"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-semibold mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border border-gray-300 px-2 py-1 rounded-md w-full"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block font-semibold mb-2">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              className="border border-gray-300 px-2 py-1 rounded-md w-full"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
