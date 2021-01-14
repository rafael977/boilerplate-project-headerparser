const handler = (req, res) => {
  let { headers }  = req;
  res.json({
    ipaddress: headers["x-forwarded-for"],
    language: headers["accept-language"],
    software: headers["user-agent"]
  })
}

module.exports = handler;