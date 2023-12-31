# Mr. Roboger's Neighborhood

#### By Sean Norwood

#### A web application that takes a number from the user and returns a list of values from 0 to the user's inputted number with special substitutions for numbers containing 1, 2, or 3.

## Technologies Used

- HTML5
- CSS3
- JavaScript

## Description

This web application takes a number from the user and generates a list from 0 to the inputted number. It applies a special rule for numbers that contain 1, 2, or 3 - replacing them with "Beep!", "Boop!", and "Won't you be my neighbor?" respectively. The logic follows a hierarchy where 3 is the most important and 1 is the least. This means if a number contains 3, it will be replaced with "Won't you be my neighbor?", regardless of whether it also contains 1 or 2. The same rule applies to 2 over 1.

## Setup/Installation Requirements

- Clone the repository from GitHub
- Open the `index.html` file in your web browser
- Enter a number in the input field and click the submit button to see the output

## Known Bugs

- No known bugs

## License

Please feel free to contribute to the code if you have any improvements or find any issues. If you have any questions or concerns, do not hesitate to contact me.

Copyright (c) 2023 Sean Norwood

## Tests

Describe: numberSubstitution()

Test: "It should return an array with a 0 if the number 0 is inputted"
Code: numberSubstitution(0);
Expected Output: [0]

Test: "It should replace numbers that contain a "1" with 'Beep'"
Code: numberSubstitution(1)
Expected Output: [0,"Beep"]

Test: "It should replace numbers that contain a "2" with 'Boop'"
Code: numberSubstitution(2)
Expected Output: [0, "Beep", "Boop"]

Test: "It should replace numbers that contain a "3" with 'Won't you be my neighbor?'"
Code: numberSubstitution(3)
Expected Output: [0, 'Beep!', 'Boop!', "Won't you be my neighbor?"]

Test: "It should maintain the hierarchy of the rules"
Code: numberSubstitution(14)
Expected Output: [0, 'Beep!', 'Boop!', "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, 'Beep!', 'Beep!', 'Boop!', "Won't you be my neighbor?", 'Beep!']
