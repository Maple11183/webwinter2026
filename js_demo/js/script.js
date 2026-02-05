function askName() {
    var nameReturn = document.getEleByld('ask-name');
    var name = prompt('Please enter your name in the box below:');
if (name == '') {
    alert('Please try again');
} else {
    nameReturn. innerHTML = 'Hello' + name + '! Nice to meet you!'

}

} 

function askQuestion() {
    var p=prompt('How much wood could a woodchuck if  woodchuck could chuck wood?');
    if (p !=null){
        document.getElementById('question').innerHTML = 'Wow! ' + p + 'That is a lot of wood!';
    }
}