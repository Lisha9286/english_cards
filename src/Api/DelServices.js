import axios from 'axios'
import Error from "../Components/Elements/Error/Error";

class DelServices {
    static async delCard(id) {
        try {
            await axios({
                method: 'DELETE',
                url: 'http://itgirlschool.justmakeit.ru/api/words/22/delete/' + id
            })
        }
        catch (e) {
            <>
                <div> {e.message}</div>
                <Error /> </>
        }
    }
}

export default DelServices