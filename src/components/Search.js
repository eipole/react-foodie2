import {
  AppBar,
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
  Toolbar,
  Typography
} from "@material-ui/core"
import React, { useContext, useRef, useState } from "react"
import { ReceptContext } from "../App"

export default function Search() {
  const { recept } = useContext(ReceptContext)
  const [searchTerm, setSearchTerm] = useState("")
  const [openModal, setOpenModal] = useState(Boolean)
  const [displayRecept, setDisplayRecept] = useState()
  const dialogRef = useRef()

  function findRecept(term) {
    const receptFind = recept.find((elem) => elem.name.includes(term))
    console.log(receptFind)
    setDisplayRecept(receptFind)
  }

  function handleClick() {
    setOpenModal((prev) => !prev)
    findRecept(searchTerm)

    setSearchTerm("")
  }

  function handleChange(event) {
    event.preventDefault()
    const search = event.target.value
    setSearchTerm(search)
  }

  function handleClose() {
    setOpenModal(false)
  }

  return (
    <div>
      <AppBar color="transparent">
        <Toolbar variant="dense">
          <Typography variant="subtitle2" component="p">
            Search for recept
          </Typography>
          <TextField
            type="search"
            style={{ marginLeft: "3rem" }}
            name="search"
            label="search recept"
            value={searchTerm}
            onChange={(event) => handleChange(event)}
          />
          <Button color="primary" onClick={handleClick}>
            Search
          </Button>
        </Toolbar>
        <Dialog
          ref={dialogRef}
          onClose={handleClose}
          maxWidth="xs"
          open={openModal}
        >
          <DialogContent>
            <Typography>Modal todal</Typography>
            <Card>
              <Typography>{displayRecept?.name} </Typography>
              <Typography>{displayRecept?.instructions} </Typography>
            </Card>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
      </AppBar>
    </div>
  )
}
