import React from 'react'

const Field = ({ label, children, HtmlFor, error }) => {
    return (
        <div className='form-control'>
            {label && <label htmlFor={HtmlFor} >{label}</label>}
            {children}
            {!!error && <p className='error'>{error.message}</p>}
        </div>
    )
}

export default Field