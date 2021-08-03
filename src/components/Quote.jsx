import React from 'react';
import PropTypes from 'prop-types';



const QuoteDetail = ({ quote }) => {


  return (
    <div>
      {quote ? <p>{quote.quoteText}</p> : <p>Press button to get quote</p>}
    </div>
  );
};

QuoteDetail.propTypes = {
  quote: PropTypes.string.isRequired
};


export default QuoteDetail;
