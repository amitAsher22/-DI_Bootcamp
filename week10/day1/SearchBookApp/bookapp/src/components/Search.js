
import React from 'react'



class Search extends React.Component {

// componentDidMount(){
//     fetch('https://www.googleapis.com/books/v1/volumes?q=search+terms')
//     .then(res =>res.json())
//     .then(data => console.log(data))
// }


getValue = (e)=>{
  e.preventDefault()
  console.log(e.target.bookInfo.value);
}


    render() {
        return (
            <div className="BGsearch">
                <div >
                    <div className="input-group mb-3  ">
                        <form onSubmit={this.getValue}>
                        <input type="text" name="bookInfo"  placeholder="Recipient's username"  />
                        <button type="submit" className="btn btn-outline-success">Search</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Search