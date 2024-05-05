const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    id: mongoose.Types.ObjectId,
    sender : {
        type : String,
        required : true
    },
    receiver : {
        type : String,
        required : true
    },
    message : {
        type : String,
        required : true
    },
    timestamp : {
        type : Date,
        default : Date.now()
    },
    readed : {
        type : Boolean,
        default : false
    },


});
chatSchema.index({sender : 1});
chatSchema.index({receiver : 1});

const ChatModel = mongoose.model("Chat",chatSchema);

class MongoDBChatRepository{

    requiredFields() {
        return chatSchema.requiredPaths()
    }
    async createMessage(chatData) {
        const newMessaage = new ChatModel(chatData);
        return newMessaage.save();
    }

    async getUserMessages(userEmail){
        const messages = await ChatModel.find({$or: [{sender : userEmail},{receiver: userEmail}]});
        return messages;
    }

    async setReadedMessages(receiver, sender){
        const result = await ChatModel.updateMany({$and : [{receiver : receiver},{sender: sender}]},{$set: { readed: true }});
        return result;
    }
}

module.exports = MongoDBChatRepository;