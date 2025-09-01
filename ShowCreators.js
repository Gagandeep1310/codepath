import React, { useEffect, useState } from "react";
import { supabase } from "../client";
import CreatorCard from "../components/CreatorCard";
import { Link } from "react-router-dom";

export default function ShowCreators() {
  const [creators, setCreators] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCreators = async () => {
      const { data, error } = await supabase.from("creators").select("*");
      if (error) {
        alert("Error fetching creators: " + error.message);
      } else {
        setCreators(data);
      }
      setLoading(false);
    };
    fetchCreators();
  }, []);

  if (loading) return <p>Loading creators...</p>;

  return (
    <div>
      <h1>All Creators</h1>
      <Link to="/add">
        <button>Add New Creator</button>
      </Link>

      {creators.length === 0 ? (
        <p>No creators found in the database.</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {creators.map((creator) => (
            <CreatorCard key={creator.id} creator={creator} />
          ))}
        </div>
      )}
    </div>
  );
}
