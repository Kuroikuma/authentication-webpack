const superagent = require('superagent')

const auth_github = (req, res) => {
  const { query } = req
  const { code } = query
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
      console.log(data)
      const user = data.access_token
      res.redirect(`/profile/${user}`)
    })
}
module.exports = auth_github
