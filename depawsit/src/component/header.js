import React, { Component } from 'react';
import './header.css'



class Header extends Component{

    constructor(){
        super();
        this.state={
            title: 'DePawsIT',
            keyword : 'User Input here'
        }
    }



    handleChange = (event) =>{

        console.log(event.target.value)
        this.setState({keyword: event.target.value? event.target.value: 'User Input here'})
    }

      render(){
         console.log("Inside render")
        return (
            <header>
            <div className='logo'> {this.state.title}
                    </div>
                <center>
                    <input type="text" onChange={this.handleChange}/>
                    <div >{this.state.keyword}</div>
                    <hr/>
                </center>   
            </header>
            
             
                 
       
       )

      }

}

/*const Header = () => {

return (

     <div>
         <center>
             <h2> DePawsIT
             </h2>
             <hr/>
             </center>
           

         </div>
          

)

}*/

export default Header;