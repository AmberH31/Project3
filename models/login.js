var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var LoginSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

// This creates our model from the above schema, using mongoose's model method
var Login = mongoose.model("Login", LoginSchema);

// Export the Login model
module.exports = Login;
