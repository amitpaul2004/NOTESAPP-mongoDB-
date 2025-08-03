import mongoose from 'mongoose';


const DbCon=async () => {
    try {
        mongoose.connect(process.env.MONGODB_URL)
        console.log('Database connected successfully')
    } catch (error) {
        console.log('Database connection failed',error)

    }
}

export default DbCon