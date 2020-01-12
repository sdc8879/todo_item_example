import React, { Component } from 'react';

export class TodoCreator extends Component {

    constructor(props) {
        super(props)
        this.state = { newItemText: "" }
    }

    createNewTodo = () => {
        this.props.callback(this.state.newItemText);
        this.setState({ newItemText: "" })
    }

    updateNewTextValue = (event) => {
        // console.log(event.target.value)
        this.setState({ newItemText: event.target.value });
    }


    render() {
        return (
            <div className="my-1">
                <input className="form-control" value={this.state.newItemText}
                    onChange={this.updateNewTextValue}
                />
                <button className="btn btn-primary mt-1" onClick={this.createNewTodo} >Add</button>
            </div>
        )
    }

}