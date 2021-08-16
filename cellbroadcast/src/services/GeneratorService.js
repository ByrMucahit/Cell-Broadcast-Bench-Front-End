import axios from "axios"

export default class generatorService {
    getAll(){
        return axios.get("http://localhost:8080/api/generators/getall")
    }

    add(data){
         axios.post("http://localhost:8080/api/generators/add",data).then(
            function (response) {
                console.log(response);
                console.log("data:",data);
            }
        ).catch(function(error){
            console.log(error)
        }).then(function(){
            // always executed
        })
    }
}