

const apiKey = "3c710c1a-8ca8-4bae-93af-65c38573275d";

const fetchComments = async () => {
    try {
        
        const apiUrl = `https://unit-2-project-api-25c1595833b2.herokuapp.com/comments?api_key=${apiKey}`;
        const response = await axios.get(apiUrl);
        
        console.log(response);
       
    } catch (error) {
        console.log(error);
    }
};
fetchComments();