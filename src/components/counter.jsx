import React, {useState} from 'react'


const Counter = () => {
    const [count, setCount] = useState(0)
    const [tags, setTags] = useState(['tag1', 'tag2', 'tag3'])

    const formatCount = () => count !== 0 ? count : 'empty'

    const getBadgeClasses = () => {
        let classes = 'badge m-2 '
        classes += count !== 0 ? 'bg-primary' : 'bg-warning'
        return classes
    }

    const handleIncrement = () => setCount(count + 1)
    const handleDecrement = () => count > 0 ? setCount(count - 1) : false
    const handleChangeTag = (tag) => setTags(items => items.filter(item => item !== tag))
    
    const renderTags = () => tags.length !== 0
        ? tags.map(tag => <li key={tag} className='btn btn-primary btn-sm m-2' onClick={() => handleChangeTag(tag)}>{tag}</li>)
        : 'No tags'

    return (
        <>
            <ul>{renderTags()}</ul>
            <span className={getBadgeClasses()}>{formatCount()}</span>
            <button className='btn btn-primary m-2 btn-sm' onClick={handleIncrement}>+</button>
            <button className='btn btn-primary m-2 btn-sm' onClick={handleDecrement}>-</button>
        </>
    )
}

export default Counter