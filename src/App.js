import logo from './logo.svg';
import './App.css';
import { threads, messages, users } from "./data/feedData";
import Thread from './components/thread';
import sortedThreads from './helperFunctions/helperFunctions';

console.log(sortedThreads);

function Feed() {
  // feed container, use to display all threads
  return (
    <div className="App">
      {sortedThreads.map((thread) => {return (<Thread title={thread.title} messages={thread.messages} users={users}/>)})}
    </div>
  );
}

export default Feed;
