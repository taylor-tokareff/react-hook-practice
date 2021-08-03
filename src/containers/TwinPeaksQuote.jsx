/* eslint-disable max-len */
import React, { Component, useState } from 'react';
import { fetchQuote } from '../services/TwinPeaksAPI';
import QuoteDetail from '../components/Quote';
import Button from '../components/Load';



export const QuoteGetter = () => {

  const [quote, setQuote] = useState();
  const [loading, setLoading] = useState(false);

  const getQuote = async () => {
    setLoading(true);
    const resQuote = await fetchQuote();
    setQuote(resQuote);
    setLoading(false);
  };



  if (loading === true) return <h1>loading...</h1>;


  return <>
    <QuoteDetail quote={quote} />
    <Button onClick={getQuote} />;
  </>;
};

