export const validInputNumber = () => {

  const inputs = document.querySelectorAll('.calc-block > input')
  const forms = document.querySelectorAll('form')
  const nameInputs = document.querySelectorAll('[type="text"]')
  const emailInputs = document.querySelectorAll('[type="email"]')
  const telInputs = document.querySelectorAll('[type="tel"]')
  const textInput = document.querySelector('.mess')

  const validateName = (name) => {
    const regex = /[^-\u0400-\u04FF\s]/g;
    name = name.replace(regex, "");
    name = name.replace(/(^[-\s]+)|([- ]+$)/g, "");
    name = name.replace(/[-\s]+/g, "-");
    name = name.toLowerCase();
    name = name.charAt(0).toUpperCase() + name.slice(1);

    return name;
  }

  const validateBlur = (event) => {
    const input = event.target;
    const inputValue = input.value;
    const formattedValue = validateName(inputValue);
    input.value = formattedValue;
  }

  nameInputs.forEach((input) => {
    if (!input.classList.contains('calc-item')) {
      input.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^а-яА-ЯёЁ\s-]/g, '');
      });
      input.addEventListener('blur', validateBlur)
    }
  });

  emailInputs.forEach((input) => {
    input.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/[^a-zA-Z0-9@\-_\.!~*']/g, '');
    });
  });

  telInputs.forEach((input) => {
    input.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/[^\d()\-]/g, '')
    });

    textInput.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/[^а-яА-ЯёЁ\s-]/g, '')
    })
  });

  inputs.forEach(input => {
    input.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/\D+/, "")

    })
  })



}