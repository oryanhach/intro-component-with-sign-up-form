const form = document.getElementById('form')
const inputs = form.querySelectorAll('input')

console.log('form:', form)
console.log('inputs:', inputs)

form.addEventListener('submit', function (e) {
	e.preventDefault()

	inputs.forEach((input) => {
		const formControl = input.parentElement
		const errorMsg = formControl.querySelector('.form__error-msg')

		if (input.value.trim() === '') {
			errorMsg.style.display = 'block'
			input.style.border = '2px solid var(--clr-primary-red)'
			input.style.color = 'var(--clr-primary-red)'
		} else {
			errorMsg.style.display = 'none'
			input.style.border = '1px solid var(--clr-neutral-blue-grayish)'
		}
	})
})
