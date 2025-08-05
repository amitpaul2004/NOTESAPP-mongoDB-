import express from 'express'
import { Create, Delete, UpdateNotes } from '../controllers/Notes.js'
import { VerfictionToken } from '../middlewares/Verfictiontoken.js'


const NotesRoutes = express.Router()

NotesRoutes.post('/createnote',VerfictionToken,Create)
NotesRoutes.put('/updateNotes/:id',VerfictionToken,UpdateNotes)
NotesRoutes.delete('/deleteNotes/:id',VerfictionToken,Delete)

export default NotesRoutes