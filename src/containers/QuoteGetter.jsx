/* eslint-disable max-len */
import React, { Component } from 'react';
import { fetchQuote } from '../components/Quote';
import QuoteDetail from '../components/Load';



export default class QuoteGetter extends Component {
  state = {
    details: [],
    loading: true,
  };


  async componentDidMount() {
    const details = await fetchQuote();
    this.setState({ details, loading: false });
  }

  render() {
    const { details, loading } = this.state;

    if (loading) return <h1>Loading...</h1>;

    return <QuoteDetail quoteText={details.quoteText} />;
  }
}
