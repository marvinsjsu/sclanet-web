
export default async function handler(req, res) {
  const body = req.body;

  const { email } = body;

  const jsonBody = JSON.stringify({
    'text': `interest from \`${email}\``
  });

  const result = await fetch(process.env.MSG_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: jsonBody,
  });

  if (result.status === 200) {
    return res.status(200).json({ data: 'message sent'});
  } else {
    return res.status(500).json({ error: 'message failed'});
  }
}
