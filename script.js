function getFormvalue(event) {
  // Prevent the form from refreshing the page
  event.preventDefault();

  // Get the form element by its ID
  const form = document.getElementById('form1');

  // Retrieve the values of the first and last name fields
  const firstName = form.elements['fname'].value.trim();
  const lastName = form.elements['lname'].value.trim();

  // Display the full name using alert
  alert(`${firstName} ${lastName}`);
}
