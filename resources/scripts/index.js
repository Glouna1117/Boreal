const signInSection = document.getElementById('signInForm')
const signUpSection = document.getElementById('signUpForm')

function setLoginForm() {
    signInSection.style.display = 'block'
    signUpSection.style.display = 'none'
}

function setSignUpForm() {
    signUpSection.style.display = 'block'
    signInSection.style.display = 'none'
}