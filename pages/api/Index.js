async function updateCounter(newCount) {
  await fetch('/api/updateCounter', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ count: newCount }),
  });
}
