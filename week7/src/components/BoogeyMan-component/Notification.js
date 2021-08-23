function Notification({showNotification}){
    return(
        <div className={`notification-box ${showNotification ? 'show' : ''}`}>
        <p>Quick, try using another letter!</p>

        </div>

    )
}

export default Notification;