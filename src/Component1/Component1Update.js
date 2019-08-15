import React from "react";

export default function Component1Update({ match }) {
  return (
    <div>
      <h1>Component 1 update id: {match.params.id} </h1>
    </div>
  );
}
