import React from 'react'

const page = async (props) => {
    const parms = await props.params


    return (
        <div>
            {JSON.stringify(parms.product_id)}
        </div>
    )
}

export default page
