import { inputMessageValidate, inputNameValidate, inputEmailValidate, inputPhoneValidate } from "./helper";


export const sendForm = ({ formIds, someElem = [] }) => {
  formIds.forEach(formId => {
    const form = document.getElementById(formId);
    const inputPhone = form.querySelector('[name="user_phone"]');
    const inputEmail = form.querySelector('[name="user_email"]');
    const inputName = form.querySelector('[name="user_name"]');
    const inputMessage = form.querySelector('[name="user_message"]');
    const statusBlock = document.createElement('div')
    const loadText = `
    <section class="section">
  <div class="sk-circle-bounce">
    <div class="sk-child sk-circle-1"></div>
    <div class="sk-child sk-circle-2"></div>
    <div class="sk-child sk-circle-3"></div>
    <div class="sk-child sk-circle-4"></div>
    <div class="sk-child sk-circle-5"></div>
    <div class="sk-child sk-circle-6"></div>
    <div class="sk-child sk-circle-7"></div>
    <div class="sk-child sk-circle-8"></div>
    <div class="sk-child sk-circle-9"></div>
    <div class="sk-child sk-circle-10"></div>
    <div class="sk-child sk-circle-11"></div>
    <div class="sk-child sk-circle-12"></div>
  </div>
</section>
    `
    
    const errorText = 'Ошибка'
    const succesText = 'Спасибо! Наш менеджер с вами свяжется!'

    const validate = (list) => {
      const invalidInputs = [];
      let success = true

      list.forEach(input => {

        if (!input.classList.contains('success')) {
          success = false
          invalidInputs.push(input);
        }
      })
      if (!success) {
        alert('Данные не валидны для следующих полей:\n\n' + invalidInputs.map(input => input.placeholder).join('\n'));
      }
      return success
    }

    const sendData = (data) => {
      return fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
    }

    const submitForm = () => {
      const formElements = form.querySelectorAll('input')
      const formData = new FormData(form)
      const formBody = {}

      statusBlock.innerHTML = loadText

      form.append(statusBlock)
      if(form.id == 'form3') {
        statusBlock.style.color = '#fff'
      }
      formData.forEach((val, key) => {
        formBody[key] = val
      });

      someElem.forEach(elem => {
        const element = document.getElementById(elem.id)
        console.log(element);
        if (elem.type === 'block') {
          formBody[elem.id] = element.textContent
        } else if (elem.type === 'input') {
          formBody[elem.id] = element.value
        }

      })

      Promise.all([
        inputPhoneValidate(inputPhone),
        inputEmailValidate(inputEmail),
        inputNameValidate(inputName),
        inputMessageValidate(inputMessage)
      ]).then(() => {
        if (validate(formElements)) {
          sendData(formBody).then(data => {
            statusBlock.textContent = succesText;
            formElements.forEach(input => {
              input.value = ''
            })
          }).catch(error => {
            statusBlock.textContent = errorText;
          });
        } 
      })
    }

    try {
      if (!form) {
        throw new Error('Верните форму на место!')
      }

      form.addEventListener('submit', (event) => {
        event.preventDefault()
        submitForm()
      })
    } catch (error) {
      console.log(error.message);
    }

  });
}