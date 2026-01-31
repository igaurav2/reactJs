import App from './App'

function Gaurav(){      // if we meant to render a React component, start its name with an uppercase letter
    const username = "Gaurav"   // evaluated expression
    return (
        <>   {/* fragment ==> used for wrapping of function*/}
        <h3>{username} first function</h3> 
        <App/> 
        </>
    )
}

export default Gaurav   // we can import this in any jsx file