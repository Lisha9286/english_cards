import './Modal.sass'
import PutServices from '../../../Api/PutServices'

export default function Modal({ options, closeModal }) {
    

    function getValueFormEnglish(e) {
        options.setFormEnglish(e.target.value)
    }

    function getValueFormTranslate(e) {
        options.setFormTranslate(e.target.value)
    }

    function getValueFormTranscript(e) {
        options.setFormTranscript(e.target.value)
    }
    
    function ediCard() {
        PutServices.putCard(options.formEnglish, options.formTranslate, options.formTranscript, options.card[0].id)
        if(options.card[0].englishWord = false)
        options.setModal(false)
        options.setRerenderCard(!options.rerenderCard)
        // cleanValue()
    }

    let englishValue = ""
    let translateValue = ""
    let transcriptionValue = ""

    if (options.card) {
        englishValue = options.card[0].englishWord
        translateValue = options.card[0].translate
        transcriptionValue  = options.card[0].transcription
    }

    // function cleanValue() {
    //     englishValue = ""
    //     translateValue = ""
    //     transcriptionValue = ""
    // }


    return (
        <>
            <div className="modal">
                <div className="modal__content">
                    <div>
                    <form> 
                <div className="modal__form">
                    <div><input onChange={getValueFormEnglish} defaultValue={englishValue} className="modal__input" type="text" placeholder='english' />
                    </div>
                    <div><input onChange={getValueFormTranslate} defaultValue={translateValue} className="modal__input" type="text" placeholder='translate' />
                    </div>
                    <div><input onChange={getValueFormTranscript} defaultValue={transcriptionValue} className="modal__input" type="text" placeholder='transcription' />
                    </div>
                </div>
            </form>
                    </div>
                    <div className="modal__btns">
                        <button onClick={ediCard}>save</button>
                        <button onClick={() => {
                            closeModal(false)
                            // cleanValue()
                        }}>cancel</button>
                    </div>
                </div>
            </div>
        </>
    )
}
