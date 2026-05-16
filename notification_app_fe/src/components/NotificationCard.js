import '../styles/notificationCard.css';

function NotificationCard({ notification, isRead }) {
  let color;
  if (notification.Type === 'Placement') {
    color = '#d32f2f';
  } else if (notification.Type === 'Result') {
    color = '#1976d2';
  } else {
    color = '#388e3c';
  }

  const className = isRead ? 'card read' : 'card unread';

  return (
    <div className={className}>
      <div className="type-badge" style={{ backgroundColor: color }}>
        {notification.Type}
      </div>
      <div className="content">
        <p className="message">{notification.Message}</p>
        <span className="time">{notification.Timestamp}</span>
      </div>
    </div>
  );
}

export default NotificationCard;
