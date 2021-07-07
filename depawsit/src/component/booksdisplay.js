import React from 'react';

const BooksDisplay = (props) =>
{
  const renderList = props.datalist.map((data) => {
 return (
     <div key={data.id}>
         <h3>{data.title}</h3>
         <p>{data.Writer}</p>

     </div>

 )

  })

    return (
            <React.Fragment>

                {renderList}
            </React.Fragment>

    )
}

export default BooksDisplay