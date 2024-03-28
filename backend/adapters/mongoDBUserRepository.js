const mongoose = require('mongoose');
const {mongo} = require("mongoose");

const UserModel = mongoose.model('User', {
    id: mongoose.Types.ObjectId,
    name: String,
    email: String,
    phone_number: String,
    is_business: Boolean,
    type: String,
    services: Array
});

class MongoDBUserRepository {
    async createUser(userData){
        const newUser = new UserModel(userData);
        return newUser.save();
    }

    async getUser(userId) {
        return UserModel.findById(userId);
    }

    async updateUser(userId, userData) {
        return UserModel.findByIdAndUpdate(userId, userData, { new: true });
    }

    async deleteUser(userId) {
        return UserModel.findByIdAndDelete(userId);
    }
}

module.exports = MongoDBUserRepository;