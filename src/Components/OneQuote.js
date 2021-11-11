export default function OneQuote({ oneQuote, toggleQuotes }) {
  function handleQuoteClick() {
    toggleQuotes(oneQuote.id);
  }

  return (
    <div className="savedQuotesContainer">
      <label className="savedQuotes">
        {oneQuote.name}
        <input
          type="checkbox"
          checked={oneQuote.complete}
          onChange={handleQuoteClick}
        />
      </label>
    </div>
  );
}
