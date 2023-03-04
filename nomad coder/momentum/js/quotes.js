const quotes = [
    {
        quote: "Just survive somehow",
        author: "Enid",
    },
    {
        quote: "Fake till you make it.",
        author: "Amy Cuddy",
    },
    {
        quote: "Go wild, Speak loud, Think hard.",
        author: "noname",
    },
    {
        quote: "If not me, who? If not now, when?",
        author: "Emma Watson",
    },
    {
        quote: "Start now, get perfect later.",
        author: "Rob Moore",
    },
    {
        quote: "Speak the truth, even if your voice shakes.",
        author: "Maggie Kuhn",
    },
    {
        quote: "Not all those who wander are lost.",
        author: "J.R.R. Tolkien",
    },
    {
        quote: "No need to hurrt. No need to sparkle. No need to be anybody but oneself.",
        author: "Adeline Virginia Woolf",
    },
    {
        quote: "No one can make you feel inferior without your consent.",
        author: "Eleanor Roosevelt",
    },
    {
        quote: "Life is either a daring adventure or nothing at all.",
        author: "Helen Keller",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

/* Math.round(1.2) --> 1
Math.ceil(1.2) --> 2
Math.floor(1.1) --> 1 */

// quotes에 들어있는 quote와 author의 쌍을 0~9까지 랜덤하게 가져오기
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;