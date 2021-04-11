import { Button, Container, Grid } from "@material-ui/core"
import React, { createContext, useEffect, useState } from "react"
import ReceptCompose from "./components/ReceptCompose"
import ReceptList from "./components/ReceptList"
import { handleAddRecept } from "./components/functions"

export const ReceptContext = createContext()
const STORAGE_KEY = "reactFoodie.recept"

function App() {
  const [recept, setRecept] = useState(sample)
  const [editId, setEditId] = useState()

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
        <Grid container spacing={3}>
          <Grid xs={6} item>
            <ReceptList recept={recept} />
            <Button
              color="primary"
              onClick={() => handleAddRecept(setRecept, setEditId)}
            >
              Add recept
            </Button>
          </Grid>
          <Grid xs={6} item>
            {editId && (
              <ReceptCompose
                setEditId={setEditId}
                selectedRecept={selectedRecept}
              />
            )}
          </Grid>
        </Grid>
      </Container>
    </ReceptContext.Provider>
  )
}

const sample = [
  {
    id: 1,
    name: "Fried rice",
    servings: 3,
    cookTime: "1:45",
    instructions: "frie chiken,  add salt, eat this",
    ingredients: [
      {
        id: 1,
        name: "chicken",
        amount: "mere en nok"
      },
      {
        id: 2,
        name: "salt",
        amount: "en neve"
      }
    ]
  },
  {
    id: 2,
    name: "Good food",
    servings: 5,
    cookTime: "3:20",
    instructions: "cook pork, add peppers, nam nam",
    ingredients: [
      {
        id: 1,
        name: "pork",
        amount: "2 kg"
      },
      {
        id: 2,
        name: "pepper",
        amount: "masse"
      }
    ]
  }
]

export default App
