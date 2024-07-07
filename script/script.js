const list_box_output = document.getElementsByClassName('box-output');

window.onload = () => { // Add an dblclick event for each box_output element
    for (let i = 0; i < list_box_output.length; i++){
        list_box_output[i].addEventListener("dblclick", () => {
            console.log("I was clicked 2 times.");

        });
    }
}

const img_keyboard = document.getElementById('img-keyboard');

// ------------- Animation keyboard down and up ------------------------ 
document.addEventListener("keydown", (event) => { // The event param provides an json with informations about the event "keydown" or anyone event type...

    img_keyboard.src = "./assets/keyboard-solid.svg";

    img_keyboard.classList.replace("up", "down");
    img_keyboard.classList.add("down");

    var var_keycode = event.keyCode;
    var var_which = event.which;
    var var_code = event.code;
    var var_key = event.key;

    const out_keycode = document.getElementById('return-keyCode');
    const out_which = document.getElementById('return-which');
    const out_code = document.getElementById('return-code');
    const out_key = document.getElementById('return-key');
    const key_input = document.getElementById('key-input');

    out_keycode.textContent = var_keycode;
    out_which.textContent = var_which;
    out_code.textContent = var_code;
    out_key.textContent = var_key;
    key_input.textContent = var_key;

    var div_keys = document.querySelectorAll('.key_fb');
    div_keys.forEach((item) => {
        item.classList.remove('enlarge');
    });

    console.log(div_keys[0]);
    console.log(div_keys[1]);
    console.log(div_keys[2]);
    console.log(div_keys[3]);
    console.log(div_keys[4]);

    switch (var_key){
        case 'Shift':
            div_keys[0].classList.add('enlarge');
            break;
        case 'Control':
            div_keys[1].classList.add('enlarge');
            break;
        case 'Meta':
            div_keys[2].classList.add('enlarge');
            break;
        case 'Alt':
            div_keys[3].classList.add('enlarge');
            break;
        default:
            div_keys[4].classList.add('enlarge');
            break;
    }

});

document.addEventListener("keyup", (event) => { 
    img_keyboard.src = "./assets/keyboard-regular.svg";
    img_keyboard.classList.replace("down", "up");

});