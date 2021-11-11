import React, { useState, useRef, useEffect } from "react";
import OneQuoteList from "../Components/OneQuoteList";
import uuidv4 from "uuid/dist/v4";
import "./QuoteStorage.scss";
const LOCAL_STORAGE_KEY = "OneQuote.myQuotes";

function QuotesStorage() {
  const [myQuotes, setQuotes] = useState([]);
  const quoteNameRef = useRef();

  useEffect(() => {
    const storedQuotes = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedQuotes) setQuotes(storedQuotes);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(myQuotes));
  }, [myQuotes]);

  function toggleQuotes(id) {
    const newQuotes = [...myQuotes];
    const OneQuote = newQuotes.find((OneQuote) => OneQuote.id === id);
    OneQuote.complete = !OneQuote.complete;
    setQuotes(newQuotes);
  }

  function handleAddQuotes(e) {
    const name = quoteNameRef.current.value;
    if (name === "") return;
    setQuotes((prevmyQuotes) => {
      return [...prevmyQuotes, { id: uuidv4(), name: name, complete: false }];
    });
    quoteNameRef.current.value = null;
  }

  function handleClearmyQuotes() {
    const newQuotes = myQuotes.filter((OneQuote) => !OneQuote.complete);
    setQuotes(newQuotes);
  }

  return (
    <>
      <div className="myQuotes">
        <div className="myQuotesRow1">
          <h2 className="titleMyquote">My Quotes</h2>
          <input ref={quoteNameRef} type="text" />
          <button className="listButton" onClick={handleAddQuotes}>
            Add New Quote
          </button>
          <button className="listButton" onClick={handleClearmyQuotes}>
            Delete Selected
          </button>
        </div>
        <div className="myQuotesRow2">
          <br></br>
          <OneQuoteList myQuotes={myQuotes} toggleQuotes={toggleQuotes} />
        </div>
      </div>
    </>
  );
}

export default QuotesStorage;
