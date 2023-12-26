const NavBar = ({ list = null, setList, setForm }) => {
    return (
        <div className='navbar'>
            <p className="logo">Media86</p>
            <div className="button_wrapper">
                <button onClick={() => setForm(true)}> Add Message</button>
                {
                    list ?
                        <button onClick={() => setList(!list)}>List</button> :
                        <button onClick={() => setList(!list)}>Grid</button>
                }
            </div>
        </div>
    )
}

export default NavBar