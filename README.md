### Coding challenge 
Your task is to create a user profile page with editing functionality. You need to use React 
framework and create a Component, which produces the following display:
While creating this form, you are allowed to use:
1) Base HTML and CSS
2) Base React components
3) Mantine Framework: https://mantine.dev/
4) Tailwind CSS framework: https://tailwindcss.com/
You can assume that the backend is already set up and you can make requests to receive user 
information. Your endpoint will be “/api/user/self/, which accepts GET and PUT requests. 
Please hardcode the following data as user data for the GET request:

`
{
 "name": "Test",
 "surname": "User",
 "email": "test@user.com",
 "communications": {
 "email": {
 "email": "test@user.com",
 "notifications": true
 },
 "telegram": {
 "chat_id": 1111,
 "notifications": false
 }
 },
}
`
For updating the user information, you would need to make a PUT request with the user 
document in the format as above in JSON.
Technical requirements:
1) Names and email are text fields, for the active text field, border changes color
2) Email field should have validation to check if input is indeed email
3) Communication channels should list arbitrary number of channels as in “communications” 
field of the user document
4) Green tick and Red cross are representing the boolean of the corresponding channel. Then 
should be clickable and change to the opposite symbol. In addition, user document stored in 
memory should also change.
5) Save button should also track the if user made any changes - if no changes have been made, 
the button should be gray color and shouldn’t be clickable.
6) On click on the “Save” button, your application should make a PUT request with updated user 
document in the database. 

## Solution 

![image](https://user-images.githubusercontent.com/84907743/184948095-99c3fb21-acb5-42aa-9780-1d59bd124909.png)

✔ Names and email are text fields, for the active text field, border changes color
✔ Email field should have validation to check if input is indeed email
✔ 2 communication channels
✔ Save button should also track the if user made any changes - if no changes have been made, 
the button should be gray color and shouldn’t be clickable.
!! Not able to complete "On click on the “Save” button, your application should make a PUT request with updated user 
document in the database. "
✔  Used Tailwind CSS and base React Component


