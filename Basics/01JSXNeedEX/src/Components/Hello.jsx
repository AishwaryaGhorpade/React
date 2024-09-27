import React from 'react'


const Hello=()=>{
    return(
        //using JSX
        // <div>
        // <h1>Hello Riya</h1>
        // </div>

        //finally JSX translate into React.createElement

        //without JSX
        // React.createElement('div',null,"Hello Riya"),  //creates div tag
        // React.createElement('div',null,"<h1>Hello Riya</h1>")
        // React.createElement('div',null,"Hello Riya","hii")
        React.createElement('div',null,React.createElement('h1',null,"Hello Diya"))
        //createElement takes 3 or more args ('tag','attribute such as id,className etc', 'childs')

    )
}
export default Hello

