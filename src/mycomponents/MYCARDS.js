function MYcard(props) {
 
    return (
        <div className="cards">
              <h2>Cards {props.index+1} </h2>
              <p>{props.id}</p>
              <p>{props.name}</p>
              <p>{props.age}</p>
              <p>{props.institute}</p>
              <p>{props.category}</p>

        </div>
    )
}
export default MYcard