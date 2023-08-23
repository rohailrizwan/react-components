function MYbtns(mydata){
    return(
        <button className="btns" label={mydata.label1} onClick={mydata.click}>{mydata.val}</button>
    )
}

export default MYbtns