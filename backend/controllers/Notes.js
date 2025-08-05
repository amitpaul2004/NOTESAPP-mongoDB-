import NotesModel from "../models/Notes.js";



const Create=async (req, res) => {
    try{
        const userId = req.userId
        const { title } = req.body
        if (!title) {
            return res.status(303).json({ success: false, message: "Title is required" });
        }
        const NewNotes = new NotesModel({
            title,
            userId
        })
    await NewNotes.save()
        res.status(200).json({ success: true, message: "Notes created successfully", Notes:NewNotes })    


    }catch(error){
        console.log(error)
        res.status(500).json({ success: false, message: "Internal server error" })
        
    }
} 


const UpdateNotes = async (req, res) => {
    try{

        const userId = req.userId
    const NotesId=req.params.id
    const { title } = req.body
    const FindNotes = await NotesModel.findById({_id:NotesId})
    if (!FindNotes) {
       res.status(404).json({ success: false, message: "Notes Not found" })
    }

        const NotesuserId = FindNotes.userId

        if (userId.toString() !== NotesuserId) {
            return res.status(403).json({ success: false, message: "unathorized user" })
        }

   const updateNotes = await NotesModel.findByIdAndUpdate(
        {_id:NotesId},
        { title},
            {new:true}
   )
   res.status(200).json({ success: true, message: "Notes updated successfully",updateNotes})

    }catch(error){
        console.log(error)
        res.status(500).json({ success: false, message: "Internal server error" })

    }
}

const Delete=async (req, res) => {
    try{
        const userId = req.userId
        console.log(userId)
        const NotesId = req.params.id

        const FindNotes = await NotesModel.findById({_id:NotesId})
        if (!FindNotes) {
            return res.status(404).json({ success: false, message: "Notes Not found" })
        
        }
        const NotesuserId = FindNotes.userId

        if (userId.toString() !== NotesuserId) {
            return res.status(404).json({ success: false, message: "unathorized user" })
        }
        const DeleteNotes = await NotesModel.findByIdAndDelete({NotesId})
        res.status(200).json({ success: true, message: "Notes deleted successfully", DeleteNotes })

    }catch(error){
        console.log(error)
        return res.status(500).json({ success: false, message: "Internal server error" })
    }
}

export {Create,UpdateNotes,Delete}