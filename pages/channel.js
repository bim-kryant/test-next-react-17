import { Component } from 'react';
import Head from 'next/head';
import Menu from '../components/menu';
import { WistiaChannel } from '@wistia/react-embeds';

export default class ChannelPage extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>Channel page</title>
        </Head>
        <Menu />
        <hr />
        <h1>Channel page</h1>
        <WistiaChannel hashedId="azvv98g14a" />
      </div>
    );
  }
}