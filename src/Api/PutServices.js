import axios from 'axios'
import Error from "../Components/Elements/Error/Error";

class PutServices {
    static async putCard(english, russian, transcription, id) {
        try {
            await axios.put('http://itgirlschool.justmakeit.ru/api/words/22/update' + id, {
                english,
                russian,
                transcription
            })
        }
        catch (e) {
            <>
                <div> {e.message}</div>
                <Error /> </>
        }
    }
}

export default PutServices