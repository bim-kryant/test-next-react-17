

import { Component } from 'react';
import Link from 'next/link';

export default class Menu extends Component {
  render() {
    return (
      <ul>
        <li>
          <Link href="/">
            <a>Index page (no embeds)</a>
          </Link>
        </li>
        <li>
          <Link href="/channel">
            <a>Channel embed page</a>
          </Link>
        </li>
        <li>
          <Link href="/video">
            <a>Video embed page</a>
          </Link>
        </li>
        <li>
          <Link href="/video-with-hooks">
            <a>Video with hook</a>
          </Link>
        </li>
      </ul>
    );
  }
}