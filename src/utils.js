const filterCampsitesByInternetConnectivity = (campsites) => {
  return campsites.filter(campsite => {
    if (campsite.amenities && campsite.amenities.internetConnectivity) {
      return campsite.amenities.internetConnectivity.includes("Yes");
    }
    return false;
  });
};

export default filterCampsitesByInternetConnectivity;