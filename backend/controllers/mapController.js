const { Client, Status } = require('@googlemaps/google-maps-services-js');
const client = new Client({});

exports.homePage = async (req, res) => {
  const orig = req.query.orig;
  const dest = req.query.dest;

  const origDetails = orig && (await getPlaceDetails(orig));
  const destDetails = dest && (await getPlaceDetails(dest));

  // const routes = await getRoutes(
  //   origDetails.geometry.location,
  //   destDetails.geometry.location,
  //   'DRIVING'
  // );

  res.render('index', {
    orig,
    dest,
    origAddress: origDetails.formatted_address,
    destAddress: destDetails.formatted_address,
    // routes,
  });
};

// getRoutes = async (orig, dest, mode) => {
//   try {
//     const routes = await client.directions({
//       params: {
//         origin: orig,
//         destination: dest,
//         mode,
//         key: process.env.GOOGLE_MAP_KEY,
//       },
//     });

//     if (routes.data.status === Status.OK) {
//       return routes.data;
//     } else {
//       console.log(routes.data.error_message);
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
