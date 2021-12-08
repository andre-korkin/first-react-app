import React, {useState} from 'react'
import Counter from './counter'


const CounterList = () => {
    const defaultCounters = [
        {id:0, name:'Ненужная вещь', value:1}, 
        {id:1, name:'Ложка', value:4}, 
        {id:2, name:'Вилка', value:2},
        {id:3, name:'Тарелка', value:3},
        {id:4, name:'Набор минималиста', value:0}
    ]

    const [counters, setCounters] = useState(defaultCounters)

    const handleDelete = (id) => setCounters(counters.filter(counter => counter.id !== id))
    const handleReset = () => setCounters(defaultCounters)

    const handleUpdate = () => {
        const newCounters = [
            {id:0, name:'Ненужная вещь', value:10}, 
            {id:1, name:'Ложка', value:40}, 
            {id:2, name:'Вилка', value:20},
            {id:3, name:'Тарелка', value:30},
            {id:4, name:'Набор минималиста', value:10}
        ]
        setCounters(newCounters)
    }

    return (
        <>
            {counters.map(counter => <Counter key={counter.id} onDelete={handleDelete} {...counter}/>)}
            <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>Сброс</button>
            <button className="btn btn-primary btn-sm m-2" onClick={handleUpdate}>Обновить</button>
        </>
    )
}

export default CounterList