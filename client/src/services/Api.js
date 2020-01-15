import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: `http://172.21.19.126:3000/` //Change this to your local IP
  })
}
