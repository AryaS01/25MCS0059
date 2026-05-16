import { useState, useEffect } from 'react';
import NotificationCard from '../components/NotificationCard';
import '../styles/page.css';

function AllNotifications() {
  const [notifications, setNotifications] = useState([]);
  const [filterType, setFilterType] = useState('All');
  const [readIds, setReadIds] = useState([]);

  useEffect(() => {
    const mockData = [
      { ID: '1', Type: 'Result', Message: 'mid-sem', Timestamp: '2026-05-15 17:10:59' },
      { ID: '2', Type: 'Event', Message: 'induction', Timestamp: '2026-05-16 04:40:48' },
      { ID: '3', Type: 'Result', Message: 'external', Timestamp: '2026-05-16 01:39:53' },
      { ID: '4', Type: 'Result', Message: 'project-review', Timestamp: '2026-05-15 23:09:42' },
      { ID: '5', Type: 'Event', Message: 'cult-fest', Timestamp: '2026-05-15 22:10:37' },
      { ID: '6', Type: 'Placement', Message: 'Amazon hiring', Timestamp: '2026-05-14 10:00:00' },
      { ID: '7', Type: 'Event', Message: 'tech-fest', Timestamp: '2026-05-14 09:00:00' },
      { ID: '8', Type: 'Result', Message: 'internals', Timestamp: '2026-05-13 15:30:00' },
      { ID: '9', Type: 'Placement', Message: 'Google recruiting', Timestamp: '2026-05-13 11:00:00' },
      { ID: '10', Type: 'Event', Message: 'hackathon', Timestamp: '2026-05-12 08:00:00' },
    ];
    setNotifications(mockData);
  }, []);

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
    </div>
  );
}

export default AllNotifications;
