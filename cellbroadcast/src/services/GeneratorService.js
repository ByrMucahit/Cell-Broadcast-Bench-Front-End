import axios from "axios"

export default class generatorService {
    getAll() {
        return axios.get("http://localhost:8080/api/generators/getall")
    }

    add(data) {
        axios.post("http://localhost:8080/api/generators/add", this.data).then(
            function (response) {
                console.log(response);
                alert(JSON.stringify(response) + "data has been sended");
            }
        ).catch(function (error) {
            console.log(error.response.data);
            console.log(error.message);
        }).then(function () {
            // always executed
        })
    }

    show(article) {

        axios.post("http://localhost:8080/api/generators/show", article).then(response => {
            console.log(response)

        }
        ).catch(function (error) {
            console.log(error)
        }).then(function () {

        })
    }
}