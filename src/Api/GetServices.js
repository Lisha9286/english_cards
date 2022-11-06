import axios from 'axios'

class GetServices {
    static async getCards() {
        try {
            const responce = await axios.get('http://itgirlschool.justmakeit.ru/api/words/')
            return responce.data
        } catch (e) {
            console.error(e)
        }
    }
}

export default GetServices