export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Save the new count to a database or in-memory store
    const newCount = req.body.count;
    await saveToDatabase(newCount); // Example function
    res.status(200).json({ success: true });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
