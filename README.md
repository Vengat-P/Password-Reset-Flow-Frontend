# Password reset flow Task Frontend 

## Overview

Create a separate page for register ,login ,forgot password and reset password. by sending mail for reset password change function, and ensure proper routing within a ReactJS application using **ReactJs**, **HTML**,**Bootstrap** And **javascript**.

## Tech Stack

- **ReactJs** and **HTML** for structure
- **Bootstrap** for styling
- **Axios** to Fetch API data
- **react-Toastify** to send messages in frontend(for user friendly)
- **VSCode** for development
- **JavaScript** for applying logics
- **React-Router-dom** for acessing routers(pacakge)

## Logics

- **Routing -**

- create BrowserRouter and wrap below. Second create Routes inside of this all routes are there ("/"-register(user register page) , "/login"-after register users need to login do that registered users directly come to this page, "/forgot-password"- user can send email from here to get a reset password link, "*"-nomatch route (PagenotFound)). 


- **Logics -**
- **Step1** create use state hooks for email,name,password and show password state to store and send to backend.
In handle submit function send our states as a payload to backend by using axios post method. then navigate to login page. after sending datas clear the states. all set value function in form directly getting values from onchange function in form . showpassword state  is used to user can see their password as text by clicking that otherwise it will be hide only for this also same inline function for setShowPassword.

- **Step2** same like register but required only email and password. create use state hooks for email,password and show password state to store and send to backend.In handle submit function send our states as a payload to backend by using axios post method. . after sending datas clear the states. all set value function in form directly getting values from onchange function in form . here also showpassword same function. here we cand add forgot-password link to navigate forgot-password page.

- **Step3** IN forgot password page we need to send our email to get reset password link fro backend. so create only email usestate and pass that directly in axios post method . after sending mail navigate to login page

- **Step4** in reset password page set state for password and showpassword to send new password to backend. to change password we need id and token from backend . in our mail that link has id and token we need desturcutre link by  using useParams method to get id and token from link and pass that id and token in axios post link 



## How to Use

- **step-1 -** you will land register page. enter your valid details and click register then you will navigate to login page. if you are already a user click login at bottom of page you will directly navigate to login page

- **step-2 -** In login page enter your registered email and valid password . then click login once you get a loggedin successfull message from toastify your account is logged in successful. if suppose you forgot your password at that time click forgot password link . that will navigate you to forgot password page.

- **step-3 -** In forgot password page enter your registered email  To get reset password link from backend. once you enter email click send the  you will get email sent successfull message after that you will redirect to login page. you will received reset password link in your registered email.

- **step-4 -** go to your email and click the link. this will navigate you to reset password page. you can directly enter your new password and then click update . now you changed your password. after upadting it will navigate you to login page.

## Features

- Responsive Design
- Clean and Minimalistic Layout
- Routing for separate pages in single page

## Demo

- https://passwordauthreset.netlify.app/

## Authors

- [@ Vengat p](https://github.com/Vengat-P)