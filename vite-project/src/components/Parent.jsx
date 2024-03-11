
import { useState } from 'react';
import Child from './Child';

function Parent() {
    const [name, setName] = useState("")
    const pull_data = (message) => {
        setName(message)
        console.log(message); // LOGS DATA FROM CHILD (My name is Dean Winchester... &)
    }

    return (
        <div>
            <h1>Name: {name}</h1>
            <Child
                pullData={pull_data}
            />
        </div>
    );
}

export default Parent;