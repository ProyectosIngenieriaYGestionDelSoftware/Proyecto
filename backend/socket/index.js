const WebSocket = require('ws')
const verifyUser = require('../middlewares/VerifySocketUser');

const connections = new Map();
let connectionNumber = 0;

let wss = new WebSocket.Server({noServer : true})
function createWS(server) {
    wss = new WebSocket.Server({server});
    wss.on("connection", (ws) => {
        console.log("Cliente conectado al WebSocket");
        let handshake = true;
        let business = null;
        let client = null;
        let user1 = null;
        let chatNumber = 0;
        ws.on("message" , async message =>{
            
            if(handshake){
                const parsedMessage = JSON.parse(message.toString('utf-8'));
                const currentUser = parsedMessage.userEmail;
                const otherUser = parsedMessage.otherEmail;
                user1 = await verifyUser(currentUser);
                const user2 = await verifyUser(otherUser);
                
                if(!user1 || !user2) {
                    ws.send(`User email ${!user1 ? currentUser : otherUser} not found`);
                    return;
                }

                let userWasInConnections = false;
                connections.forEach((value, key) =>  {
                    userWasInConnections = value.business.email === user1.email || value.client.email === user1.email;
                    if(userWasInConnections) {
                        chatNumber = key;
                        if(value.business.email === user1.email ) {
                            connections.get(key).business.ws = ws;
                        }else{
                            connections.get(key).client.ws = ws;
                        }
                        return;
                    }
                    
                });

                if(!userWasInConnections){
                    user1.ws = ws;
                    [business, client] = user1.is_business ? [user1, user2] : [user2, user1];
                    chatNumber = connectionNumber++;
                    connections.set(chatNumber,{business,client})
                }

                
                console.log(`User ${currentUser} connected.`);
                handshake = false;
                ws.send(JSON.stringify({
                    action : "connected",
                    chatNumber
                }));
                return;
            }
            
            
        } );

        ws.on("close", () => {
            if (user1) {
              const connection = connections.get(chatNumber);
              connection.business.email === user1.email
                ? (connection.business.ws = undefined)
                : (connection.client.ws = undefined);
              if (
                connection.business.ws === undefined &&
                connection.client.ws === undefined
              ) {
                connections.delete(chatNumber);
              }
            }
            
        })
    }); 
    
} 

function sendMessage(is_business,chatNumber,message) {
    if(isConnected(chatNumber, is_business)){
        getClient(chatNumber, is_business).send(JSON.stringify(message));
    }
}

function isConnected(chatNumber, is_business){
    const connection = connections.get(chatNumber);
    if(is_business){
        return connection.business.ws !== undefined;
    }else {
        return connection.client.ws !== undefined;
    }
}

function getClient(chatNumber, is_business) {
    const connection = connections.get(chatNumber);

    if(is_business){
        return connection.business.ws;
    }else {
        return connection.client.ws;
    }
}





module.exports = { 
    createWS,
    sendMessage
};

