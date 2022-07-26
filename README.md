# JavaScript: Password Generator

This application generates a random password based on user-selected criteria. The app runs in the browser and features dynamically updated HTML and CSS powered by JavaScript code. It has a clean and polished user interface and is responsive, which ensures that it adapts to multiple screen sizes.

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```
This password generator complies with the described acceptance criteria.
The user has to select the length (between 8 and 128 characters), as well as the required type of characters. Once the selection is made, the password is displayed in the webpage.


## Links to the Webpage and the Repository:

[Password Website](https://alexjcturbo.github.io/password-generator/)

[GitHub Repository](https://github.com/AlexJCturbo/password-generator)


## Screenshot of the Website

The application requests the user to set the password's length between 8 and 128 characters.
![Prompt for length of the password](./assets/images/password01_length.jpg)


The application sends an alert in case the password length is too short or too long.
![Alert that the password is too long](./assets/images/password02_length.jpg)


The application asks the user for the type of characters (upper case, lower case, number and special characters) that will be used to create the password.
![Alert that the password is too long](./assets/images/password03_type_characters.jpg)


The following image shows the output of the application using the four types of characters.
![Alert that the password is too long](./assets/images/password04_generated.jpg)


In the next image, the output of the application uses only two types of characters.
![Alert that the password is too long](./assets/images/password05_generated.jpg)