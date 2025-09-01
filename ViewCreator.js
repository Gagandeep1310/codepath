import React from "react";
import { useParams, Link } from "react-router-dom";

function ViewCreator({ creators }) {
  const { id } = useParams();
  const creator = creators.find((c) => c.id === parseInt(id));

  if (!creator) {
    return <h2>Creator not found</h2>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{creator.name}</h1>
      <p>{creator.description}</p>
      {creator.imageURL && (
        <img
          src={creator.imageURL}
          alt={creator.name}
          className="w-64 h-64 object-cover mt-4"
        />
      )}
      <div className="mt-4">
        <a
          href={creator.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          Visit Channel
        </a>
      </div>
      <div className="mt-4">
        <Link to={`/edit/${creator.id}`} className="bg-yellow-500 text-white px-3 py-1 rounded">
          Edit
        </Link>
      </div>
    </div>
  );
}

export default ViewCreator;