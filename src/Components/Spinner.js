import React from 'react'
// import PropTypes from 'prop-types'
import Loading from './loading.gif'

const Spinner = () => {
    return (
        <div className='text-center my-3'>
            <img src={Loading} alt="Loading" />
        </div>
    )
}

export default Spinner
