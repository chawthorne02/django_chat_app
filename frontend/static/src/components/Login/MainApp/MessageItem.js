function MessageItem(props) {
    return (
        <li>
            <h2>{props.message.creator}</h2>
            <p>{props.message.text}</p>
        </li>
    )
}

export default MessageItem