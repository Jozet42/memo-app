import React from 'react'

function Button({ btn_click, btn_txt }) {
    return (
        <div>
            <button onClick={btn_click}>{btn_txt}</button>
        </div>
    )
}

export default Button