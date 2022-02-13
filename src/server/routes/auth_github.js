const superagent = require('superagent')

const auth_github = (req, res) => {
  const code = req.params.code
  if (!code) {
    return res.send({
      success: false,
      messaje: 'error:Code not found',
    })
  }

  superagent
    .post('https://github.com/login/oauth/access_token')
    .send({
      client_id: '5b0a416181b203e91d38',
      client_secret: '86883543e5d2334ef802e82e6f26752941a2708d',
      code: code,
    })
    .set('acepts', 'application/json')
    .end((err, result) => {
      const data = result.body
      const accessToken = data.access_token
      superagent
        .get('https://api.github.com/user')
        .set('Authorization', 'token ' + accessToken)
        .set('User-Agent', 'chat-group')
        .then(function (response) {
          res.send(response.body)
        })
    })
}
module.exports = auth_github
