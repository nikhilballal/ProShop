import mongoose from 'mongoose'

//establishing connection with database
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline) //gives colors to the console
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold) //.red.underline.bold gives color to the error
    process.exit(1)
  }
}

export default connectDB
