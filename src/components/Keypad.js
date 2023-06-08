// Code Keypad Component Here

function Keypad() {
    return (
        <div>
            <input type="password" onChange={handleChange} />
        </div>
    )
}

function handleChange(event) {
    console.log('Entering password...')
}

export default Keypad;