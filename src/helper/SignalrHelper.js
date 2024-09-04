// signalRHelper.js
import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";

let connection = null;




export const joinChatRoom = async (chatroom, onMessageReceived) => {
  const userName = sessionStorage.getItem('username');
  try {
    if (!connection) {
      connection = new HubConnectionBuilder()
        .withUrl("https://localhost:7088/chat")
        .configureLogging(LogLevel.Information)
        .build();

     

      connection.on("JoinSpecificChatRoom", (userName, msg) => {
        console.log('Received in JoinSpecificChatRoom: ' + msg);
      });

      connection.on("ReceiveSpecificMessage", (username, msg) => {
        console.log('Received message: ' + msg);
        if (onMessageReceived) {
          onMessageReceived({ username, msg });
        }
      });

      connection.on("ReceivePrivateMessage", (fromUser, msg) => {
        console.log(`Private message from ${fromUser}: ${msg}`);
        const lgUserName=sessionStorage.getItem('username');
        if (onMessageReceived && fromUser==lgUserName) {
          onMessageReceived({ fromUser, msg, private: true });
        }
      });

      await connection.start();
    }

    await connection.invoke("JoinSpecificChatRoom", { userName, chatroom });
    console.log(`Joined chat room: ${chatroom}`);
  } catch (e) {
    console.log('Error in joinChatRoom:', e);
  }
};

export const sendMessage = async (msg) => {
  try {
    if (connection) {
      await connection.invoke("SendMessage", msg);
      console.log('Message sent: ' + msg);
    } else {
      console.error('Connection not established. Cannot send message.');
    }
  } catch (e) {
    console.log('Error in sendMessage:', e);
  }
};

export const sendPrivateMessage = async (toUser, msg) => {
  try {
    if (connection) {
      const userName = sessionStorage.getItem('username');
      await connection.invoke("SendPrivateMessage",userName, toUser, msg);
      console.log(`Private message sent to ${toUser}: ${msg}`);
    } else {
      console.error('Connection not established. Cannot send private message.');
    }
  } catch (e) {
    console.log('Error in sendPrivateMessage:', e);
  }
};


