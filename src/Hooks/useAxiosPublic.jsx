import axios from "axios";

const axiosPublic = axios.create({
    baseURL:'https://mostofa-restaurant-server.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;