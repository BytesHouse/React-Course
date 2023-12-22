class Student extends React.Component {
    render(){
        return (
            <div>
                <h2>Name: {this.props.name}</h2>
                <h3>Age:  {this.props.age}</h3>
                <h4>isBac: {String(this.props.isBac)}</h4>
            </div>
        )
    }
}

ReactDOM.render(
    <div>
        <Student name="Peter"   age={42}         isBac={true}  />
        <Student name={"Vasia"} age={42 - 18}    isBac={false} />
        <Student name='Mary'    age={18}         isBac={{bool: false}}/>
    </div>
, document.getElementById('root'));