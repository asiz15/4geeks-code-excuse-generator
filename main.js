const who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
const action = ['ate', 'peed', 'crushed', 'broke'];
const what = ['my homework', 'the keys', 'the car'];
const when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];



const getRandomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const generateExcuse = () => {
    const excuse = document.getElementById('excuse')
    const str = `${who[getRandomNumber(0,3)]} ${action[getRandomNumber(0,3)]} ${what[getRandomNumber(0,2)]} ${when[getRandomNumber(0,4)]}`

    excuse.innerHTML = str
}


document.addEventListener("DOMContentLoaded", function () {
    generateExcuse()
});