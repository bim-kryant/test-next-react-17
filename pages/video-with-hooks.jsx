import { Component, useContext, useEffect, useState } from 'react';
import Head from 'next/head';
import Menu from '../components/menu';
import { usePlayer, WistiaPlayer } from '@wistia/react-embeds';

export default function VideoWithHooks() {
  const [state, setState] = useState({
    useOriginalHandler: true,
    hashedIds: ['tqx0g6bhuz', 'fwp13v5dob', 'hgvgu0fzem', '2mvsmu9xro'],
    currentVideoHashedId: 'tqx0g6bhuz',
  });

  const originalHandler = () => {
    console.log('volume changed 1');
  };

  const alternateHandler = () => {
    console.log('volume changed 2');
  };

  const changeEventHandler = () => {
    console.log('changing event handler');
    setState({
      ...state,
      useOriginalHandler: !state.useOriginalHandler,
    });
  };

  const toggleVideoHandler = () => {
    const { hashedIds, currentVideoHashedId } = state;
    const currentVideoIndex = hashedIds.indexOf(currentVideoHashedId);
    const nextVideo = hashedIds[(currentVideoIndex + 1) % hashedIds.length];

    console.log({
      currentVideoHashedId,
      nextVideo,
    });

    setState({
      ...state,
      currentVideoHashedId: nextVideo,
    });
  };

  return (
    <div>
      <Head>
        <title>Player page</title>
      </Head>
      <Menu />
      <hr />
      <h1>Player page</h1>
      <button onClick={changeEventHandler}>Rerender with new onVolumeChange</button>
      <button onClick={toggleVideoHandler}>Toggle video</button>
      <hr />

      <p>current hashed id: {state.currentVideoHashedId}</p>

      <WistiaPlayer
        hashedId={state.currentVideoHashedId}
        embedHost="fast.wistia.com"
        controlsVisibleOnLoad={false}
        onVolumeChange={state.useOriginalHandler ? originalHandler : alternateHandler}
      />

      <PlayerControls hashedId={state.currentVideoHashedId} />
    </div>
  );
}

function PlayerControls({ hashedId }) {
  const player = usePlayer(hashedId);

  return (
    <div>
      <h2>Player Controls</h2>

      {player && (
        <>
          <button onClick={() => player.play()}>Play</button>
        </>
      )}
    </div>
  );
}