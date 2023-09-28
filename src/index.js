import { timer } from './modules/timer.js';
import { menu } from './modules/menu.js';
import { modal } from './modules/modal.js';
// import { validInputNumber } from './modules/valid-input.js';
import { tabs } from './modules/tabs.js';
import { slider } from './modules/slider.js';
import { calc } from './modules/calc.js';
import { sendForm } from './modules/sendForm.js';

timer('24 september 2023')
menu()
modal()
// validInputNumber()
tabs()
slider(
  'portfolio-content',
  'portfolio-item',
  'portfolio-dots',
  'dot',
  'portfolio-btn',
  'portfolio-item-active',
  'dot-active'
)
calc(100)
sendForm({
  formIds: ['form1', 'form2', 'form3'],
  someElem: [
    {
      type: 'block',
      id: 'total'
    }
  ]
})







