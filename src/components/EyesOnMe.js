// Code EyesOnMe Component Here
function EyesOnMe() {
    return (
        <button onFocus={handleFocus} onBlur={handleBlur}>Eyes on me</button>

    )
}

function handleBlur() {
    console.log('Hey! Eyes on me!')
}

function handleFocus() {
    console.log('Good!')
}

export default EyesOnMe