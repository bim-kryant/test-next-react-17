import { Component } from 'react';
import Head from 'next/head';
import Menu from '../components/menu';
import { WistiaPlayer } from '@wistia/react-embeds';

export default class IndexPage extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>Index page</title>
        </Head>
        <Menu />
        <hr />
        <h1>Index page</h1>
        <p>(no embeds)</p>
      </div>
    );
  }
}