import axios from 'axios'

class DelServices {
    static async delCard(id) {
        try {
            await axios({
                method: 'DELETE',
                url: 'http://itgirlschool.justmakeit.ru/api/words/22/delete/' + id
            })
        }
        catch (e) {
            console.error(e)
        }
    }
}

export default DelServices