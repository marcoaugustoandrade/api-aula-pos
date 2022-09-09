import mongoose from "mongoose"

const connection = mongoose.connect('mongodb://localhost:27017/escola')

export default connection