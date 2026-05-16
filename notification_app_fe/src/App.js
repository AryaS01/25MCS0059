import { useState } from 'react';
import AllNotifications from './pages/AllNotifications';
import PriorityNotifications from './pages/PriorityNotifications';
import './styles/app.css';

function App() {
  const [page, setPage] = useState('all');

  return (
    <div className="app">
      <header className="header">
        <h1>Notifications</h1>
      </header>

      <nav className="nav">
        <button
          className={page === 'all' ? 'active' : ''}
          onClick={() => setPage('all')}
        >
          All Notifications
        </button>
        <button
          className={page === 'priority' ? 'active' : ''}
          onClick={() => setPage('priority')}
        >
          Priority
        </button>
      </nav>

      <div className="main">
        {page === 'all' && <AllNotifications />}
        {page === 'priority' && <PriorityNotifications />}
      </div>
    </div>
  );
}

export default App;
