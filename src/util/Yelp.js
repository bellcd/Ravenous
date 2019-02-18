const apiKey = "WvKO6dMbgBJ-ndYhfhPPUrI7WwNby-8UNMX5eSwJhouJaq5MW3Us-sK02zMuv1biTP1MkZi787wXUe17X8ChJhr3NljlY9NjhGFWlqcBrefGx55883XJxT2pFnNnXHYx";

const Yelp = {

  search(term, location, sortBy, radius) {
    // UNCOMMENT
    console.log(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}&radius=${radius}`);

    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}&radius=${radius}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    })
    .then(response => {
      return response.json();
    }, error => {
      console.log("response from fetch(): ", error);
    })
    .then(jsonResponse => {
      // UNCOMMENT
      console.log("jsonResponse", jsonResponse.businesses);
      if (jsonResponse.businesses) {
        console.log(jsonResponse.businesses);

        const googleMapsUrl = `https://www.google.com/maps/place/`;
        const space = / /g;
        let urlGoogleMaps = "";

        return jsonResponse.businesses.map(business => {

          if (business.location.address1 !== "" & business.location.city !== "") {
            // creates a formatted URL to open each business' location in Google Maps
            const streetAddress = business.location.address1.replace(space, '+');
            const city = business.location.city.replace(space, '+');
            const state = business.location.state;
            const zip = business.location.zip_code;

            urlGoogleMaps = `${googleMapsUrl}${streetAddress}+${city}+${state}+${zip}`
          } else {
            urlGoogleMaps = business.url;
          }

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
            urlGoogleMaps: urlGoogleMaps


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
