import { useState, useEffect } from 'react';
import { fetchNotifications } from '../api';
import NotificationCard from '../components/NotificationCard';
import '../styles/page.css';

function AllNotifications() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterType, setFilterType] = useState('All');
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

  function getFiltered() {
    if (filterType === 'All') {
      return notifications;
    }

    const filtered = [];
    for (let i = 0; i < notifications.length; i++) {
      if (notifications[i].Type === filterType) {
        filtered.push(notifications[i]);
      }
    }
    return filtered;
  }

  function markAsRead(id) {
    if (!readIds.includes(id)) {
      setReadIds([...readIds, id]);
    }
  }

  const filtered = getFiltered();

  return (
    <div className="page">
      <h2>All Notifications</h2>
      <p className="count">{filtered.length} notifications</p>

      <div className="filters">
        <button
          className={filterType === 'All' ? 'btn active' : 'btn'}
          onClick={() => setFilterType('All')}
        >
          All
        </button>
        <button
          className={filterType === 'Placement' ? 'btn active' : 'btn'}
          onClick={() => setFilterType('Placement')}
        >
          Placement
        </button>
        <button
          className={filterType === 'Result' ? 'btn active' : 'btn'}
          onClick={() => setFilterType('Result')}
        >
          Result
        </button>
        <button
          className={filterType === 'Event' ? 'btn active' : 'btn'}
          onClick={() => setFilterType('Event')}
        >
          Event
        </button>
      </div>

      {loading && <p className="loading">Loading...</p>}

      {!loading && (
        <div className="list">
          {filtered.map((notif) => (
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

export default AllNotifications;
