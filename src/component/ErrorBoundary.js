import React from "react";

class ErrorBoundary extends React.Component{
    constructor(){
        super();
        this.state = {
            hasError: false,
            message: null,
        };
    }

    static getDerivedStateFromError(error){
        //biasanya digunakan devv untuk menaruh fallack UI
        return {hasError: true, message: error.message}
    }

    componentDidCatch(error){
        //eksekusi pengiriman error ke sebuah error dashboard
        //seperti web service
        console.log(error);
    }

    render(){
        if(this.state.hasError){
            return <h1>Somethink went wrong! {this.state.message}</h1>
        }
        return this.props.children;
        // return (

        // <div>
        //     <h1>This is ErrorBoundary</h1>
        //     {this.props.children}
        // </div>
        // )
    }
}

export default ErrorBoundary;