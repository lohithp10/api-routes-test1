export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(200).json({ message: 'flight/schedule' });
  } else {
    const body = JSON.parse(req.body);
    console.log(body);
    if (body?.arrivalAirportScheduled) {
      return res.status(200).json({ message: 'flight/schedule' });
    } else {
      return res.status(200).json({ message: 'Bad Request' });
    }
  }

  // the rest of your code
}
