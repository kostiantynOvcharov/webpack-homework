import {component} from '../js/component.js';
import '../ts/type_script.ts';
import html from '../html/fragments.html';
window.document.body.appendChild(component());
window.document.querySelector('.greetings').innerHTML = html({content: 'Admin'});