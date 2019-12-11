import axios from 'axios';



const KEY = 'AIzaSyCrTIcauudavHC87GM9_TWeCfe1NTCjeJg';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippets',
        maxResults: 5,
        key: KEY
    }
});