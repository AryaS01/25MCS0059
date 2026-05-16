import axios from 'axios';

const API_URL = 'http://4.224.186.213/evaluation-service/notifications';

async function fetchNotifications(limit, page, type) {
  let url = `${API_URL}?limit=${limit}`;

  if (page) {
    url += `&page=${page}`;
  }

  if (type && type !== 'All') {
    url += `&notification_type=${type}`;
  }

  const response = await axios.get(url);
  return response.data.notifications;
}

export { fetchNotifications };
