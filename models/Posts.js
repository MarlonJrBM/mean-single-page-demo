var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
	title: String,
	link: String,
	upvotes: {type: Number, default: 0},
	comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]

});

PostSchema.methods.upvote = function(cb) {
	this.upvotes++;
	this.save(cb);
}

mongoose.model('Post', PostSchema);