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

    const handleIncrement = (id) => {
        let newCounters = []
        for(let obj of counters) {
            if(obj.id === id) {
                obj.value++
            }
            newCounters.push(obj)
        }
        setCounters(newCounters)
    }

    const handleDecrement = (id) => {
        let newCounters = []
        for(let obj of counters) {
            if(obj.id === id && obj.value > 0) {
                obj.value--
            }
            newCounters.push(obj)
        }
        setCounters(newCounters)
    }

    return (
        <>
            {counters.map(counter => {
                return <Counter 
                    key = {counter.id} 
                    onDelete = {handleDelete} 
                    onIncrement = {handleIncrement}
                    onDecrement = {handleDecrement}
                    {...counter}/>
            })}
            <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>Сброс</button>
        </>
    )
}

export default CounterList