import { Card, makeStyles } from "@material-ui/core"
import React from "react"
import IngredientList from "./IngredientList"
import Recept from "./Recept"

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2)
  }
}))

export default function ReceptList({ recept }) {
  const classes = useStyles()

  return (
    <>
      {recept.map((elem) => {
        return (
          <Card className={classes.container} key={elem.id}>
            <Recept {...elem} />
            <IngredientList ingredients={elem.ingredients} />
          </Card>
        )
      })}
    </>
  )
}
