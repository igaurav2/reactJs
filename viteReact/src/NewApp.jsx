import App from './App'

function Gaurav(){      // if we meant to render a React component, start its name with an uppercase letter
    return (
        <>   {/* fragment ==> used for wrapping of function*/}
        <h3>Gaurav first function</h3>
        <App/> 
        </>
    )
}

export default Gaurav   // we can import this in any jsx file