import { useState } from 'react'
import './Form.sass'
import PutServices from '../../../Api/PutServices'

export default function Form({ options}) {

    function getValueFormEnglish(e) {
        options.setFormEnglish(e.target.value)
    }

    function getValueFormTranslate(e) {
        options.setFormTranslate(e.target.value)
    }

    function getValueFormTranscript(e) {
        options.setFormTranscript(e.target.value)
    }
    

    return (
        <div>
            <form> 
                <div className="form">
                    <div><input onChange={getValueFormEnglish} defaultValue={options.formEnglish} className="form__input" type="text" placeholder='english' />
                    </div>
                    <div><input onChange={getValueFormTranslate} defaultValue={options.formTranslate} className="form__input" type="text" placeholder='translate' />
                    </div>
                    <div><input onChange={getValueFormTranscript} defaultValue={options.formTranscript} className="form__input" type="text" placeholder='transcription' />
                    </div>
                </div>
            </form>
        </div>
    )
}
