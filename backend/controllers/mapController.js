const { Client, Status } = require('@googlemaps/google-maps-services-js');

const RouteBoxer = require('../lib/RouteBoxer');

const client = new Client({});

exports.homePage = async (req, res) => {
  const orig = req.query.orig;
  const dest = req.query.dest;
  const via = req.query.via;

  // const origDetails = orig && (await getPlaceDetails(orig));
  // const destDetails = dest && (await getPlaceDetails(dest));

  // const direction = await getDirection(orig, dest, [], 'DRIVING');

  res.render('index', {
    orig,
    dest,
    // origAddress: origDetails.formatted_address,
    // destAddress: destDetails.formatted_address,
    via,
    // direction,
  });
};

// getDirection = async (orig, dest, waypoints, mode) => {
//   try {
//     const direction = await client.directions({
//       params: {
//         origin: 'place_id:' + orig,
//         destination: 'place_id:' + dest,
//         waypoints,
//         mode,
//         key: process.env.GOOGLE_MAP_KEY,
//       },
//     });

//     if (direction.data.status === Status.OK) {
//       console.log(direction.data);
//       return direction.data;
//     } else {
//       console.log(direction.data.error_message);
//     }
//   } catch (e) {
//     console.log(e);
//   }
// };

getPlaceDetails = async (placeId) => {
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
