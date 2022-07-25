import axios from "axios";

const api = axios.create({
    baseURL : "http://companny.ddns.net:9500/financeiro/ofx"
})

export default api