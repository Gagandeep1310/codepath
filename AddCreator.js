import React, { useState } from "react";

function AddCreator({ addCreator }) {
  const [formData, setFormData] = useState({
    name: "",
    url: "",
    description: "",
    imageURL: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCreator(formData);
    setFormData({ name: "", url: "", description: "", imageURL: "" }); // reset form
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Add New Creator</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2"
          required
        />
        <input
          type="url"
          name="url"
          placeholder="Channel URL"
          value={formData.url}
          onChange={handleChange}
          className="border p-2"
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="border p-2"
        />
        <input
          type="url"
          name="imageURL"
          placeholder="Image URL"
          value={formData.imageURL}
          onChange={handleChange}
          className="border p-2"
        />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
          Add Creator
        </button>
      </form>
    </div>
  );
}

export default AddCreator;