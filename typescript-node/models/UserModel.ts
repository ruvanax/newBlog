const mongoose = require('mongoose');
const Storage = require('./Storage');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	  username: String,
	  password: String
	}, 
	{
	  timestamps: {
	    createdAt: 'createdAt',
	    updatedAt: 'updatedAt'
	  }
});


const UserModel = mongoose.model('user', userSchema);

class User extends Storage{
	constructor() {
		super(UserModel);
	}

	public getByUsername(username: string): object {
		return this.model.findOne({username});
	}
}

export default User;