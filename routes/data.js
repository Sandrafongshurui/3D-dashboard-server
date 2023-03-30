const express = require('express')
const Axios = require('axios')
const router = express.Router()
const config = {
  headers: {
    AccountKey: process.env.ACCOUNT_KEY_API,
    accept: 'application/json',
  },
}

/* GET bus data . */
router.get('/bus', async (req, res, next) => {
  try {
    const response = await Axios.get(
      'http://datamall2.mytransport.sg/ltaodataservice/BusArrivalv2?BusStopCode=83139',
      config,
    )
    const data = response.data.Services[0]
    console.log(data)
    return res.status("200").json(data)
  } catch (error) {
    console.log('Axios error', error)
  }
})

module.exports = router
