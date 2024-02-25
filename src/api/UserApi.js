import Api from './BaseApi';

class UserAPI {

    getAllUsers = () => {
        return Api.get("/users");
    };

}

const userApi = new UserAPI()
export default userApi;