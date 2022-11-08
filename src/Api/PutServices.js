import axios from 'axios'

class PutServices {
    static async putCard(englishWord, translate, transcription, id) {
        try {
            await axios.put('http://itgirlschool.justmakeit.ru/api/words/22/update' + id, {
                englishWord,
                translate,
                transcription
            })
        }
        catch (e) {
            console.error(e)
        }
    }
}

export default PutServices