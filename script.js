function textToAudio(){
    let msg = document.querySelector('.text').value;
    let speech = new SpeechSynthesisUtterance();

    speech.lang = "en-US";
    speech.text = msg;
