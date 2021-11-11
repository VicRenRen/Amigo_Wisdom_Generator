export default function OneQuote({ oneQuote, toggleQuotes }) {
  function handleQuoteClick() {
    toggleQuotes(oneQuote.id);
  }

  return (
    <div className="savedQuotes">
      <label>
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
