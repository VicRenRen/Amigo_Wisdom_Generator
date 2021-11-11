import React from "react";
import OneQuote from "./OneQuote";

export default function oneQuoteList({ myQuotes, toggleQuotes }) {
  return myQuotes.map((oneQuote) => {
    return (
      <OneQuote
        key={oneQuote.id}
        toggleQuotes={toggleQuotes}
        oneQuote={oneQuote}
      />
    );
  });
}
