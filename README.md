# project3-itinerario :)



### User Signup/Login

| METHOD | ENDPOINT          | TOKEN | ROLE  | DESCRIPTION        | POST PARAMS                                                                                                         | RETURNS                |
|--------|-------------------|-------|-------|--------------------|---------------------------------------------------------------------------------------------------------------------|------------------------|
| POST   | /auth/signup      | -     | user  | User Signup        | `DNI`, `name`, `last_name`, `password`, `role`, `committee`, `contact_number`, `category`, `email`                  | { token: `token` }     |
| POST   | /auth/login       | -     | user  | User Login         | `DNI`, `password`                                                                                                   | { token: `token` }     |

