let letters_div = document.querySelector('.hang-letters .letters');
let hang_div = document.querySelector('.hang-letters .hang');
let choosed_letters_div = document.querySelector('.choosed-letters');
let word_span = document.querySelector('.word-from span');
let landing = document.querySelector('.landing');
let end_status = document.querySelector('.end-status');
let here = document.querySelector('.here');

let people = ['zewil', 'yaquob', 'zahi-hawwas', 'elsharawy', 'taha-hessien', 'nageeb-mahfouz', 'abbas-elaqad', 'tawfiq'];
let countries = ['egypt', 'saudia', 'libya', 'tunis', 'albhreen', 'oman', 'jordan', 'alemarat', 'qatr'];
let programming_langs = ['java', 'java-script', 'html', 'css', 'python', 'typescript', 'go-lang', 'ruby', 'php', 'dart'];
let word_content = '';
let hang_index = 0;
let choosed_array = choose_array();

let choosed_word = choose_word(choosed_array);
console.log(choosed_word);
word_span.textContent = word_content;
init_spans();
let looseCounter = 0;
let winCounter = 0;
let letters_div_children = Array.from(letters_div.children);
letters_div_children.forEach(letter => {
    letter.onclick = (e) => {
        
        disable_letter(letter);
        let ch = letter.textContent;
        let is_exist = choosed_word.includes(ch);
        if (is_exist) {
            document.getElementById('success').play();
            search_on_letter(ch);
            winCounter++;
            if(winCounter == choosed_word.length){
                landing.style.visibility="visible";
                    end_status.textContent="Congratulations, for trying again press "
            }
        }
        else {
            if (hang_index < hang_div.children.length) {
                document.getElementById('fail').play();
                hang_div.children[hang_index++].classList.remove('hidden');
                looseCounter++;
                if(looseCounter == 8){
                    landing.style.visibility="visible";
                    end_status.textContent="you had failed, for trying again press "
                }
                
            }
            
        }

    };
});
here.onclick = (()=>{
location.reload();
});
function choose_array() {
    let rnd = Math.floor(Math.random() * 3);
    if (rnd === 0) {
        word_content = 'people';
        return people;
    }
    else if (rnd === 1) {
        word_content = 'countries';
        return countries;
        
    }
    word_content = 'programming';
    return programming_langs;
}
function choose_word(arr) {
    let rnd = Math.floor(Math.random() * arr.length);
    return arr[rnd];
}
function init_spans() {
    for (let i = 0; i < choosed_word.length; i++) {
        let sp = document.createElement('span');
        if (choosed_word[i] !== '-') {
            sp.classList.add('letter');
        }
        else {
            sp.textContent = '-';
            sp.classList.add('hiven');
        }
        choosed_letters_div.appendChild(sp);
    }
}
let disable_letter = (letter) => {
    letter.classList.add('clicked');
};


let search_on_letter = (letter) => {
    for (let i = 0; i < choosed_word.length; i++) {
        if (choosed_word[i] === letter) {
            choosed_letters_div.children[i].textContent = letter;
        }
        
    }
};

