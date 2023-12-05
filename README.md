# project3-itinerario :)

![database](https://github.com/nextokoi/project3-itinerario/assets/85761293/d1889c57-bdbd-459a-9ca0-e2d3e042d6b8)

### User Signup/Login

| METHOD | ENDPOINT          | TOKEN | ROLE  | DESCRIPTION        | POST PARAMS                                                                                                         | RETURNS                |
|--------|-------------------|-------|-------|--------------------|---------------------------------------------------------------------------------------------------------------------|------------------------|
| POST   | /auth/signup      | -     | user  | User Signup        |   `userName`, `password`, `role`, `email`                                                      | { token: `token` }     |
| POST   | /auth/login       | -     | user  | User Login         |   (`userName`|| `email`), `password`                                                                               | { token: `token` }     |

### User Endpoints

| METHOD | ENDPOINT           | TOKEN | ROLE  | DESCRIPTION               | POST PARAMS                                                                                                         | RETURNS                           |
|--------|--------------------|-------|-------|---------------------------|---------------------------------------------------------------------------------------------------------------------|-----------------------------------|
| GET    | /user              | YES   | admin | Get All Users             | `query params`                                                                                                      | [{user}]                          |
| GET    | /user/profile      | YES   | user  | Get Own Profile           |                                                                                                                     | {user}                            
| GET    | /user/:userId      | YES   | admin | Get One User              |                                                                                                                     | {user}                            |
| POST   | /user              | YES   | admin | Create one User           |  `userName`, `password`, `role`, `email`                                                                            | {user}                            |
| PUT    | /user/profile      | YES   | user  | Update own profile        |  `userName`,  `role`, `email`                                                                                       | {message: 'Profile updated'}      |
| PUT    | /user/password     | YES   | user  | Reset password            |  `newPassword`, `repeatPassword`                                                                                    | { message: 'Password updated' }   |
| PUT    | /user/:userId      | YES   | admin | Update one user           |  `userName`, `password`, `role`, `email`                                                                            | {message: 'User updated'}         |
| DELETE | /user/:userId      | YES   | admin | Delete one user           |                                                                                                                     | {message: 'User deleted'}         |
| DELETE | /user/profile      | YES   | user  | Delete own profile        |                                                                                                                     | {message: 'Profile deleted'}      |

### Flight Endpoints

| METHOD | ENDPOINT                           | TOKEN | ROLE  | DESCRIPTION                 | POST PARAMS                                     | RETURNS                        |
|--------|------------------------------------|-------|-------|-----------------------------|-------------------------------------------------|--------------------------------|
| GET    | /flight                            | YES   | user  | Get All flights             | `query params`                                  | [{flight}]                       |
| GET    | /flight/:flightId                  | YES   | user  | Get One flight              |                                                 | {flight}                         |
| POST   | /flight                            | YES   | admin | Create One flight           | `club_Name`,`player_sheets`, `coach`, `location`, `sending_off`  | {flight}                |
| PUT    | /flight/:flightId                  | YES   | admin | Update One flight              | `club_Name`,`player_sheets`, `coach`, `location`, `sending_off`  | {message: 'Flight updated'} |
| DELETE | /flight/:flightId                  | YES   | admin | Delete one flight              |                                                 | {message: 'flight deleted'}    |


### TravelPlan Endpoints

| METHOD | ENDPOINT                           | TOKEN | ROLE  | DESCRIPTION                 | POST PARAMS                                     | RETURNS                        |
|--------|------------------------------------|-------|-------|-----------------------------|-------------------------------------------------|--------------------------------|
| GET    | /travelPlan                              | YES   | user  | Get All travelPlans               | `query params`                                  | [{travelPlan}]                       |
| GET    | /travelPlan/:travelPlanId                      | YES   | user  | Get One travelPlan          |                                                 | {travelPlan}                         |
| POST   | /travelPlan                              | YES   | admin | Create One travelPlan             | `name`,`begining_date`, `ending_date`, `location`, `sending_off`  | {travelPlan}                |
| PUT    | /travelPlan/:travelPlanId                      | YES   | admin | Update One travelPlan       | `club_Name`,`player_sheets`, `coach`, `location`, `sending_off`  | {message: 'Travel Plan updated'} |
| DELETE | /travelPlan/:travelPlanId                      | YES   | admin | Delete one travelPlan              |                                                 | {message: 'Travel Plan deleted'}    |

### Activity Endpoints

| METHOD | ENDPOINT                           | TOKEN | ROLE  | DESCRIPTION                 | POST PARAMS                                     | RETURNS                        |
|--------|------------------------------------|-------|-------|-----------------------------|-------------------------------------------------|--------------------------------|
| GET    | /travelPlan                              | YES   | user  | Get All travelPlans               | `query params`                                  | [{travelPlan}]                       |
| GET    | /travelPlan/:travelPlanId                      | YES   | user  | Get One travelPlan                |                                                 | {travelPlan}                         |
| POST   | /travelPlan                              | YES   | admin | Create One travelPlan              | `club_Name`,`player_sheets`, `coach`, `location`, `sending_off`  | {travelPlan}                |
| PUT    | /travelPlan/:travelPlanId                      | YES   | admin | Update One travelPlan              | `club_Name`,`player_sheets`, `coach`, `location`, `sending_off`  | {message: 'Travel Plan updated'} |
| DELETE | /travelPlan/:travelPlanId                      | YES   | admin | Delete one travelPlan              |                                                 | {message: 'Travel Plan deleted'}    |

