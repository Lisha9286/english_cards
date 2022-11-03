import axios from 'axios'

class DelServices {
    static async delCard(id) {
        try {
            await axios({
                method: 'DELETE',
                url: 'http://localhost:3001/cards/' + id
            })
        }
        catch (e) {
            console.error(e)
        }
    }
}

export default DelServices