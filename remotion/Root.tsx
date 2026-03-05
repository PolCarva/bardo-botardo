import React from 'react';
import { Composition } from 'remotion';
import { Demo } from './scenes/Demo';

export const Root: React.FC = () => {
  return (
    <>
      <Composition
        id="Demo"
        component={Demo}
        durationInFrames={30 * 12}
        fps={30}
        width={1280}
        height={720}
        defaultProps={{
          title: 'Vibecoding 16',
        }}
      />
    </>
  );
};
