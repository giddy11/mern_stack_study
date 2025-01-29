import mongoose from "mongoose";

const connectToMongoDB =  () => {
    mongoose.connect("mongodb+srv://EDOGHOTU:GigiCarly%401@cluster0.z7bzhhy.mongodb.net/noteapp")
    console.log("Connected to MongoDB")

}

// const connectToMongoDB = async () => {
//   try {
//     await mongoose.connect(
//       "mongodb+srv://EDOGHOTU:GigiCarly%401@cluster0.z7bzhhy.mongodb.net/noteapp"
//     );
//   } catch (error) {
//     console.log("Error connecting to MongoDB", error.message);
//   }
// };

export default connectToMongoDB;
