const WebSocket = require('ws')
const verifyUser = require('../middlewares/VerifySocketUser');

const connections = {};

let wss = new WebSocket.Server({noServer : true})
function createWS(server, messageCallback) {
    wss = new WebSocket.Server({server});
    wss.on("connection", (ws) => {
        console.log("Cliente conectado al WebSocket");
        let handshake = true;
        let currentUser = "";
        ws.on("message" , async message =>{
            const parsedMessage = JSON.parse(message.toString('utf-8'));
            if(handshake){
                currentUser = parsedMessage.userEmail;

                if(!(await verifyUser(currentUser))) {
                    ws.send("User not found");
                    return;
                }

                
                connections[currentUser] = ws;
                console.log(`User ${parsedMessage.user} connected.`);
                handshake = false;
                ws.send("Connected");
                return;
            }
            
            messageCallback(parsedMessage);
            
        } );

        ws.on("close", () => {
            delete connections[currentUser];
        })
    }); 
    
} 

function sendMessage(message) {
    wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify(message));
        }
    });
}

function isConnected(userEmail){
    return connections.hasOwnProperty(userEmail);
}

function getUser(userEmail) {
    return connections[userEmail];
}



module.exports = { 
    createWS,
    sendMessage,
    isConnected,
    getUser
};

