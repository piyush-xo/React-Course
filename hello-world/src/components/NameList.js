import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Piyush', 'Nikhil', 'Chandra']
//   return (
    // <div>
    //     <h2>{names[0]}</h2>
    //     <h2>{names[1]}</h2>
    //     <h2>{names[2]}</h2>
    // </div>

    // const nameList = names.map(name => <h2>{name}</h2>)
    // return <div>{nameList}</div>

    const persons = [
        {
            id: 1,
            name: 'Piyush',
            age: 22
        },
        {
            id: 2,
            name: 'Nikhil',
            age: 23
        },
        {
            id: 3,
            name: 'Chandra',
            age: 24
        }
    ]
    // const personList = persons.map(person => (
    //     <h2>
    //         {person.name} = {person.age}
    //     </h2>
    // ))
    const personList = persons.map(person => <Person key={person.id} personProp={person}/>)
    return <div>{personList}</div>
}

export default NameList