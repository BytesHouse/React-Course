class Block extends React.Component {
    render(){
        const subTitle = 'Program S-Terra Soft'
        return (
            <div>
                <h1>React Course 2023</h1>
                <h4>{subTitle}</h4>
                <h5>{2 + 2}</h5>
            </div>
        )
    }
}

ReactDOM.render(
<div>
    <Block/>
    <Block/>
    <Block/>
    <Block/>
    <Block/>
</div>
,
document.getElementById('root'));