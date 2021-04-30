import React, { Component } from "react"

class InputTodo extends Component {

    state = {
        title: ""
    };

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.title.trim()) {
            this.props.addToDoProps(this.state.title);
            this.setState({
                title: ""
            })
        } else {
            alert("Could not add empty todo! :)")
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="form-container">
                <input
                    type="text"
                    className="input-text"
                    placeholder="Add todo..."
                    value={this.state.title}
                    name="title"
                    onChange={this.onChange}
                />
                <button className="input-submit">Submit</button>
            </form>
        );
    }

    onChange = e => {
        this.setState(
            {
                // this target is in fact the input, the "value" is the value that user types
                //recall from vanilla JavaScript DOM API, the predefined parameter, e, hold some important information about the event. 
                //From there, you can target the specific input field and grab the updated value
                title: e.target.value
            }
        )
        console.log("input changed")
    }

}

export default InputTodo