import axios from 'axios'

class GetServices {
    static async getCards() {
        try {
            const responce = await axios.get('http://localhost:3001/cards/')
            return responce.data
        } catch (e) {
            console.error(e)
        }
    }
}

export default GetServices