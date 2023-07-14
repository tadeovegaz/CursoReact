import axios from "axios";

const useAPI = () => {

    const BASEURL = "https://fakestoreapi.com";

    const getProducts = async () => {
        const response = await axios.get(`${BASEURL}/products`);
        return response.data;
    }

    return {
        getProducts,
    };

};

export default useAPI;