import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: `http://172.21.8.241:3000/` //Change this to your local IP
  })
}
