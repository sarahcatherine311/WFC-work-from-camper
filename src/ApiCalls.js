import React from "react";

const getCampsites = () => {
  return fetch('https://developer.nps.gov/api/v1/campgrounds?limit=635&api_key=XsqUwqiAP2l38Gm2pbIdYs58KxBv2mguBnUusRNt')   
  .then((response) => {
    if (!response.ok) {
      throw new Error("Failed to fetch data... please try again!");
    } else {
      return response.json();
    }
  });
};

export { getCampsites };