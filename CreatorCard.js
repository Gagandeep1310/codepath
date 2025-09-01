import React from "react";

// Props: creator = { id, name, url, description, imageURL }
export default function CreatorCard({ creator }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        margin: "16px",
        maxWidth: "300px"
      }}
    >
      {creator.imageURL && (
        <img
          src={creator.imageURL}
          alt={creator.name}
          style={{ width: "100%", borderRadius: "8px" }}
        />
      )}
      <h2>{creator.name}</h2>
      <p>{creator.description}</p>
      <a href={creator.url} target="_blank" rel="noopener noreferrer">
        Visit Creator
      </a>
    </div>
  );
}
