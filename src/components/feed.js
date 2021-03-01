import React from 'react';
import Thread from './thread';
import sortedThreads from '../helperFunctions/helperFunctions';
import '../css/feed.css';

export default function Feed() {
  return (
    <div className="feed">
      {sortedThreads.map((thread) => (
        <Thread
          title={thread.title}
          messages={thread.messages}
        />
      ))}
    </div>
  );
}
