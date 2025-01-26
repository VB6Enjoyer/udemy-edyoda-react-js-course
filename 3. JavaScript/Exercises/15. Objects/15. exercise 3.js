const library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }];

library.forEach(book => {
    if (book.readingStatus) {
        console.log("You have already read " + book.title + " by " + book.author + ".");
    } else {
        console.log("You have not yet read " + book.title + " by " + book.author + ".");
    }
})