document
  .getElementById("firstName")
  .addEventListener("input", function (event) {
    const input = event.target.value;
    const regex = /^[A-Za-z]*$/; // Regular expression to allow only letters
    const errorMessage = document.getElementById("first-name-error-message");

    if (!regex.test(input)) {
      errorMessage.textContent = "Only letters are allowed.";
      event.target.value = input.slice(0, -1); // Remove the last character if it is invalid
    } else if (input.length < 2) {
      errorMessage.textContent = "Minimum 2 characters required.";
    } else if (input.length > 30) {
      errorMessage.textContent = "Maximum 30 characters allowed.";
      event.target.value = input.slice(0, 30); // Trim input to 30 characters
    } else {
      errorMessage.textContent = "";
    }
  });

document.getElementById("firstName").addEventListener("blur", function (event) {
  const input = event.target.value;
  const errorMessage = document.getElementById("first-name-error-message");

  if (input.length === 0) {
    errorMessage.textContent = "First Name is required.";
  }
});

// Last name
document.getElementById("lastName").addEventListener("input", function (event) {
  const input = event.target.value;
  const regex = /^[A-Za-z]*$/; // Regular expression to allow only letters
  const errorMessage = document.getElementById("last-name-error-message");

  if (!regex.test(input)) {
    errorMessage.textContent = "Only letters are allowed.";
    event.target.value = input.slice(0, -1); // Remove the last character if it is invalid
  } else if (input.length < 2) {
    errorMessage.textContent = "Minimum 2 characters required.";
  } else if (input.length > 30) {
    errorMessage.textContent = "Maximum 30 characters allowed.";
    event.target.value = input.slice(0, 30); // Trim input to 30 characters
  } else {
    errorMessage.textContent = "";
  }
});

document.getElementById("lastName").addEventListener("blur", function (event) {
  const input = event.target.value;
  const errorMessage = document.getElementById("last-name-error-message");

  if (input.length === 0) {
    errorMessage.textContent = "Last Name is required.";
  }
});

// Email
document
  .getElementById("emailInput")
  .addEventListener("input", function (event) {
    const email = event.target.value;
    const errorMessage = document.getElementById("email-error-message");

    // Check for multiple @ symbols
    if ((email.match(/@/g) || []).length > 1) {
      // Remove extra @ symbols
      event.target.value = email.slice(0, -1);
      errorMessage.textContent = 'Please enter only one "@" symbol.';
    } else {
      errorMessage.textContent = "";

      // Regular expression for basic email validation
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

      if (emailPattern.test(email)) {
        errorMessage.textContent = "";
      } else {
        errorMessage.textContent = "Please enter a valid email address.";
      }
    }
  });

document
  .getElementById("emailInput")
  .addEventListener("blur", function (event) {
    const input = event.target.value;
    const errorMessage = document.getElementById("email-error-message");

    if (input.length === 0) {
      errorMessage.textContent = "Email is required.";
    }
  });

// Adresss1
document.getElementById("address1").addEventListener("input", function (event) {
  var address = event.target.value;
  var errorMessage = document.getElementById("address1-error-message");

  // Remove any characters that are not , . : -
  address = address.replace(/[^a-zA-Z0-9\s,.:\-]/g, "");

  // Update the input field value with the sanitized address
  event.target.value = address;

  // Regular expression for address validation
  var addressPattern = /^[a-zA-Z0-9\s,.\-:]*$/;

  if (addressPattern.test(address)) {
    errorMessage.textContent = "";
  } else {
    errorMessage.textContent =
      "Address can only contain letters, numbers, spaces, and the following symbols: , . : -";
  }
});

document.getElementById("address1").addEventListener("blur", function (event) {
  const input = event.target.value;
  const errorMessage = document.getElementById("address1-error-message");

  if (input.length === 0) {
    errorMessage.textContent = "Address is required.";
  }
});

//Address2
document.getElementById("address2").addEventListener("input", function (event) {
  var address = event.target.value;
  var errorMessage = document.getElementById("address2-error-message");

  // Remove any characters that are not , . : -
  address = address.replace(/[^a-zA-Z0-9\s,.:\-]/g, "");

  // Update the input field value with the sanitized address
  event.target.value = address;

  // Regular expression for address validation
  var addressPattern = /^[a-zA-Z0-9\s,.\-:]*$/;

  if (addressPattern.test(address)) {
    errorMessage.textContent = "";
  } else {
    errorMessage.textContent =
      "Address can only contain letters, numbers, spaces, and the following symbols: , . : -";
  }
});

//City
document.getElementById("city").addEventListener("blur", function (event) {
  const input = event.target.value;
  const errorMessage = document.getElementById("city-error-message");

  if (input.length === 0) {
    errorMessage.textContent = "City is required.";
  }
});

