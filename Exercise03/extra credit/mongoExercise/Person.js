var mongoose = require('mongoose');

// where does the db name come from? I just made this up
mongoose.connect('mongodb+srv://Romchy:Mongo123@cluster0-2abup.mongodb.net/test/myDatabase');

var Schema = mongoose.Schema;

var personSchema = new Schema({
	name: {type: String, required: true, unique: true},
	age: Number
    });


// why is the collection called "users"? Is that the default or did I do something?
module.exports = mongoose.model('Person', personSchema);

personSchema.methods.standardizeName = function() {
    this.name = this.name.toLowerCase();
    return this.name;
}
