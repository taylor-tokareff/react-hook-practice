import React from 'react';
import PropTypes from 'prop-types';
import { fetchQuote } from './Quote';


const QuoteDetail = ({ quoteText }) => {



  const getQuote = async () => {
    await fetchQuote();
  };


  return (
    <div>
      <p>{quoteText}</p>
      <button onClick={getQuote}>Get Quote</button>
    </div>
  );
};

QuoteDetail.propTypes = {
  quoteText: PropTypes.string.isRequired
};


export default QuoteDetail;
