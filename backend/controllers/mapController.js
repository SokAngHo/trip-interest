const { Client, Status } = require('@googlemaps/google-maps-services-js');

const client = new Client({});

exports.homePage = async (req, res) => {
  const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
  const orig = req.query.orig;
  const dest = req.query.dest;
  const via = req.query.via;
  const waypoint = req.query.waypoint;

  let shareMessage;
  if (orig && dest) shareMessage = `${orig} to ${dest}`;
  if (via) shareMessage += ` via ${via}`;

  res.render('index', {
    shareMessage,
    fullUrl,
    orig,
    dest,
    via,
    waypoint,
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

exports.getPlaceDetails = async (placeId) => {
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
