
function ContactForm() {
	var name = document.forms.RegForm.name.value;
	var email = document.forms.RegForm.email.value;
	var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g; //Javascript reGex for Email Validation.									 // Javascript reGex for Phone Number validation.
	var regName = /\d+$/g;								 // Javascript reGex for Name validation

	if (name == "" || regName.test(name)) {
		window.alert("Please enter your name properly.");
		name.focus();
		return false;
	}
    if (email == "" || !regEmail.test(email)) {
		window.alert("Please enter a valid e-mail address.");
		email.focus();
		return false;
	}
    return true;
}
// const input = document.getElementById('input');

// if (input) {
//    // it will remove placeholder value on focus and store with dataset variable
//   input.addEventListener('focus', (e) => {
//     input.dataset.placeholder = input.placeholder
//     input.placeholder = '';
//   });
    
//   // it will reset placeholder value on blur by dataset variable
//   input.addEventListener('blur', (e) => {
//     input.placeholder = input.dataset.placeholder;
//   });
// }else{
//   console.log("input is not defined",input);
// }
