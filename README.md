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

### Flight Endpoints

| METHOD | ENDPOINT                           | TOKEN | ROLE  | DESCRIPTION                 | POST PARAMS                                     | RETURNS                        |
|--------|------------------------------------|-------|-------|-----------------------------|-------------------------------------------------|--------------------------------|
| GET    | /flight                              | YES   | user  | Get All flights               | `query params`                                  | [{team}]                       |
| GET    | /flight/:flightId                      | YES   | user  | Get One flight                |                                                 | {team}                         |
| POST   | /flight                              | YES   | admin | Create One flight              | `club_Name`,`player_sheets`, `coach`, `location`, `sending_off`  | {team}                |
| PUT    | /flight/:flightId                      | YES   | admin | Update One flight              | `club_Name`,`player_sheets`, `coach`, `location`, `sending_off`  | {message: 'Team updated'} |
| DELETE | /flight/:flightId                      | YES   | admin | Delete one flight              |                                                 | {message: 'Team deleted'}    |

