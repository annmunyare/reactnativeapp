
const URI = 'https://shielded-shelf-30427.herokuapp.com';
export default {
    async fetchVehicles() {
        try {
                let response = await fetch(URI + '/api/vehicles');
                let responseJsonData = await response.json();
                return responseJsonData;
            }
        catch(e) {
            console.log(e)
        }
    }
}