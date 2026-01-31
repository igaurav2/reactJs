import React, { StrictMode } from 'react' // core foundational lib ==> helps in getting references
import { createRoot } from 'react-dom/client' // implementation of react on web
import App from './App.jsx'
import NewApp from './NewApp.jsx'

function Newfunction(){  // converted into tree using parsing
    return (
      <h2>React</h2>
    )
}

// const reactElement = {    //---> doesn't work as react rendor has different declarations of object
//   type : 'a',
//   props: {
//     href: 'https://google.com',
//     target: '_blank'
//   },
//   children: 'Click Me'
// }

const libName = "React"      //-->>----------------------------------------------------------//
                                                                                             //
const preReactElement = React.createElement(  // pre defined syntax -> injected by babel(JavaScript transpiler)
  'a',  // tag                                                                               //
  {href: 'https://github.com/facebook/react/tree/main', target: '_blank'},  // object ==> attributes
  'openSourceLibrary : ',  // text that appears                                              //
  libName  // variable ==> evaluated expression ==> Gaurav <<--------------------------------//
  // if(true) newUser ==> through error as it aspects evaluated expression
)

const anotherElement = (
  <a href='https://google.com' target='_blank'>Google</a>
)

createRoot(document.getElementById('root')).render(
  <>
  <StrictMode>  {/* development specific for optimization */}
     <App />    {/* custom tag ==> we can render html element through js using react */}
    <NewApp />
    <Newfunction/>
    {/* preReactElement //---> doesn't work here */}
  </StrictMode>



  {/* --only runs when strict mode is not there */}
  
  {anotherElement} 
  <Newfunction/> 
  {preReactElement}
  
  </>
  
)
