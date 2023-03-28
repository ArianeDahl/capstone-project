export default function validateForm({ userName, message }) {
  if (!userName) {
    alert("Please enter your name.");
    return false;
  }

  if (!message) {
    alert("Please enter a comment.");
  } else if (message.length < 3) {
    alert("Please use more characters.");
    return false;
  }
  return null;
}
