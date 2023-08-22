import React from 'react';
import ReactDOM from 'react-dom';
import './Style.css';
import Book from "./Book"; // Import the Book component
import {books} from "./books";


const BookList = () => {
  return (
    <>
    <h1>Emmanuel best sellers</h1>
    <section className="booklist">
      {books.map((book, index) => {
        return <Book {...book} key={book.id} number={index} />;
      })}
    </section>
    </>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
export default BookList;





//https://www.amazon.com/Best-Sellers-Books/zgbs/books/
 // const people = [
//   'Creola Katherine Johnson: mathematician',
//   'Mario José Molina-Pasquel Henríquez: chemist',
//   'Mohammad Abdus Salam: physicist',
//   'Percy Lavon Julian: chemist',
//   'Subrahmanyan Chandrasekhar: astrophysicist', // Add a comma here
//   'John Tobi Chukwuka: mathematician',
//   'Peter Micheal Jude: Speaker',
// ];

// export default function List() {
//   const listItems = people.map(person => 
//       <li>{person}</li>
//   );

//   return <ul>{listItems}</ul>;
// }




// import React, { useState, useEffect } from 'react';
// import "./App.css"
// import SearchIcon from './search.svg';

// const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=6e0f715f'; // Replace with your actual API key

// const App = () => {
//   const [movies, setMovies] = useState([]);
//   const searchMovies = async (title) => {
//     const response = await fetch(`${API_URL}&s=${title}`);
//     const data = await response.json();
//     console.log(data.search);
//   };

//   useEffect(() => {
//     searchMovies("Spierman");
//   }, []);

//   return (
//     <div className="App">
//       <h1>MovieLand</h1>

//       <div className="search">
//         <input
//         placeholder='search for movies'
//         value="Superman"
//         onClick={() => {}}
//         />
//         <img
//         src={ SearchIcon }
//         alt="search"
//         />
//       </div>

//       <div className="container">
//         <div className="movies">
//           <div>
//             <p>{movie1.Year}</p>
//           </div>
//         </div>
//       </div>
//     </div> 
//   );
// };

// export default App;


// import { useEffect } from 'react';   
 
//  const API URL = 'http://www.omdbapi.com?apikey=6e0f715f';

//  const App = () => {

//   const searchmovies = async(tittle) => {
//     const response = await fetch(`${API_URL}&s=${title}`);
//     const data = await response.json()
//     console.log(data);
//   }
//   useEffect(() => {
//     searchmovies("Spiderman")

//   }, []);

//   return (
//     <h1>App</h1>

// );
// }

// export default App;




//6e0f715f  


// import React, { useState } from 'react';  // Import useState

// import './App.css';
 
// function App() {
//   const [counter, setCounter] = useState(0);

//   return (
//     <div className="App">
//       <button onClick={() => setCounter(prevCount => prevCount -1)}> - </button>
//       <h1>{counter}</h1>
//       <button onClick={() => setCounter(prevCount => prevCount + 1)}> + </button>
//     </div>
  
