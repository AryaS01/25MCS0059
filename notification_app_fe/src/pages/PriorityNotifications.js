import { useState, useEffect } from 'react';
import { fetchNotifications } from '../api';
import { getTopN } from '../utils';
import NotificationCard from '../components/NotificationCard';
import '../styles/page.css';

function PriorityNotifications() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [topCount, setTopCount] = useState(10);
  const [readIds, setReadIds] = useState([]);

  useEffect(() => {
    loadNotifications();
  }, []);

  async function loadNotifications() {
    try {
      setLoading(true);
      const data = await fetchNotifications(100, null, null);
      setNotifications(data);
    } catch (error) {
      console.error('Error loading:', error);
    } finally {
      setLoading(false);
    }
  }

  function markAsRead(id) {
    if (!readIds.includes(id)) {
      setReadIds([...readIds, id]);
    }
  }

  const topNotifications = getTopN(notifications, topCount);

  return (
    <div className="page">
      <h2>Priority Notifications</h2>

      <div className="priority-control">
        <label>Show top:</label>
        <select value={topCount} onChange={(e) => setTopCount(parseInt(e.target.value))}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
        </select>
        <span className="info">Showing {topNotifications.length} of {notifications.length}</span>
      </div>

      {loading && <p className="loading">Loading...</p>}

      {!loading && (
        <div className="list">
          {topNotifications.map((notif) => (
            <div key={notif.ID} onClick={() => markAsRead(notif.ID)}>
              <NotificationCard
                notification={notif}
                isRead={readIds.includes(notif.ID)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PriorityNotifications;
