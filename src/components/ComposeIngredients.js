import { Button, Paper, TextField, Typography } from "@material-ui/core"
import React from "react"

export default function ComposeIngredients({
  ingredient,
  func,
  handleDeleteIngredient
}) {
  function handle(changes) {
    func(ingredient.id, { ...ingredient, ...changes })
  }

  return (
    <Paper>
      <Typography variant="h5">Ingredients</Typography>
      <Typography variant="subtitle2">Name</Typography>
      <Typography variant="subtitle2">Amount</Typography>
      <TextField
        name="name"
        onChange={(e) => handle({ name: e.target.value })}
        type="text"
        value={ingredient.name}
        label="name"
      />
      <TextField
        name="amount"
        onChange={(e) => handle({ amount: e.target.value })}
        type="text"
        value={ingredient.amount}
        label="amount"
      />
      <Button onClick={() => handleDeleteIngredient(ingredient.id)}>
        {" "}
        &times;
      </Button>
    </Paper>
  )
}
