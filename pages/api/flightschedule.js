export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(200).json({ message: 'flightschedule' });
  } else {
    const body = JSON.parse(req.body);
    console.log(body);
    if (body?.arrivalAirportScheduled) {
      res.send({ message: 'flightschedule' });
    } else {
      res.send({ message: 'Bad Request' });
    }
  }

  // the rest of your code
}
