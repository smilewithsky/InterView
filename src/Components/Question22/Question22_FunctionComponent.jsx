import React, { useState } from 'react';

function Question22_FunctionComponent() {
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

export default Question22_FunctionComponent