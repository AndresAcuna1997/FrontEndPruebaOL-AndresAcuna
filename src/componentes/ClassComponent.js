import React from "react";

class ClassComponent extends React.Component {


    componentDidMount(){
        console.log('Montado componente');
    }

    render(){
        return(
            <>
            <h1> Hello </h1>
            </>
        )
    }
}
export default ClassComponent;