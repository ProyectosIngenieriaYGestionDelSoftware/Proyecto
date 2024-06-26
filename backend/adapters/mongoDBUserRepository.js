const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    id: mongoose.Types.ObjectId,
    name: String,
    email: {
        type: String,
        unique: true
    },
    phone_number: String,
    is_business: Boolean,
    address: {
        type: String,
        /*required: function() {
            return this.is_business === true;
        },*/
        default: undefined
    },
    type: {
        type: String,
        required: function() {
            return this.is_business === true;
        }
    },
    services: {
        type: Array,
        required: function() {
            return this.is_business === true;
        },
        default: undefined
    },
    resources: {
        type: Array,
        /*required: function() {
            return this.is_business === true;
        },*/
        default: undefined
    }
});

const UserModel = mongoose.model('User', userSchema)

class MongoDBUserRepository {
    async createUser(userData){
        const newUser = new UserModel(userData);
        return newUser.save();
    }

    async getUserById(userId) {
        return UserModel.findById(userId);
    }

    async getUserByEmail(email) {
        const user = await UserModel.find({email : email});
        return user[0];
    }

    async updateUser(userId, userData) {
        return UserModel.findByIdAndUpdate(userId, userData, { new: true });
    }

    async deleteUser(userId) {
        return UserModel.findByIdAndDelete(userId);
    }

    async getBusinesses() {
        return UserModel.find({ is_business: true });
    }
}

module.exports = MongoDBUserRepository;