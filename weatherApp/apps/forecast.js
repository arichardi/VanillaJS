const key = 'EDoXFpH6QoE1cATpItdZQdhfqE6Re3QT'
             

async function getWeather(id){
    //constructing the request

    const base = 'http://dataservice.accuweather.com/currentconditions/v1/'
    const query = `${id}?apikey=${key}`

    const response = await fetch(base + query)
    const data = await response.json()

    return data[0]
}

async function geoCity(city){

    //making a string adequation 
    const cityQuery = () => {
        if(city.includes(' ')){
            return city.replace(' ', '%20')
        }
        return city.trim()
    }

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'
    const query = `?apikey=${key}&q=${cityQuery()}`


    const response = await fetch(base + query)
    const data = await response.json()

    return data[0]

}

geoCity('sao paulo')
    .then( data => {
        console.log(data)
        return getWeather(data.Key)})
    .then( data => console.log(data))
    .catch( err => console.log(err))

