import axios from "axios"

export default class generatorService {
    getAll(){
        return axios.get("http://localhost:8080/api/generators/getall")
    }
}