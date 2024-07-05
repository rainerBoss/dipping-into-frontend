function Message() {
    let messages = [
        "Hello",
        "Using React!",
        "How is your day?",
    ];
    return (
        <>
        {messages.length == 0 ? <p>No messages</p>: <p>{messages.length} messages</p>}
        <ul>
            {messages.map((message, index) => {
                return <li
                    key={index}
                    onClick={() => console.log(index)}
                    >
                    {message}
                </li>
            })}
        </ul> 
        </>
    )
}

export default Message;