import { threads, messages } from '../data/feedData';

const sortedThreads = [];

Object.values(threads).forEach((thread) => {
  const tempthread = {};
  tempthread.title = thread.title;
  tempthread.messages = [];

  for (let i = 0; i < thread.messages.length; i += 1) {
    // messagesArray.push(messages[thread.messages[i]]);
    tempthread.messages.push(messages[thread.messages[i]]);
  }
  sortedThreads.push(tempthread);
});

export default sortedThreads;
