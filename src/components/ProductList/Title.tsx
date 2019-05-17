import React from 'react'

const Title = ({ name, title }: { name: string, title: string }) => {
    return (
        <div className='row'>
            <div className="col-10 mx-auto my-2 text-center text-title">
                <h1 className="text-capitalize font-weight-bold text-blue">
                    {name} <strong>{title}</strong>
                </h1>
            </div>
        </div>
    )
}

export default Title

