import logo from './logo.svg';
import './App.css';
import { threads, messages, users } from "./data/feedData";
import Thread from './components/thread';
import sortedThreads from './helperFunctions/helperFunctions';

console.log(sortedThreads);

function Feed() {
  return (
    <div className="App">
      {/* <Thread threads={threads} messages={messages} users={users}/> */}
      {sortedThreads.map((thread) => {return (<Thread title={thread.title} messages={thread.messages} users={users}/>)})}
    </div>
  );
}

export default Feed;
