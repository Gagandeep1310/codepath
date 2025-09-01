import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditCreator({ creators, updateCreator }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const creator = creators.find((c) => c.id === parseInt(id));

  const [formData, setFormData] = useState(
    creator || { name: "", url: "", description: "", imageURL: "" }
  );

  if (!creator) {
    return <h2>Creator not found</h2>;
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateCreator(id, formData);
    navigate(`/view/${id}`);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Edit Creator</h1>
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
        <button type="submit" className="bg-yellow-500 text-white px-4 py-2 rounded">
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default EditCreator;