import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true}
})

const User = mongoose.model('User', UserSchema);

export default User;


/**
 * 1. Import Mongoose
import mongoose from 'mongoose';
We are importing Mongoose, which allows us to define and work with a database in MongoDB.
Since we are using ES modules, we use import instead of require().

2. Define a Schema
const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
});

A schema defines the structure of data in a MongoDB collection.
new mongoose.Schema({...}) creates a new schema for users.
Each field (name, email, password) has a data type (String) and required: true, meaning it must be provided when creating a user.

3. Create a Model
const User = mongoose.model('User', UserSchema);
A model is created using mongoose.model('User', UserSchema).
'User' is the name of the model (it represents a collection in the database, which MongoDB automatically names users).
UserSchema defines the structure for the users collection.

4. Export the Model
export default User;
This exports the User model so it can be used in other files.
 * 
 * 
 * 
 */