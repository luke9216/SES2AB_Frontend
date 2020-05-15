import axios from "axios";
import { toast } from "react-toastify";
import { backendEndpoint } from "../config.json";

const authEndpoint = `${backendEndpoint}`;

axios({
    method: 'post',
    url: '....',

});

axios.interceptors.request.use(config => {
    config.headers.post['Content-Type'] = 'application/json';
    config.headers.post['Access-Control-Allow-Origin'] = '*';
    config.headers.post['Access-Control-Allow-Methods'] = 'GET, POST, PATCH, PUT, DELETE, OPTIONS';
    config.headers.post['Access-Control-Allow-Headers'] = 'Origin, Content-Type, X-Auth-Token';

    console.log(config)
    return config;
});

// axios.interceptors.request.use((request: any) => {
//     request.headers = { "Access-Control-Allow-Origin": "*" }
// });

axios.interceptors.response.use((response: any) => {
    console.log(response)
    response.headers.post['Access-Control-Allow-Origin'] = authEndpoint;
    response.headers.post['Access-Control-Allow-Methods'] = 'GET, POST, PATCH, PUT, DELETE, OPTIONS';
    response.headers.post['Access-Control-Allow-Headers'] = 'Origin, Content-Type, X-Auth-Token';

    return response;
}, function (error) {
    const expectedError =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500;

    if (!expectedError) {
        //Unexpected (network down, server down, sb down, bug)
        // - Log them
        // - Display a generic and friendly error message
        console.log("Logging the error", error);
        toast.error("An unexpected error occurred");
    }

    // if (error.response.status === 401) {
    //     toast.error("Unauthorized access");
    //     // auth.logout();
    //     // router.replace('/auth/login');
    //     console.log("Logging the error", error);
    // }
    return Promise.reject(error.response);
});

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
};
