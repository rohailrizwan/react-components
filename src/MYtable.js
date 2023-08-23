function Rendertable(props) {
   
    return (
        <table className="mytable" >
            <th>
                {
                    props.heading.map((i) => {
                        return (
                            <td>{i}</td>
                        )

                    })
                }               
            </th>
            <tb>
            {
                    props.data.map((obj,i)=>(
                        <tbody>
                        <td>{obj.Name}</td>
                        <td>{obj.t_marks}</td>
                        <td>{obj.o_marks}</td>
                        <td>{obj.percentage}</td>
                        </tbody>
                       
                    ))
                }
            </tb>
        </table>
    )
}

export default Rendertable