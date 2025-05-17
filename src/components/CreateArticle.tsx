"use client";
import { match } from "assert";
import React, { useState } from "react";

function CreateArticle() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleCreateArticle = () => {
    fetch("http://localhost:8000/acticles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: Math.floor(Math.random() * 10).toString(),
        title: title,
        description: description,
      }),
    }).then(() => {
      // Clear the form fields after successful submission
      setTitle("");
      setDescription("");
    });
  };
  return (
    <div className=" bg-slate-300 py-24 flex flex-col  px-8">
      <label htmlFor="title">Title</label>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        id="title"
        className="border-2 bg-white border-gray-300 rounded-md p-2"
      />
      <label htmlFor="description">Description</label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        id="description"
        className="border-2 bg-white border-gray-300 rounded-md p-2"
      ></textarea>
      <button
        onClick={handleCreateArticle}
        className="bg-blue-500 text-white p-2 rounded-md cursor-pointer"
      >
        Submite
      </button>
    </div>
  );
}

export default CreateArticle;
