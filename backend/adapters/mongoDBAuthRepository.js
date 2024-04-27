const mongoose = require('mongoose');

const AuthModel = mongoose.model('Auth', {
    _id: mongoose.Types.ObjectId,
    password: String
});

class MongoDBAuthRepository {
    async createUserAuth(authData){
        const newUserAuth = new AuthModel(authData);
        return newUserAuth.save();
    }

    async getUserAuth(userId) {
        return AuthModel.findById(userId);
    }

    async updateUserAuth(userId, authData) {
        return AuthModel.findByIdAndUpdate(userId, authData, { new: true });
    }

    async deleteUserAuth(userId) {
        return AuthModel.findByIdAndDelete(userId);
    }
}

module.exports = MongoDBAuthRepository;