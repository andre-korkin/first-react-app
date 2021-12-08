import React, {useState} from 'react'


const Counter = (props) => {
    const {value} = props

    const formatValue = () => value !== 0 ? value : 'empty'

    const getBadgeClasses = () => {
        let classes = 'badge m-2 '
        classes += value !== 0 ? 'bg-primary' : 'bg-warning'
        return classes
    }

    return (
        <div>
            <span>{props.name}</span>
            <span className={getBadgeClasses()}>{formatValue()}</span>
            <button className='btn btn-primary m-2 btn-sm' onClick={() => props.onIncrement(props.id)}>+</button>
            <button className='btn btn-primary m-2 btn-sm' onClick={() => props.onDecrement(props.id)}>-</button>
            <button className="btn btn-danger btn-sm m-2" onClick={() => props.onDelete(props.id)}>Удалить</button>
        </div>
    )
}

export default Counter