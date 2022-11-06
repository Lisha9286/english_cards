import axios from "axios";


class PostServices {


    static async postCards(id, english, transcription, russian, tags) {
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
            // return <>
            //     <div>Ошибка: {e.message}</div>
            //     <Error /> </>
            console.error(e)
        }
    }
}
export default PostServices