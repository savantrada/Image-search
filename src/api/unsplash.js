import Axios from 'axios';

export default Axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID b0f213b07af12502416c6714ad5c7194bbd4f1e960ff4348138777c3c7e5c2be'

    }
});