// postalCode
document
  .getElementById("postalCode")
  .addEventListener("input", function (event) {
    var postalCode = event.target.value.trim();
    var cleanPostalCode = postalCode.replace(/[^0-9]/g, ""); // Allow only digits

    // Limit to 5 characters (standard ZIP format)
    if (cleanPostalCode.length > 5) {
      cleanPostalCode = cleanPostalCode.slice(0, 5);
    }

    // Update the input value with the cleaned version
    event.target.value = cleanPostalCode;

    var isValidPostalCode = /^\d{5}$/.test(cleanPostalCode);

    var errorMessage = "";
    if (!isValidPostalCode && cleanPostalCode.length > 0) {
      errorMessage = "Please enter a valid 5-digit US postal code.";
    }

    document.getElementById("postalCode-error-message").textContent =
      errorMessage;
  });

document
  .getElementById("postalCode")
  .addEventListener("blur", function (event) {
    const input = event.target.value;
    const errorMessage = document.getElementById("postalCode-error-message");

    if (input.length === 0) {
      errorMessage.textContent = "Postal Code is required.";
    } else {
      errorMessage.textContent = ""; // Clear error message on valid input
    }
  });

//DateOfBirth
const input = document.getElementById("dateofbirth");
const errorElem = document.getElementById("dateofbirth-error-message");

input.addEventListener("input", function (event) {
  validateDateOfBirth();
});

function validateDateOfBirth() {
  const inputValue = input.value.trim();

  // Check if the input is not empty
  if (inputValue === "") {
    errorElem.textContent = "Date of birth is required";
    return false;
  }

  // Regular expression to validate date format (YYYY-MM-DD)
  const datePattern = /^\d{4}-\d{2}-\d{2}$/;

  // Check if the input matches the date pattern
  if (!datePattern.test(inputValue)) {
    errorElem.textContent = "Please enter a valid date format (YYYY-MM-DD)";
    return false;
  }

  // Optional: Additional validation such as checking if the date is realistic (e.g., not in the future)

  // Calculate age based on input date of birth
  const birthDate = new Date(inputValue);
  const today = new Date();
  const age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  // Check if birth date hasn't occurred yet this year (adjust age calculation)
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  // Check age limits (between 18 to 125 years)
  if (age < 18 || age > 125) {
    errorElem.textContent = "Age must be between 18 and 125 years";
    return false;
  }

  // Clear any previous error message
  errorElem.textContent = "";

  return true;
}

document
  .getElementById("dateofbirth")
  .addEventListener("blur", function (event) {
    const input = event.target.value;
    const errorMessage = document.getElementById("dateofbirth-error-message");

    if (input.length === 0) {
      errorMessage.textContent = "Date Of Birth is required.";
    }
  });

//SSN
const ssnInput = document.getElementById("ssn");
// Get the error message element
const errorMessage = document.getElementById("ssn-error-message");

// Event listener for input changes
ssnInput.addEventListener("input", function () {
  let ssnValue = ssnInput.value.trim();

  // Remove any non-digit characters from the input
  ssnValue = ssnValue.replace(/\D/g, "");

  // Limit input to exactly 4 digits
  ssnValue = ssnValue.slice(0, 4); // Take only the first 4 characters

  // Update the input value
  ssnInput.value = ssnValue;

  // Validate the input
  if (ssnValue.length !== 4) {
    errorMessage.textContent = "Please enter a valid 4-digit number.";
  } else {
    errorMessage.textContent = "";
  }
});

document.getElementById("ssn").addEventListener("blur", function (event) {
  const input = event.target.value;
  const errorMessage = document.getElementById("ssn-error-message");

  if (input.length === 0) {
    errorMessage.textContent = "SSN is required.";
  }
});

//state
document.getElementById("State").addEventListener("blur", function (event) {
  const input = event.target.value;
  const errorMessage = document.getElementById("State-error-message");

  if (input.length === 0) {
    errorMessage.textContent = "This field is required.";
  }
});

//BusinessName
const businessNameInput = document.getElementById("businessname");
const businessNameErrorMessage = document.getElementById(
  "businessname-error-message"
);

businessNameInput.addEventListener("input", () => {
  const inputValue = businessNameInput.value;
  const cleanedValue = inputValue.replace(/[^A-Za-z\s]/g, ""); // Remove non-alphabet characters except space

  if (inputValue !== cleanedValue) {
    businessNameInput.value = cleanedValue; // Update the input value
    businessNameErrorMessage.textContent =
      "Only alphabets and spaces are allowed.";
  } else if (cleanedValue.length > 255) {
    businessNameInput.value = cleanedValue.slice(0, 255); // Limit to 255 characters
    businessNameErrorMessage.textContent =
      "Business name should not exceed 255 characters.";
  } else {
    businessNameErrorMessage.textContent = "";
  }
});

