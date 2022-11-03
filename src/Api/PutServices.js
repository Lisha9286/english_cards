import axios from 'axios'

class PutServices {
    static async putCard(englishWord, translate, transcription, id) {
        try {
            await axios.put('http://localhost:3001/cards/' + id, {
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