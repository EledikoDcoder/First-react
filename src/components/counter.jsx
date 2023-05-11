import React, { Component } from 'react';


class Counter extends Component {
    state = { 
        count: 0
     } ;


     countIncrement = () => {
        this.setState({count: this.state.count + 1})
     };
     countDecrement = () =>{
        this.setState({count: this.state.count -1})
        
     };

     resetCount = () => {
        this.setState({ count: 0 });
      };


    render() { 
        return (
            <div className=' bg-cyan-500 text-3xl text-center pt-[8rem]  font-bold h-[30rem]'>
                <h1 className=' pb-[2rem]'>{this.state.count}</h1>
                <button className=' px-[2rem] py-[.5rem] mr  -[1rem] border-white text-white border-[.1rem] hover:bg-white hover:text-black transition-all delay-300 duration-300' onClick={this.countIncrement}>Increment</button>
                <button className=' px-[2rem] py-[.5rem] ml-[1rem] border-white text-white border-[.1rem] hover:bg-white hover:text-black transition-all delay-300 duration-300' onClick={this.countDecrement}>Decrement</button>
                <div>
                <button className='px-[2rem] py-[.5rem] mt-[2rem] bg-white text-black hover:border-white hover:bg-transparent hovewer:text-white hover:border-[.1rem]  transition-all delay-300 duration-300' onClick={this.resetCount}>Reset</button>
                </div>
            </div>
        );
    }

    
}
 
export default Counter;