businessNameInput.addEventListener("blur", (event) => {
  const input = event.target.value;
  const errorMessage = document.getElementById("businessname-error-message");

  if (input.length === 0) {
    errorMessage.textContent = "Business Name is required.";
  }
});

//DoingBusinessAs
const DoingBusinessAsInput = document.getElementById("DoingBusinessAs");
const DoingBusinessAsErrorMessage = document.getElementById(
  "businessname-error-message"
);

DoingBusinessAsInput.addEventListener("input", () => {
  const inputValue = DoingBusinessAsInput.value;
  const cleanedValue = inputValue.replace(/[^A-Za-z]/g, ""); // Remove non-alphabet characters

  if (inputValue !== cleanedValue) {
    DoingBusinessAsInput.value = cleanedValue; // Update the input value
    DoingBusinessAsErrorMessage.textContent = "Only alphabets are allowed.";
  } else if (cleanedValue.length > 255) {
    DoingBusinessAsInput.value = cleanedValue.slice(0, 255); // Limit to 255 characters
    DoingBusinessAsErrorMessage.textContent =
      "should not exceed 255 characters.";
  } else {
    DoingBusinessAsErrorMessage.textContent = "";
  }
});

//EIN
document.getElementById("ein").addEventListener("input", function () {
  let einInput = this;
  let errorMessage = document.getElementById("ein-error-message");
  let einValue = einInput.value;

  // Remove all non-digit characters
  einValue = einValue
    .split("")
    .filter((char) => /\d/.test(char))
    .join("");

  if (einValue.length > 9) {
    einValue = einValue.substring(0, 9);
  }

  einInput.value = einValue;

  // Check if the EIN is exactly 9 digits long
  if (einValue.length !== 9) {
    errorMessage.textContent = "EIN must be exactly 9 digits.";
  } else {
    errorMessage.textContent = "";
  }
});

document.getElementById("ein").addEventListener("blur", function (event) {
  const input = event.target.value;
  const errorMessage = document.getElementById("ein-error-message");

  if (input.length === 0) {
    errorMessage.textContent = "EIN is required.";
  }
});

//website

document.getElementById("website").addEventListener("input", function () {
  const websiteInput = document.getElementById("website").value;
  const errorMessage = document.getElementById("error-message");
  const urlPattern =
    /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}(\/[a-zA-Z0-9-._~:?#[\]@!$&'()+,;%=])?$/;

  if (!urlPattern.test(websiteInput)) {
    errorMessage.textContent = "Please enter a valid website URL.";
  } else {
    errorMessage.textContent = "";
    alert("Valid URL!");
  }
});

//Phone
document.getElementById("Phone").addEventListener("input", function (evt) {
  const phoneInput = evt.target;
  const errorMessage = document.getElementById("Phone-error-message");
  let phoneNumber = phoneInput.value;
  const validChars = "0123456789-";

  // Filter out invalid characters
  let filteredPhoneNumber = "";
  for (let i = 0; i < phoneNumber.length; i++) {
    if (validChars.includes(phoneNumber[i])) {
      filteredPhoneNumber += phoneNumber[i];
    }
  }

  // Remove any extra characters after 10 digits
  const digits = filteredPhoneNumber.replace(/\D/g, "").slice(0, 10);

  // Format the phone number
  let formattedPhoneNumber = digits;
  if (digits.length > 3) {
    formattedPhoneNumber = digits.slice(0, 3) + "-" + digits.slice(3);
  }
  if (digits.length > 6) {
    formattedPhoneNumber =
      formattedPhoneNumber.slice(0, 7) + "-" + digits.slice(6, 10);
  }

  // Update the input value
  phoneInput.value = formattedPhoneNumber;

  // Validate the phone number format
  const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;

  if (formattedPhoneNumber === "") {
    errorMessage.textContent = "";
    phoneInput.style.borderColor = "";
  } else if (!phoneRegex.test(formattedPhoneNumber)) {
    errorMessage.textContent =
      "Please enter a valid US phone number (e.g., 123-456-7890).";
    phoneInput.style.borderColor = "red";
  } else {
    errorMessage.textContent = "";
    phoneInput.style.borderColor = "";
  }
});

document.getElementById("Phone").addEventListener("blur", function (event) {
  const input = event.target.value;
  const errorMessage = document.getElementById("Phone-error-message");

  if (input.length === 0) {
    errorMessage.textContent = "Phone Number is required.";
  }
});
