import React from 'react'
import './Form.sass'

export default function Form() {
    return (
        <div>
            <form> 
                <div className="form">
                    <div><input className="form__input" type="text" placeholder='english' /></div>
                    <div><input className="form__input" type="text" placeholder='translate' /> </div>
                    <div><input className="form__input" type="text" placeholder='transcription' /> </div>
                </div>
            </form>
        </div>
    )
}
