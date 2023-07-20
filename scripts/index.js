// inputs
const txtInput = document.getElementById("text")
const btnInput = document.getElementById("btn")

// form
const form = document.getElementById("form")

// tweets
const tweets = document.querySelector(".tweets")

// objeto
let mensagens = []


form.addEventListener('submit', (event) => {
    event.preventDefault();
    mensagens.push(txtInput.value)

    const lastItem = mensagens[mensagens.length - 1]

    const listItem = document.createElement("p");
    listItem.textContent = lastItem;
    tweets.appendChild(listItem);
    txtInput.value = ""
})

