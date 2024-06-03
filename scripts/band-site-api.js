class BandSiteApi {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com";
    }

    async postComment(comment) {
        try {
            const response = await axios.post(`${this.baseUrl}/comments?api_key=${this.apiKey}`, comment);
            return response.data;
        } catch (error) {
            console.log('Error posting comment:', error);
        }
    }

    async getComment() {
        try {
            const response = await axios.get(`${this.baseUrl}/comments?api_key=${this.apiKey}`);
            //sort comment from newest to oldest
            console.log(response.data);
            return response.data.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
        } catch (error) {
            console.log("Error fetching comments:", error);
        }
    }

    async getShowData() {
        try {
            console.log("Sachi")
            const response = await axios.get(`${this.baseUrl}/showdates?api_key=${this.apiKey}`);
            console.log(response.data);
            return response.data; 
        } catch (error) {
            console.error('Error fetching show data:', error);
        }
    }
}

export default BandSiteApi;

