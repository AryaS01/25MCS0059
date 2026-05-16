function getTypeWeight(type) {
  if (type === 'Placement') return 3;
  if (type === 'Result') return 2;
  return 1;
}

function sortByPriority(notifications) {
  const copy = [...notifications];
  copy.sort((a, b) => {
    const wA = getTypeWeight(a.Type);
    const wB = getTypeWeight(b.Type);
    if (wA !== wB) return wB - wA;
    const dA = new Date(a.Timestamp);
    const dB = new Date(b.Timestamp);
    return dB - dA;
  });
  return copy;
}

function getTopN(notifications, n) {
  const sorted = sortByPriority(notifications);
  return sorted.slice(0, n);
}

export { sortByPriority, getTopN };
