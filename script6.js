class Task extends React.Component {

    handleClickEdit = () => {
        alert(`Pressed edit button of ${this.props.children}`)
    }
    handleClickRemove = () => {
        alert(`Pressed remove button of ${this.props.children}`)
    }
    render(){
        return (
            <div className="box">
                <div>{this.props.children}</div>
                <button onClick={this.handleClickEdit}>Edit</button>
                <button onClick={this.handleClickRemove}>Remove</button>
            </div>
        )
    }
}

class TaskList extends React.Component {
    render(){
        return <div>
            <input />
            <button>Add Task</button>
        </div>
    }
}

ReactDOM.render(
<div className="field">
    <TaskList />
    <Task>Task 1</Task>
    <Task>Task 2</Task>
    <Task>Task 3</Task>
</div>
, document.getElementById('root'))