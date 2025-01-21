import { axiosInstance as axios } from '../axios/index.js';



class Movie {
    // CET:
    async fetchAllProducts_or_SingleProduct(id) {
        let data;
        if (!id) {
            const response = await axios.get('/products?offset=0&limit=10');
            data = response.data;
        } else {
            const response = await axios.get(`/products/${id}`);
            data = response.data;
        }
        return data;
    }
}

const productService = new ProductService();

export default productService;
