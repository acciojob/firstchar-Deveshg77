function firstChar(text) {
  // your code here
	var trimmedText = text.trim();

  // Check if the trimmed string is empty
  if (trimmedText.length === 0) {
    return "";
  } else {
    // Return the first character of the trimmed string
    return trimmedText[0];
  }
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
