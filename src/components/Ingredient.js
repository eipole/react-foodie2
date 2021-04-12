import React from "react"

export default function Ingredient({ name, amount }) {
  return (
    <div>
      <span>{name}</span>: <span style={{ paddingLeft: "2rem" }}>{amount}</span>
    </div>
  )
}
