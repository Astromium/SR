const btn = document.querySelector('.btn');
const text = document.querySelector('.text');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

// speeches

const greetings = ['Im good Thank You', 'Im okay ', 'Doing good I think'];
const hello = ['Hello There', 'Hey', 'Hi', 'whats up'];
const special = ['Hey Love', 'Hi Ayoub', 'Whats up honey', 'did you eat your breakfast ?', 'I am so happy to here your voice', 'oh ! yess babe ?'];

recognition.onstart = function() {
    console.log('voice is activated, you can speak');
};

recognition.onresult = function(event) {
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;

    text.style.animation = 'fadeIn 0.7s'

    text.textContent = transcript;


    talkBack(transcript);

    console.log(event)
    

    btn.style.backgroundColor = '#0A2239';

    
    
};

btn.addEventListener('click', () => {
    recognition.start();
    btn.style.backgroundColor = '#960200';
    btn.style.outline = 'none'
    
})


function talkBack(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = 'Not on my words list ! sorry';

    if (message.includes('how are you', 'how is it going')) {
        const finalText = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
    } else if(message.includes('hi') || message.includes('hello') || message.includes('hey') || message.includes('whats up') ) {
        const finalText = hello[Math.floor(Math.random() * hello.length)];
        speech.text = finalText;
    } else if(message.includes('I am here') || message.includes('love') || message.includes('sugar')) {
        const finalText = special[Math.floor(Math.random() * special.length)];
        speech.text = finalText;
    } else if(message.includes('do a greetings for kaye')) {
        speech.text = 'hi ! kaye'
    } 


    
    speech.volume = 1;
    speech.rate = 0.5;
    speech.pitch = 4.5;
    speech.lang = "en-US";

    window.speechSynthesis.speak(speech);
}