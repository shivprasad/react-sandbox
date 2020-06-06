import React from "react"

// function MyInfo(){
//   return (
//      <div>
//      <h1>Shiv</h1>
//      <p>Just another developer trying hands on React.</p>
//      <ul>
//         <li>Swiss</li>
//         <li>Paris</li>
//         <li>New York</li>
//      </ul>
//    </div>
//   )
// }

class MyInfo extends React.Component {

  render(){
    return (
      <div>
      <h1>{this.props.name}</h1>
      <p>Just another developer trying hands on React.</p>
      <ul>
         <li>Swiss</li>
         <li>Paris</li>
         <li>New York</li>
      </ul>
    </div>
   )
  }

}

export default MyInfo