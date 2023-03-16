import React, { useState } from 'react';

function Question14_FunctionComponent() {
  // Khai báo state
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

    return (
        <>
            name: {name}
            age: {age}
        </>
    )
}

export default Question14_FunctionComponent