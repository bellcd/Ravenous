const apiKey = "WvKO6dMbgBJ-ndYhfhPPUrI7WwNby-8UNMX5eSwJhouJaq5MW3Us-sK02zMuv1biTP1MkZi787wXUe17X8ChJhr3NljlY9NjhGFWlqcBrefGx55883XJxT2pFnNnXHYx";

const Yelp = {

  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    })
    .then(response => {
      return response.json();
    })
    .then(jsonResponse => {
      if (jsonResponse.businesses) {
        console.log(jsonResponse.businesses);

        const googleMapsUrl = `https://www.google.com/maps/place/`;
        const space = / /g;

        return jsonResponse.businesses.map(business => {

          // creates a formatted URL to open each business' location in Google Maps
          const streetAddress = business.location.address1.replace(space, '+');
          const city = business.location.city.replace(space, '+');
          const state = business.location.state;
          const zip = business.location.zip_code;

          // returns an object of each business' data selected from the Yelp API response
          return {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count,
            urlYelp: business.url,

            // adds the formatted URL as well
            urlGoogleMaps: `${googleMapsUrl}${streetAddress}+${city}+${state}+${zip}`
          }
        })
      } else {
        // UNCOMMENT!
        console.log("The response from the Yelp API did not include businesses!");
      }
    })
  }
};

export { Yelp };
