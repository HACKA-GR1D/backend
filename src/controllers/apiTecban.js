const req = require('request-promise')
const fs = require('fs')

const KEY_API = '17fb7973-45b5-4a6a-84b0-a18ea2daf825'
module.exports = {

  async offerts (request, response) {
    const res2 = await req.get({
      uri: 'https://gateway.gr1d.io/sandbox/tecban/contas/v1/offers',
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': KEY_API
      },
      rejectUnauthorized: false

    })

    return response.json([JSON.parse(res2)])
  }

}
