export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(200).json({ message: 'flightschedule' });
    return;
  }

  const body = JSON.parse(req.body);

  console.log(body);

  // the rest of your code
}
