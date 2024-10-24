import io from 'socket.io-client';

// Solo necesitas configurar la conexión una vez
const socket = io('https://ceis.variamos.com', {
    path: '/socket.io/',
    transports: ['websocket'],
    secure: true,
  });
  

// Exportar la misma instancia para ser usada en cualquier parte de la aplicación
export default socket;
