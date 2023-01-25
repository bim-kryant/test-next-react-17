import { Component } from 'react';
import Head from 'next/head';
import Menu from '../components/menu';
import { WistiaPlayer } from '@wistia/react-embeds';

export default class ChannelPage extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>Player page</title>
        </Head>
        <Menu />
        <hr />
        <h1>Player page</h1>
        <WistiaPlayer hashedId="rwr9qek74v" />
      </div>
    );
  }
}