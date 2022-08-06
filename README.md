# auth-system
Authentication system zuri NodeJs task

###  API for all routes

*POST* `/register`
***Registration as admin***![reg_as_admin](https://user-images.githubusercontent.com/68706446/183263610-b33adaeb-d070-4c20-beae-fdbad22b95d7.png)

*POST* `/register`
***Registration as default user***![reg_asUser_default](https://user-images.githubusercontent.com/68706446/183263665-357ff589-d40b-4f19-ab80-731fdcc2450f.png)

*GET* `/user`
***User route without Authentication***![nonAuth_user](https://user-images.githubusercontent.com/68706446/183263761-58fe10cc-21d0-4d7e-b07f-2c6886a9c4b4.png)

*POST* `/login`
***Login as User - (default role)***![user_login](https://user-images.githubusercontent.com/68706446/183263903-2bd80c5b-f9d4-4f92-8f53-55853b76f6a8.png)

*GET* `/user`
***User route after Authentication (logging in)***![authorized_user](https://user-images.githubusercontent.com/68706446/183263984-af7ac874-5e23-43c4-ac0a-714e3840ab00.png)

*GET* `/staff`
***Protected Staff route (current role: user)***![res_staff_route](https://user-images.githubusercontent.com/68706446/183264079-6530e468-aa67-4a65-b5be-0e5d5e6d847b.png)

*GET* `/manager`
***Protected Manager route (current role: user)***![res_man_route](https://user-images.githubusercontent.com/68706446/183264137-e1ce0a72-8e0d-47e1-a6c8-f91e68805a1c.png)

*GET* `/admin`
***Protected Admin route (current role: user)***![res_admin_route](https://user-images.githubusercontent.com/68706446/183264160-33d37b74-22d7-448b-a778-a670ae58164f.png)

*GET* `/logout`
***Logout route (Clears jwt token from the frontend)***![logout_route](https://user-images.githubusercontent.com/68706446/183264218-a4a445c6-b115-4e3d-ae8f-c21c8cddaeae.png)

*POST* `/password-recovery`
***Password recovery route (post email)***![pass_rec](https://user-images.githubusercontent.com/68706446/183264279-41fd9159-89f3-479a-9986-e08744e72ed4.png)

***Link sent to the console (or email)***![pass_res_link](https://user-images.githubusercontent.com/68706446/183264326-2bc9ef7f-4b8b-42d5-b43f-c6f76c0eb714.png)

*GET* `/reset-password/:id/:token`
***Message after clicking link (or copying and pasting)***![get_set_pass](https://user-images.githubusercontent.com/68706446/183264411-38c12d72-f9d2-4607-817f-bf714dac03c1.png)

*POST* `/reset-password/:id/:token`
***Set new password and post (old- `esther12` --- new- `12esther`)***![post_pass_res](https://user-images.githubusercontent.com/68706446/183264483-143b2183-72db-494e-b6a5-18f9cb061890.png)

*POST* `/login`
***Login with new password***![new_pass_log](https://user-images.githubusercontent.com/68706446/183264575-4a4fbeea-f1e1-40f4-bffa-256643d1b7e0.png)
