import { useState, useEffect, useCallback } from "react";
import Cookies from 'js-cookie';
import Button from 'react-bootstrap/Button';
import Messages from "./Messages";




// setting a filter to go between different rooms
function ChatApp(props) {
  const [rooms, setRooms] = useState(null);
  const [activeRoom, setActiveRoom] = useState(1);
  const [filter, setFilter] = useState(1)

  const handleError = (err) => {
    console.warn(err);
  };

  const getRooms = useCallback(async () => {
    const response = await fetch("/api_v1/rooms/").catch(handleError);
    if (!response.ok) {
      throw new Error("Network response was not OK");
    } else {
      const data = await response.json();
      setRooms(data);
    }
  }, []);

  useEffect(() => {
    getRooms();
  }, [getRooms]); // 

  if (!rooms) {
    return <div>Fetching data ...</div>;
  }

    const updateFilter = (id) => {
        setFilter(id);
        setActiveRoom(id)
    };

  const roomButtons = rooms.map(room => (
    <li key={room.id}>
        <Button 
            variant="outline-primary"
            onClick={() => updateFilter(room.id)}
            >
                {room.name}
        </Button>
    </li>
  ))

  return (
    <div>
        <ul>{roomButtons}</ul>
        <Messages filter={filter} 
        // user={props.user} 
        activeRoom={activeRoom}/>
    </div>
  );
}

export default ChatApp;