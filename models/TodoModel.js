const mongoose = require('mongoose');

const URI = 'mongodb+srv://aditya:123@cluster0.o7fng.mongodb.net/temp?retryWrites=true&w=majority';


mongoose.connect(URI, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("\nDatabase Connected!\n");
    }
});

let Schema = mongoose.Schema;

let TodoSchema = new Schema({
    heading: {type: String, required: true},
    description: {type: String, required: true},
    completed: {type: Boolean, required: true},
});

module.exports = mongoose.model("Todo", TodoSchema);
