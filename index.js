const name = [`Guadalupe`, `Ollie`, `Aki`]

function writeCards(name) {
    let messages = []
    for (let i = 0; i < name.length; i++) {
        messages.push(`Thank you, ${name[i]}, for the wonderful surprise gift!`);
    }

    return messages;
} 



function countDown(n) {
    while (n >= 0) {
        console.log(n);
        n--;
    }
}