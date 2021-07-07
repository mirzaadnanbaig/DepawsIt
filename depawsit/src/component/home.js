import React, { Component } from 'react';
import Footer from './footer';
import Header from './header';
import JSON from './db.json';
import BooksDisplay from './booksdisplay';



class Home extends Component
{

    constructor(){
                super()
                this.state = {
                  books:JSON
                    }

    }
     render()
     {
         console.log(this.state.books)
        return (
      
            <div>
           <Header/>
          <BooksDisplay datalist ={ this.state.books}/>
          <Footer year={2021} month ={'December'}/>
          </div>
           )


     }


}


export default Home;