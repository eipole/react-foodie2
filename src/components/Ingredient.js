import { Typography } from "@material-ui/core"
import React from "react"

export default function Ingredient({ name, amount }) {
  return (
    <>
      <Typography>
        <span>{name}</span>: <span>{amount}</span>
      </Typography>
    </>
  )
}
