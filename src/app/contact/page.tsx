"use client";

import Header from "@/components/Header";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Sent. Thank you for your message!");
    } else {
      alert("Error sending message. Please try again.");
    }
  };

  return (
    <div>
      <Header />
      <main className="bg-primary min-h-screen flex">
        <form
          onSubmit={handleSubmit}
          className="bg-secondary flex flex-col m-auto p-10 rounded-lg shadow-lg md:w-1/2 ld:w-1/2"
        >
          <h2 className="text-accent-primary text-4xl font-bold">Contact Me</h2>
          <div className="flex flex-col my-4">
            <label htmlFor="email" className="text-font font-bold">
              Email:
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className="mt-1 p-2 border border-gray-300 rounded"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col my-4">
            <label htmlFor="subject" className="text-font font-bold">
              Subject:
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              className="mt-1 p-2 border border-gray-300 rounded"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col my-4">
            <label htmlFor="message" className="text-font font-bold">
              Message:
            </label>
            <textarea
              name="message"
              id="message"
              className="mt-1 p-2 border border-gray-300 rounded"
              rows="4"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-accent-primary font-bold m-auto py-2 px-16 my-4 rounded-full hover:bg-accent-secondary transition duration-300 border border-transparent hover:border-font"
          >
            Send
          </button>
        </form>
      </main>
    </div>
  );
}
