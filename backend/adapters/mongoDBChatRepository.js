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
    chatNumber : {
        type : Number,
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
chatSchema.index({chatNumber : 1});

const ChatModel = mongoose.model("Chat",chatSchema);

class MongoDBChatRepository{

    requiredFields() {
        return chatSchema.requiredPaths()
    }
    async createMessage(chatData) {
        const newMessaage = new ChatModel(chatData);
        return newMessaage.save();
    }

    async getChatMessages(chatNumber){
        const messages = await ChatModel.find({chatNumber : chatNumber});
        return messages;
    }

    async setReadedMessages(receiver, chatNumber){
        const result = await ChatModel.updateMany({$and : [{receiver : receiver},{chatNumber: chatNumber}]},{$set: { readed: true }});
        return result;
    }

    async checkUnreadMessages(userEmail) {
        const result = await ChatModel.findOne({$and : [{receiver : userEmail},{readed : false}]});
        return result;
    }

    deleteChat(chatNumber) {
        ChatModel.deleteMany({chatNumber : chatNumber});
    }
}

module.exports = MongoDBChatRepository;