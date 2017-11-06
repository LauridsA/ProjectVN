import React from 'react'

export default class StudentForm extends React.Component{

    constructor(){
        super()
        this.state = {name: 'ng', courses:  ['web', 'database concepts', 'sth else']}
    }
    handleSave(){
        alert(this.state.name)
    }
    handleChange(e){
        var change = {}
        change[e.target.name] = e.target.value
        this.setState(change)
    }
    render(){
        return(
            <div>
                <h1>Student Form </h1>
                <div>Name: {this.state.name}</div>
                <div>Courses:
                    {this.state.courses.map((c)=>
                        <li>{c},</li>
                    )}
                </div>
                <input type="text" name='name' value={this.state.name} 
                onChange={this.handleChange.bind(this)}/>
                <button onClick={this.handleSave.bind(this)}>Save</button>
            </div>
        )
    }
}