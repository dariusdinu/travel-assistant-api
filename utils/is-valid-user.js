import { isValid, parseISO } from 'date-fns';

function isValidUser(firstName, lastName, emailAddress, birthDate) {
  // Regular expressions for validation
  const nameRegex = /^[a-zA-Z\-']+$/; // Allows alphabets, hyphens, and apostrophes
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation

  // Validate firstName
  if (!firstName || !nameRegex.test(firstName)) {
    return false;
  }

  // Validate lastName
  if (!lastName || !nameRegex.test(lastName)) {
    return false;
  }

  // Validate emailAddress
  if (!emailAddress || !emailRegex.test(emailAddress)) {
    return false;
  }

  // Validate birthDate
  if (!birthDate || !isValid(parseISO(birthDate))) {
    return false;
  }

  // All fields are valid
  return true;
}

export default isValidUser;
