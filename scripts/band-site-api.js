class BandSiteApi {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com/comments";
    }

    async postComment(comment) {
        try {
            const response = await axios.post(`${this.baseUrl}?api_key=${this.apiKey}`, comment);
            console.log('Post Comment Response:', response.data);
            return response.data;
        } catch (error) {
            console.log('Error posting comment:', error);
        }
    }

    async getComment() {
        try {
            const response = await axios.get(`${this.baseUrl}?api_key=${this.apiKey}`);
            //sort comment from newest to oldest
            console.log(response.data);
            return response.data.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
        } catch (error) {
            console.log("Error fetching comments:", error);
        }
    }
}

export default BandSiteApi;

