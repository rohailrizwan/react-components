function MYInput(props){
    return(
        <div>
            <input type="text" value={props.myval} onChange={props.change}></input>
            <p>{props.myval}</p>
        </div>
    )
}

export default MYInput