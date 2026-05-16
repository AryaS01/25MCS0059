const { getLogger } = require('../logging_middleware/src/index.js');

const logger = getLogger();

function getTypeWeight(type) {
  if (type === 'Placement') {
    return 3;
  }
  if (type === 'Result') {
    return 2;
  }
  return 1;
}

function sortByPriority(notifications) {
  const copy = [...notifications];

  copy.sort((a, b) => {
    const weightA = getTypeWeight(a.Type);
    const weightB = getTypeWeight(b.Type);

    if (weightA !== weightB) {
      return weightB - weightA;
    }

    const dateA = new Date(a.Timestamp);
    const dateB = new Date(b.Timestamp);

    return dateB - dateA;
  });

  return copy;
}

function getTop(notifications, count) {
  const sorted = sortByPriority(notifications);
  return sorted.slice(0, count);
}

module.exports = {
  getTop,
  sortByPriority,
};
