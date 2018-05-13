const getMessages = (room_id) => {
  room_id = parseInt(room_id, 10);
  if(typeof room_id !== "number") return false;
  return fetch('http://localhost:8080/api/rooms/' + room_id + '/messages')
  .then(response => {
      return response.json();
  });
};

const sendMessage = (room_id, message, name) => {
  room_id = parseInt(room_id, 10);
  if(typeof room_id !== "number") return false;
  if(typeof message !== "string" && message.length < 1) return false;
  if(typeof name !== "string" && name.length < 1) return false;
  return fetch('http://localhost:8080/api/rooms/' + room_id + '/messages',
  {
    method:'POST',
    body: JSON.stringify({message:message, name:name}),
    headers: {
     'content-type': 'application/json'
   },
  })
  .then(response => {
      return response.json();
  });
};

export {
  getMessages, sendMessage
};
