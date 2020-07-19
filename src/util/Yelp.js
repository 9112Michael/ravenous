const { default: SearchBar } = require("../components/SearchBar/SearchBar");

const apiKey ='JLmkoDUHzLAJEXO3ZH4MySZUO1MMqW3blHVkvlOki-C9QZPbKQSfmcjpnoH83JT_aMx5HzrpX4zKWYGXcbzqp54xWiegSq-ibD-ZYiyturmR7UaiA6CBBNZUsHUTX3Yx';

const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
            Authorization: `Bearer ${apiKey}`
            }
        }).then((response) => {
            return response.json();
        }).then((jsonResponse) => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    
                });
            }
        } 
    }
}