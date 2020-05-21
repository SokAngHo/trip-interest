const axios = require('axios').default;

exports.homePage = async (req, res) => {
  const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
  const orig = req.query.orig;
  const dest = req.query.dest;
  const via = req.query.via;
  const waypoint = req.query.waypoint;

  const origAddress = orig && (await this.getPlaceDetails(orig)).formatted_address;
  const destAddress = dest && (await this.getPlaceDetails(dest)).formatted_address;

  // Default message for social media sharing
  let shareMessage;
  if (orig && dest) shareMessage = `${origAddress} to ${destAddress}`;
  if (via) shareMessage += ` via ${via}`;

  res.render('index', {
    shareMessage,
    fullUrl,
    orig,
    origAddress,
    dest,
    destAddress,
    via,
    waypoint,
  });
};

exports.getPlaceDetails = async (placeId) => {
  // Call google cloud endpoints
  const res = await axios
    .post(`${process.env.API_URL}/api/place`, {
      placeId: placeId,
      apiKey: process.env.GOOGLE_MAP_KEY,
    })
    .catch((e) => console.log(e));

  if (res.status === 200) {
    return res.data;
  }

  console.log(res);

  return null;
};
