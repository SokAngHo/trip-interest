const { Client, Status } = require('@googlemaps/google-maps-services-js');

exports.homePage = async (req, res) => {
  const orig = req.query.orig;
  const dest = req.query.dest;

  const origDetails = orig && (await getPlaceDetails(orig));
  const destDetails = dest && (await getPlaceDetails(dest));

  res.render('index', {
    orig,
    dest,
    origAddress: origDetails.formatted_address,
    destAddress: destDetails.formatted_address,
  });
};

getPlaceDetails = async (placeId) => {
  const client = new Client({});

  try {
    const placeDetails = await client.placeDetails({
      params: {
        place_id: placeId,
        key: process.env.GOOGLE_MAP_KEY,
      },
    });

    if (placeDetails.data.status === Status.OK) {
      return placeDetails.data.result;
    } else {
      console.log(placeDetails.data.error_message);
    }
  } catch (e) {
    console.log(e);
  }
};
