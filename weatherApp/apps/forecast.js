const key = 'mbgw3pG2OpXAKlWuzvL0WjTnRKWQIGzv'
             

function geoCity(city){

    //making a string adequation 
    const cityQuery = () => {
        if(city.includes(' ')){
            return city.replace(' ', '%20')
        }
        return city
    }

    const cityOK = cityQuery()


    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'
    const query = `?apikey=${key}/q=${cityOK}`



    //const response = await fetch(base + query);
    //const data = await response.json()

    console.log(base + query)
    //console.log(data)

}

geoCity('sao paulo')