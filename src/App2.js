// import { useState, useEffect } from "react";

// //Quote API: https://github.com/lukePeavey/quotable#usage

// function App() {
//   const [quote, getQuote] = useState("");
//   const [author, getAuthor] = useState("");
//   // const [category, getCategory] = useState("");

//   useEffect(() => {
//     fetch("https://api.quotable.io/random")
//       .then((response) => response.json())
//       .then((quote) => {
//         getQuote(quote.content);
//         getAuthor(quote.author);
//         // getCategory(quote.tags);
//         // console.log(quote);
//       });
//   }, []);

//   function freshQuote() {
//     fetch("http://api.quotable.io/random")
//       .then((response) => response.json())
//       .then((quote) => {
//         getQuote(quote.content);
//         getAuthor(quote.author);
//       });
//   }

//   return (
//     <>
//       <div className="wisdomGenerator">
//         <div className="quote">
//           <h3 className="author">{author} once said:</h3>
//           <h2 className="quote">{quote}</h2>
//           {/* <h4>{category}</h4> */}
//         </div>
//         <button className="buttonOfWisdom" onClick={freshQuote}>
//           Give me more knowledge!
//         </button>
//       </div>
//     </>
//   );
// }

// export default App;
