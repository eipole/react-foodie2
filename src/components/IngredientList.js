import { Typography } from "@material-ui/core"
import React from "react"
import Ingredient from "./Ingredient"

export default function IngredientList({ ingredients }) {
  const ingredient = ingredients.map((elem) => {
    return <Ingredient key={elem.id} {...elem} />
  })
  return (
    <>
      <Typography>Ingredients:</Typography>
      <div>{ingredient}</div>
    </>
  )
}
