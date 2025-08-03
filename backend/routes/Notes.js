import express from 'express'
import { Create, UpdateNotes } from '../controllers/Notes.js'
import { VerfictionToken } from '../middlewares/Verfictiontoken.js'


const NotesRoutes = express.Router()

NotesRoutes.post('/createnote',VerfictionToken,Create)
NotesRoutes.put('/updateNotes/:id',VerfictionToken,UpdateNotes)


export default NotesRoutes