import React from "react";

export default function Component2Update({ match }) {
  return (
    <div>
      <h1>Component 2 update id: {match.params.id} </h1>
    </div>
  );
}
