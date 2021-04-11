import { v4 as uuidv4 } from "uuid"

export function handleDeleteRecept(id, store, set) {
  const filtered = store.filter((elem) => elem.id !== id)
  set((prev) => filtered)
}

export function handleAddRecept(set, setId) {
  const newRecept = {
    id: uuidv4(),
    name: " ",
    servings: "",
    cookTime: " ",
    instructions: "",
    ingredients: [
      {
        id: uuidv4(),
        name: "  ",
        amount: "  "
      }
    ]
  }
  setId(newRecept.id)
  set((prev) => [...prev, newRecept])
}

export function handleAddIngredient(func, selectedRecept) {
  const newIngredient = {
    id: uuidv4,
    name: "",
    amount: ""
  }
  func({ ingredients: [...selectedRecept.ingredients, newIngredient] })
}

export function handleEditRecept(id, selectedRecept, recept, set) {
  const newRecept = [...recept]
  const index = newRecept.findIndex((e) => e.id === id)
  newRecept[index] = selectedRecept
  set(newRecept)
}
/* export function handleEditIngredient(id, selectedIngredient, recept,set){
  const newIngredient = [...recept ]
  const index = newIngredient.findIndex((e) => e.id === id)
  newIngredient[index] = selectedIngredient
  set(newIngredient)
} */
