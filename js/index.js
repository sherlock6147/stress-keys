const numberOfImages = 27;
class Queue {
    constructor() {
        this.items = [];
    }
    // enqueue function
    enqueue(element) {
        this.items.push(element);
    }
    // dequeue function
    dequeue() {
        if (this.isEmpty())
            return "Underflow";
        return this.items.shift();
    }
    isEmpty() {
        return this.items.length == 0;
    }
}
var msgInput = document.getElementById('msg');
var lastInputs = new Queue();
var key1 = document.getElementById('key-1');
var key2 = document.getElementById('key-2');
var key3 = document.getElementById('key-3');
function changeImage() {
    var msg = msgInput.value;
    var lastChar = msg[msg.length - 1];
    console.log(lastChar);
    lastInputs.enqueue(lastChar);
    if (lastInputs.items.length > 3) {
        lastInputs.dequeue();
    }
    if (lastInputs.items.length == 3) {
        setKey(lastInputs.items[2], key1);
        setKey(lastInputs.items[1], key2);
        setKey(lastInputs.items[0], key3);
    }
    else if (lastInputs.items.length == 2) {
        setKey(lastInputs.items[1], key1);
        setKey(lastInputs.items[0], key2);
        setKey(' ', key3);
    }
    else if (lastInputs.items.length == 1) {
        setKey(lastInputs.items[0], key1);
        setKey(' ', key2);
        setKey(' ', key3);
    }
    else {
        setKey('TY', key1);
        setKey('P', key2);
        setKey('EM', key3);
    }
    setImage();
    console.log(lastInputs);
}
function setKey(lastChar, key) {
    if (lastChar == undefined) {
        lastChar = " ";
    }
    key.innerHTML = '<h2>' + lastChar + '</h2>';
}
function setImage() {
    var imgNumber = Math.round(Math.random() * numberOfImages);
    if (imgNumber == 0)
        ++imgNumber;
    var msgImage = document.getElementById('msg-img');
    msgImage.style.backgroundImage = 'url("images/image-' + imgNumber.toString() + '.webp")';
}