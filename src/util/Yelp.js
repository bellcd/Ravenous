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
        return jsonResponse.businesses.map(business => {
          return {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.city,
            state: business.state,
            zipCode: business.zip_code,
            category: business.categories,
            rating: business.rating,
            reviewCount: business.review_count
          }
        })
      }
    })
  }
}

export Yelp;
