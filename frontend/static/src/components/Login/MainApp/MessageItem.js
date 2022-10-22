import { BsFillTrashFill } from 'react-icons/bs';
import { AiFillEdit } from 'react-icons/ai';

function MessageItem(props) {
    return (
        <li className="row align-items-start message">
           <div className="message-box col-10">
                <h2>{props.message.creator}</h2>
                <p>{props.message.text}</p>
            </div>
            <div className="edit-box col-2">
                <BsFillTrashFill className='trash' onClick={() => props.deleteMessage(props.message.id)}/>
                <AiFillEdit />
            </div>
        </li>
    
    )
}

export default MessageItem