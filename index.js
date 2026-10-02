app.get('/api/whoami', (req, res) => {
  // Extract IP address (handles proxies like freeCodeCamp's test runner)
  const ipaddress = req.headers['x-forwarded-for'] 
    ? req.headers['x-forwarded-for'].split(',')[0].trim() 
    : req.socket.remoteAddress;

  // Extract preferred language
  const language = req.headers['accept-language'];

  // Extract user-agent / software info
  const software = req.headers['user-agent'];

  // Return JSON response matching test requirements
  res.json({
    ipaddress: ipaddress,
    language: language,
    software: software
  });
});