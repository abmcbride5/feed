const threads = {
    '01': {
        title: "Great Pizza",
        messages: ['001', '002', '005', '007'],
        creator: '123',
    },
    '02': {
        title: "Fireworks",
        messages: ['003', '004'],
        creator: '123',
    },
    '03': {
        title: "Smoothies",
        messages: ['006'],
        creator: '123',
    }
}

const messages = {
    '001': {
        author: '120',
        messageBody: "I really love Mountain Mikes pizza",
        timeStamp: '1995-12-17T03:24:00'
    },
    '002': {
        author: '121',
        messageBody: "I really love Papa Johns",
        timeStamp: '1995-12-17T03:24:00'
    },
    '003': {
        author: '124',
        messageBody: "The fireworks have been going on for too long",
        timeStamp: '1995-12-17T03:24:00'
    },
    '004': {
        author: '120',
        messageBody: "The fireworks are great",
        timeStamp: '1995-12-17T03:24:00'
    },
    '005': {
        author: '122',
        messageBody: "I really love Pizza hut",
        timeStamp: '1995-12-17T03:24:00'
    },
   '006': {
        author: '121',
        messageBody: "Smoothies are a great meal replacement",
        timeStamp: '1995-12-17T03:24:00'
    },
   '007': {
        author: '123',
        messageBody: "I hate pizza",
        timeStamp: '1995-12-17T03:24:00'
   }, 
   '010': {
    author: '122',
    messageBody: "I really love Mountain Mikes pizza",
    timeStamp: '1995-12-17T03:24:00'
   }
   
}

const users = {
    '120': {
        name: "John Doe",

    },
    '121': {
        name: "Kate Doe",
        
    },
    '122': {
        name:"Joe Doe",

    },
    '123': {
        name:"Jane Doe",
        
    },
    '124': {
        name:"Paul Doe",
        
    }
}

export {threads, messages, users};