# project3-itinerario :)


### User Signup/Login

| METHOD | ENDPOINT          | TOKEN | ROLE  | DESCRIPTION        | POST PARAMS                                                                                                         | RETURNS                |
|--------|-------------------|-------|-------|--------------------|---------------------------------------------------------------------------------------------------------------------|------------------------|
| POST   | /auth/signup      | -     | user  | User Signup        | `DNI`, `name`, `last_name`, `password`, `role`, `contact_number`, `category`, `email`                               | { token: `token` }     |
| POST   | /auth/login       | -     | user  | User Login         | `DNI`, `password`                                                                                                   | { token: `token` }     |

### User Endpoints

| METHOD | ENDPOINT           | TOKEN | ROLE  | DESCRIPTION               | POST PARAMS                                                                                                         | RETURNS                           |
|--------|--------------------|-------|-------|---------------------------|---------------------------------------------------------------------------------------------------------------------|-----------------------------------|
| GET    | /user              | YES   | admin | Get All Users             | `query params`                                                                                                      | [{user}]                          |
| GET    | /user/profile      | YES   | user  | Get Own Profile           |                                                                                                                     | {user}                            |
| GET    | /user/:userId      | YES   | admin | Get One User              |                                                                                                                     | {user}                            |
| POST   | /user              | YES   | admin | Create one User           | `DNI`, `name`, `last_name`, `password`, `role`, `committee`, `contact_number`, `category`, `email`                  | {user}                            |
| PUT    | /user/profile      | YES   | user  | Update own profile        | `DNI`, `name`, `last_name`, `password`, `role`, `committee`, `contact_number`, `category`, `email`                  | {message: 'Profile updated'}       |
| PUT    | /user/password     | YES   | user  | Reset password            | `newPassword`, `repeatPassword`                                                                                     | { message: 'Password updated' }   |
| PUT    | /user/:userId      | YES   | admin | Update one user           | `DNI`, `name`, `last_name`, `password`, `role`, `committee`, `contact_number`, `category`, `email`                  | {message: 'User updated'}         |
| DELETE | /user/:userId      | YES   | admin | Delete one user           |                                                                                                                     | {message: 'User deleted'}         |
| DELETE | /user/profile      | YES   | user  | Delete own profile        |                                                                                                                     | {message: 'Profile deleted'}       |
