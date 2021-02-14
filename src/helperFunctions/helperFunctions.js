import { threads, messages, users } from "../data/feedData";

let sortedThreads = [];

for (let key in threads) {
    let tempthread = {};
    let messagesList = []
    tempthread['title'] = threads[key].title;
    for (let message in threads[key].messages) {
        let messageinfo = {};
        messageinfo['body'] = messages[threads[key].messages[message]].messageBody
        messageinfo['user'] = messages[threads[key].messages[message]].author
        messagesList.push(messageinfo)
        console.log(messageinfo);
    }
    tempthread['messages'] = messagesList;
    sortedThreads.push(tempthread);
}

export default sortedThreads;