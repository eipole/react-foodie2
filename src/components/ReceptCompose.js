import {
  Button,
  Card,
  makeStyles,
  TextareaAutosize,
  TextField,
  Typography
} from "@material-ui/core"
import React, { useContext } from "react"
import { ReceptContext } from "../App"
import ComposeIngredients from "./ComposeIngredients"
import { handleAddIngredient, handleEditRecept } from "./functions"
const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2)
  },
  instructions: {
    paddingTop: theme.spacing(2)
  },
  Typography: {
    paddingTop: theme.spacing(6)
  }
}))

export default function ReceptCompose({ selectedRecept, setEditId }) {
  const { recept, setRecept } = useContext(ReceptContext)
  const classes = useStyles()

  function handleChange(changes) {
    handleEditRecept(
      selectedRecept.id,
      { ...selectedRecept, ...changes },
      recept,
      setRecept
    )
  }
  function handleEditIngredient(id, ingredient) {
    const newIngredients = [...selectedRecept.ingredients]
    const index = newIngredients.findIndex((e) => e.id === id)
    newIngredients[index] = ingredient
    handleChange({ ingredients: newIngredients })
  }
  function handleDeleteIngredient(id) {
    handleChange({
      ingredients: selectedRecept.ingredients.filter((elem) => elem.id !== id)
    })
  }

  return (
    <Card className={classes.container}>
      <Button onClick={(e) => setEditId(undefined)}>Close</Button>
      <Typography variant="h5">Name</Typography>
      <TextField
        onChange={(e) => handleChange({ name: e.target.value })}
        // onInput={(e) => handleChange({ name: e.target.value })}
        value={selectedRecept.name}
        label="name"
        name="name"
        type="text"
      ></TextField>
      <Typography variant="h5">Cook time</Typography>
      <TextField
        onChange={(e) => handleChange({ cookTime: e.target.value })}
        value={selectedRecept.cookTime}
        label="cook time"
        name="cookTime"
        type="text"
      ></TextField>
      <Typography variant="h5">Servings</Typography>
      <TextField
        onChange={(e) => handleChange({ servings: e.target.value })}
        value={selectedRecept.servings}
        label="servings"
        name="servings"
        type="text"
      ></TextField>
      <Typography className={classes.instructions} variant="h5">
        Instructions:
      </Typography>
      <div>
        <TextareaAutosize
          onChange={(e) => handleChange({ instructions: e.target.value })}
          value={selectedRecept.instructions}
          name="instructions"
          rowsMin={5}
          placeholder="mingi jutt"
          type="text"
        />
      </div>
      {selectedRecept.ingredients.map((elem) => {
        return (
          <ComposeIngredients
            key={elem.id}
            func={handleEditIngredient}
            ingredient={elem}
            handleDeleteIngredient={handleDeleteIngredient}
          />
        )
      })}
      <Button
        onClick={(e) => handleAddIngredient(handleChange, selectedRecept)}
      >
        Add ingredient
      </Button>
    </Card>
  )
}
