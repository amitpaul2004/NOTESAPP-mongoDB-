import express from 'express'
import { Create, Delete, GetNotes, UpdateNotes } from '../controllers/Notes.js'
import { VerfictionToken } from '../middlewares/Verfictiontoken.js'


const NotesRoutes = express.Router()

NotesRoutes.post('/createnote',VerfictionToken,Create)
NotesRoutes.put('/updat,eNotes/:id',VerfictionToken,UpdateNotes)
NotesRoutes.delete('/deleteNotes/:id',VerfictionToken,Delete)
NotesRoutes.get('/GetNotes',VerfictionToken,GetNotes)

export default NotesRoutes