export const validInputNumber = () => {

  const inputs = document.querySelectorAll('.calc-block > input')
  const forms = document.querySelectorAll('form')
  const nameInputs = document.querySelectorAll('[type="text"]')
  const emailInputs = document.querySelectorAll('[type="email"]')
  const telInputs = document.querySelectorAll('[type="tel"]')
  const textInput = document.querySelector('.mess')


  nameInputs.forEach((input) => {
    input.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/[^а-яА-ЯёЁ\s-]/g, '');
    });
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