import { useState } from "react"

const TestInput = () => {
    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        selectmenu: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(state);
        setState({
            firstName: '',
            lastName: '',
            selectmenu: ''
        })
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState(prevState => ({...prevState, [name]: value}));
    }

    return (
        <form onSubmit={handleSubmit}>
            <input required name="firstName" onChange={handleChange} value={state.firstName} />
            <input required name="lastName" onChange={handleChange} value={state.lastName} />
            <select required name="selectmenu" onChange={handleChange} value={state.selectmenu}>
                <option value={""} disabled>Select a value</option>
                <option value={"Baburam"}>Baburam</option>
                <option value={"Pursottam"}>Pursottam</option>
                <option value={"Daknya"}>Daknya</option>
                <option value={"Chandrashekhar"}>Chandrashekhar</option>
            </select>
            <button type="">Submit</button>
        </form>
    )
}

export default TestInput;