import { useState, useEffect, useCallback } from "react";
import Cookies from 'js-cookie';
import Button from 'react-bootstrap/Button';
import MessageItem from "./MessageItem";
import Form from 'react-bootstrap/Form';


function Messages(props) {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');

  const handleError = (err) => {
    console.warn(err);
  };

  // makes a fetch request to the corresponding room
  const getMessages = useCallback(async () => {
    const response = await fetch(`/api_v1/messages`).catch(handleError);
    if (!response.ok) {
      throw new Error("Network response was not OK");
    } else {
      const data = await response.json();
      setMessages(data);
    }
  }, []);

  useEffect(() => {
    getMessages();
  }, [getMessages]); 

  if (!messages) {
    return <div>Fetching data ...</div>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      text,
      room: props.activeRoom,
    };

    // makes a post request for the messages
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
      body: JSON.stringify(message),
    };
    const response = await fetch("/api_v1/messages/", options).catch(handleError);
    if (!response.ok) {
      throw new Error("Network response was not OK");
    } else {
      const data = await response.json();
      console.log(data);
    }
  };

  const messageList = messages //filters message to go into the correct room
    .filter((message) => props.filter ? message.room === props.filter : message)
    .map((message) => <MessageItem key={message.id} message={message}/>);

  return (
    <div>
        <ul>{messageList}</ul>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="message">
                <Form.Label></Form.Label>
                <Form.Control 
                    type="text" 
                    value={text}
                    onChange={(e) => setText(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Send
            </Button>
        </Form>
    </div>
  );
}

export default Messages;