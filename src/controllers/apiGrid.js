const req = require('request-promise')
const fs = require('fs')

module.exports = {

  async products (request, response) {
    // const productsBd1 = await req.get({
    //   uri: 'https://gateway.gr1d.io/sandbox/tecban/contas/v1/products',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'X-Api-Key': process.env.KEY_API_ACCOUNTS_BD1
    //   },
    //   rejectUnauthorized: false

    // })
    const productsBd2 = await req.get({
      uri: 'https://gateway.gr1d.io/sandbox/tecban/contas2/v1/products',
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': process.env.KEY_API_ACCOUNTS_BD2
      },
      rejectUnauthorized: false
    })

    // const productsBd1Json = JSON.parse(productsBd1)
    // const CreditInterest1 = productsBd1Json.Data.Product[0].BCA.CreditInterest.TierBandSet[0]

    const productsBd2Json = JSON.parse(productsBd2)
    const CreditInterest2 = productsBd2Json.Data.Product[0].BCA.CreditInterest.TierBandSet[0]
    const responseProducts = [
      // {
      //   nameBank: 'Banco 1',
      //   methodPayment: CreditInterest1.TierBandMethod,
      //   CalculationFrequency: CreditInterest1.TierBand[0].CalculationFrequency,
      //   ApplicationFrequency: CreditInterest1.TierBand[0].ApplicationFrequency,
      //   VariableInterestRateType: CreditInterest1.TierBand[0].FixedVariableInterestRateType,
      //   interestRate: CreditInterest1.TierBand[0].AER,
      //   destination: CreditInterest1.Destination
      // },
      {
        nameBank: 'Banco 2',
        methodPayment: CreditInterest2.TierBandMethod,
        CalculationFrequency: CreditInterest2.TierBand[0].CalculationFrequency,
        ApplicationFrequency: CreditInterest2.TierBand[0].ApplicationFrequency,
        VariableInterestRateType: CreditInterest2.TierBand[0].FixedVariableInterestRateType,
        interestRate: CreditInterest2.TierBand[0].AER,
        destination: CreditInterest2.Destination
      }
    ]

    return response.json(responseProducts)
  }

}
