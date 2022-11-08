import axios from 'axios'
import Error from '../Components/Elements/Error/Error'

class GetServices {
    static async getCards() {
        try {
            const responce = await axios.get('http://itgirlschool.justmakeit.ru/api/words/')
            return responce.data
        } catch (e) {
            return <>
                <div> {e.message}</div>
                <Error /> </>
        }
    }
}

export default GetServices