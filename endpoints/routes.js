const express = require('express');
const { Client, Status } = require('@googlemaps/google-maps-services-js');
const router = express.Router();
const client = new Client({});

router.get('/api/place', async (req, res) => {
  const { placeId, apiKey } = req.params.body;

  try {
    const placeDetails = await client.placeDetails({
      params: {
        place_id: placeId,
        key: apiKey,
      },
    });

    if (placeDetails.data.status === Status.OK) {
      return res.status(200).send(placeDetails.data.result);
    } else {
      return res.status(400).send(`Can't find any place with place_id: ${placeId}`);
    }
  } catch (e) {
    console.log(e);
    return res.status(500).send(e.error_message);
  }
});

router.get('/api/directions', async (req, res) => {
  const { origin, destination, waypoints, mode, apiKey } = req.body;

  try {
    const directions = await client.directions({
      params: {
        origin: 'place_id:' + origin,
        destination: 'place_id:' + destination,
        waypoints,
        mode,
        key: apiKey,
      },
    });

    if (directions.data.status === Status.OK) {
      return res.status(200).send(directions.data);
    } else {
      return res.status(400).send("Can't find directions with the given values.");
    }
  } catch (e) {
    console.log(e);
    return res.status(500).send(e.error_message);
  }
});

module.exports = router;
