import React from "react";

export default function Component3Update({ match }) {
  return (
    <div>
      <h1>Component 3 update id: {match.params.id} </h1>
    </div>
  );
}
