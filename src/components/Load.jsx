import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { fetchQuote } from './Quote';


const QuoteDetail = () => {

  const [quote, setQuote] = useState();

  const getQuote = async () => {

    const resQuote = await fetchQuote();
    setQuote(resQuote);
  };


  return (
    <div>
      {quote ? <p>{quote.quoteText}</p> : <p>Press button to get quote</p>}
      <button onClick={getQuote}>Get Quote</button>
    </div>
  );
};

QuoteDetail.propTypes = {
  quoteText: PropTypes.string.isRequired
};


export default QuoteDetail;
