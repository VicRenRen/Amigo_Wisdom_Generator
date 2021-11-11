import { useState, useEffect } from "react";
import "./Main.scss";
import QuotesStorage from "./QuotesStorage";
// import { Link, BrowserRouter } from "react-router-dom";

//Quote API: https://github.com/lukePeavey/quotable#usage
//Random Image API: https://source.unsplash.com/1600x900/?galaxy

function Main() {
  const [quote, getQuote] = useState("");
  const [author, getAuthor] = useState("");
  // const [category, getCategory] = useState("");

  useEffect(() => {
    // fetch("https://api.quotable.io/random/")
    //   .then((response) => response.json())
    //   .then((quote) => {
    //     getQuote(quote.content);
    //     getAuthor(quote.author);
    //     // getCategory(quote.tags);
    //     // console.log(quote);
    //   });

    async function randomQuote() {
      const response = await fetch("https://api.quotable.io/random");
      const quote = await response.json();
      getQuote(quote.content);
      getAuthor(quote.author);
      // getCategory(quote.tags);
      // console.log(quote);
      console.log(`${quote.content},${quote.author}`);
    }
    randomQuote();
  }, []);

  function changeBG() {
    let backgroundOptions = [
      "galaxy",
      "abstract",
      "abstraction",
      "texture",
      "fractal",
    ];
    let theOneThatsTheOne =
      backgroundOptions[Math.floor(Math.random() * backgroundOptions.length)];
    let bodyBG = document.querySelector("body");
    bodyBG.style.backgroundImage = `url(https://source.unsplash.com/1600x900/?${theOneThatsTheOne})`;
  }

  function freshQuote() {
    fetch("http://api.quotable.io/random/")
      .then((response) => response.json())
      .then((quote) => {
        getQuote(quote.content);
        getAuthor(quote.author);
      });
  }

  function nextButton() {
    changeBG();
    freshQuote();
  }

  function textToSpeech() {
    let responses = [
      ". Hmmm... interesting.",
      ". Nice one. Would you like another quote?",
      ". That was good. But press the button once more!",
      ". Impressive knowledge.",
      ". We're havving so much fun! Press the button once more",
      ". Interesting. What do you think?",
      ". I bet you never heard that one before.",
      ". Wanna hear another one? Press the button!",
      ". Truly wise. Now press the button once more.",
      ". Wisdom at its finest! If I can say so myself.",
      ". One of my favourite quotes. Would you like to hear another one?",
    ];
    let selectedResponse =
      responses[Math.floor(Math.random() * responses.length)];
    let comments = [". once said.", ". once told.", ".."];
    let t = comments[Math.floor(Math.random() * comments.length)];
    let utterance = new SpeechSynthesisUtterance(
      author + t + quote + selectedResponse
    );
    utterance.rate = 0.8;
    utterance.pitch = 0.4;
    speechSynthesis.speak(utterance);
  }

  return (
    <>
      <div className="main">
        <div className="decoration">
          <div className="wisdomGenerator">
            <div className="quoteBox">
              <h3 className="author">{author}</h3>
              <h2 className="quote">{quote}</h2>
              {/* <h4>{category}</h4> */}
            </div>
          </div>
          <div className="buttonBox">
            <button className="buttonOfWisdom" onClick={nextButton}>
              Next
            </button>
            <button className="buttonOfVoice" onClick={textToSpeech}>
              Read it to me
            </button>
          </div>
        </div>
        <div className="StorageContainer"></div>
      </div>
      <QuotesStorage></QuotesStorage>
    </>
  );
}

export default Main;
