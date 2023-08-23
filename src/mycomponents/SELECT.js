function SELECT(props) {
    return (
        <div>
            <select>
                {
                    props.option.map((model) => {
                        return (
                            <option value={model} key={model}>{model}</option>
                        )

                    })
                }
            </select>
        </div>


    )
}

export default SELECT