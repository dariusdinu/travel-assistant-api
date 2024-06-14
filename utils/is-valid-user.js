import { isValid, parseISO } from 'date-fns';

function isValidUser(user) {
  const { firstName, lastName, emailAddress, birthDate, profilePicture } = user;

  // Regular expressions for validation
  const nameRegex = /^[a-zA-Z\-']+$/; // Allows alphabets, hyphens, and apostrophes
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation
  const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/; // Basic URL validation

  // Validate firstName (if provided)
  if (firstName && !nameRegex.test(firstName)) {
    return false;
  }

  // Validate lastName (if provided)
  if (lastName && !nameRegex.test(lastName)) {
    return false;
  }

  // Validate emailAddress (if provided)
  if (emailAddress && !emailRegex.test(emailAddress)) {
    return false;
  }

  // Validate birthDate (if provided)
  if (birthDate && !isValid(parseISO(birthDate))) {
    return false;
  }

  // Validate profilePicture (if provided)
  if (profilePicture && !urlRegex.test(profilePicture)) {
    return false;
  }

  // All fields are valid
  return true;
}

export default isValidUser;
