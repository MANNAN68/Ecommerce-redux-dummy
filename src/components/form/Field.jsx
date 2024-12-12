import React from 'react'

const Field = ({ label, children, HtmlFor, error }) => {
    const id = HtmlFor || getChildId(children);
    return (
        <div className='form-control'>
            {label && <label htmlFor={id} className='block mb-2 text-sm font-medium text-gray-900 dark:text-white' >{label}</label>}
            {children}
            {!!error && <p className='error'>{error.message}</p>}
        </div>
    )
}
const getChildId = (children) => {
    if (!children || React.Children.count(children) !== 1) {
        return null;
    }

    const child = React.Children.only(children);
    if (child?.props?.id) {
        return child.props.id;
    }

    return null;
};
export default Field

