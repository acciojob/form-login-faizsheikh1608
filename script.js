function getFormvalue(event) {
    //Write your code here
	 event.preventDefault();

  // Get the form element
  const form = event.target;

  // Get the values of the first and last name fields
  const firstName = form.firstname.value.trim();
  const lastName = form.lastname.value.trim();

  // Display the full name using alert
  alert(`${firstName} ${lastName}`);
	});
}
