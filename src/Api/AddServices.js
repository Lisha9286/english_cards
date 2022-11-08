import axios from "axios";
import Error from "../Components/Elements/Error/Error";

class AddServices {
    static async addCards(id, english, transcription, russian, tags) {
        try {
            await axios.post('http://itgirlschool.justmakeit.ru/api/words/add', {
                id: id,
                english: english,
                transcription: transcription,
                russian: russian,
                tags: tags,
                tags_json: '[new]'
            })
                .then(function (response) {
                })
        }
        catch (e) {
            return <>
                <div> {e.message}</div>
                <Error /> </>
        }
    }
}
export default AddServices