import {
  Button,
  Container,
  Grid,
  makeStyles,
  useMediaQuery
} from "@material-ui/core"
import React, { createContext, useEffect, useState } from "react"
import ReceptCompose from "./components/ReceptCompose"
import ReceptList from "./components/ReceptList"
import { handleAddRecept } from "./components/functions"
import Search from "./components/Search"
import { v4 as uuidv4 } from "uuid"

export const ReceptContext = createContext()
const STORAGE_KEY = "reactFoodie.recept"

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "100px"
  }
}))

function App() {
  const [recept, setRecept] = useState(sample)
  const [editId, setEditId] = useState()
  const overmd = useMediaQuery((theme) => theme.breakpoints.up("md"))
  const oversm = useMediaQuery((theme) => theme.breakpoints.up("sm"))
  const classes = useStyles()

  const selectedRecept = recept.find((elem) => elem.id === editId)

  useEffect(() => {
    const jsonRecept = localStorage.getItem(STORAGE_KEY)
    if (jsonRecept !== null) {
      setRecept(JSON.parse(jsonRecept))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(recept))
  }, [recept])

  const contextValues = { recept, setRecept, setEditId, editId }

  return (
    <ReceptContext.Provider value={contextValues}>
      <Container>
        <Search />

        <Grid
          className={classes.container}
          justify="center"
          container
          spacing={3}
        >
          <Grid xs={oversm ? 6 : 12} item>
            <ReceptList recept={recept} />
            <Button
              color="primary"
              onClick={() => handleAddRecept(setRecept, setEditId)}
            >
              Add recept
            </Button>
          </Grid>

          {editId && (
            <Grid xs={oversm ? 6 : 12} item>
              <ReceptCompose
                setEditId={setEditId}
                selectedRecept={selectedRecept}
              />
            </Grid>
          )}
        </Grid>
      </Container>
    </ReceptContext.Provider>
  )
}

const sample = [
  {
    id: uuidv4(),
    name: "Fried rice",
    servings: 3,
    cookTime: "1:45",
    instructions: "frie chiken,  add salt, eat this",
    ingredients: [
      {
        id: uuidv4(),
        name: "chicken",
        amount: "mere en nok"
      },
      {
        id: uuidv4(),
        name: "salt",
        amount: "en neve"
      }
    ]
  },
  {
    id: uuidv4(),
    name: "Good food",
    servings: 5,
    cookTime: "3:20",
    instructions: "cook pork, add peppers, nam nam",
    ingredients: [
      {
        id: uuidv4(),
        name: "pork",
        amount: "2 kg"
      },
      {
        id: uuidv4(),
        name: "pepper",
        amount: "masse"
      }
    ]
  }
]

export default App
