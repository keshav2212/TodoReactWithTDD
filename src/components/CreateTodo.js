import React, {Component} from 'react'

import '../styles/CreateTodo.css'

class CreateTodo extends Component {

    constructor(props){
        super(props)
        this.inputRef = React.createRef()
        this.state = {
            todo : []
        }
        this.AddNewTodo = this.AddNewTodo.bind(this)
        this.HandleRemove = this.HandleRemove.bind(this)
        
    }

    componentDidMount(){
        this.inputRef.current.focus()
    }

    AddNewTodo(event){
        event.preventDefault();
        this.setState({
            todo: this.state.todo.concat([event.target.elements.title.value])
        }, ()=>{})
    }

    HandleRemove(ind){
        this.setState({
            todo: this.state.todo.filter((todo, index) => {return index!==ind })
        })
    }
    SetTodo


    render (){
        return <div>
            <form onSubmit={this.AddNewTodo}>
            <h1>Add a ToDo</h1>
            <input type="text" ref={this.inputRef} name="title" placeholder='What to Do?' id="todotext" required></input> 
            <button type="submit" id="addbutton">Add</button>
            <ul id="todoelements">{ this.state.todo.map((todo, index) => (<li id={"list_item_"+index}>{todo}  <button type="button" className='removebutton' id={"removebutton_"+index} onClick={() => this.HandleRemove(index)}>Remove</button></li> ) )}  
            </ul>
            </form>
            
            </div>

           

  }
}

export default CreateTodo

