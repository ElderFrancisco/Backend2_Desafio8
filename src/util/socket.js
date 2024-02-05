import socketIO from 'socket.io';
import MessageServices from '../services/message.services.js';

const messageServices = new MessageServices();

export default (server) => {
  const io = socketIO(server);

  io.on('connection', async (socket) => {
    console.log('Cliente conectado');

    socket.emit('Chat', await messageServices.getMessages());

    socket.on('newChat', async (message) => {
      await messageServices.addMessage(message);

      socket.emit('Chat', await messageServices.getMessages());
    });
  });
};
