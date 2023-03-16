import React from 'react';

class Question9_ClassComponents extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        }
    }

    render() {
    const handleSubmit = () => {
        alert(`Your name is ${this.state.name}`)
    }

    return (
        <form onSubmit={() => handleSubmit()}>
            <div className="form-group">
                <label>Name: </label>
                <input value={this.state.name} onChange={(e) => {
                    this.setState(() => {
                        return {
                            ...this.state,
                            name: e.target.value
                        }
                    });
                }} />
            </div>
            <div className="form-group">
                <input type="submit" />
            </div>
        </form>
    )
            }
};  

export default Question9_ClassComponents