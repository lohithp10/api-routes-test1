export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(200).json({ message: 'flight/schedule' });
    return;
  } else {
    const body = JSON.parse(req.body);
    console.log(body);
    if (body?.arrivalAirportScheduled) {
      res.status(200).json({ message: 'flight/schedule' });
    } else {
      res.status(405).json({ message: 'Bad Request' });
    }
  }

  // the rest of your code
}
