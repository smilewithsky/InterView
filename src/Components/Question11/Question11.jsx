import React from 'react';
class Question11_Class extends React.Component {
    render() {
        const list = ["táo" , "lê" , "xoài" , "ổi"]
        // render một mảng các string theo câu cú pháp giống như Javascript
        return <ul> 
        {list.map((item) => { 
            return <li>{item}</li>
        })}
    </ul> 
    }
}

function Question11(){
    const list = ["táo" , "lê" , "xoài" , "ổi"]
    return (
        <div>
            <ul>
                {list.map((item) => {
                    return <li>{item}</li>
                })}
            </ul>            
        </div>
    );
};

export {Question11 , Question11_Class};