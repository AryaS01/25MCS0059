const { getLogger } = require('../logging_middleware/src/index.js');
const { getTop } = require('./priorityAlgorithm.js');

const logger = getLogger();

const testData = [
  { ID: '1', Type: 'Result', Message: 'mid-sem', Timestamp: '2026-05-15 17:10:59' },
  { ID: '2', Type: 'Event', Message: 'induction', Timestamp: '2026-05-16 04:40:48' },
  { ID: '3', Type: 'Result', Message: 'external', Timestamp: '2026-05-16 01:39:53' },
  { ID: '4', Type: 'Result', Message: 'project-review', Timestamp: '2026-05-15 23:09:42' },
  { ID: '5', Type: 'Event', Message: 'cult-fest', Timestamp: '2026-05-15 22:10:37' },
  { ID: '6', Type: 'Placement', Message: 'Amazon hiring', Timestamp: '2026-05-14 10:00:00' },
];

const top = getTop(testData, 3);

console.log('\nTop 3 Notifications:\n');

top.forEach((notif, index) => {
  console.log(`${index + 1}. ${notif.Type} - ${notif.Message}`);
  console.log(`   Time: ${notif.Timestamp}\n`);
});
