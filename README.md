# project3-itinerario

### Overview

This project will be about travel itinerary management, where the user will be able to organize every aspect of their trip in an easy and organized manner.

### User Profiles

- **Admin**: This is a full access role. Admin can create, update and delete different users, flights, travel plans, activity, travel location and travel days.
- **User**: Users can obtain information from each table and manage their profile. 

### Tables

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
| POST   | /user              | YES   | admin | Create one User           |  `username`, `password`, `role`, `email`                                                                            | {user}                            |
| PUT    | /user/profile      | YES   | user  | Update own profile        |  `username`,  `role`, `email`                                                                                       | {message: 'Profile updated'}      |
| PUT    | /user/password     | YES   | user  | Reset password            |  `newPassword`, `repeatPassword`                                                                                    | { message: 'Password updated' }   |
| PUT    | /user/:userId      | YES   | admin | Update one user           |  `username`, `password`, `role`, `email`                                                                            | {message: 'User updated'}         |
| DELETE | /user/:userId      | YES   | admin | Delete one user           |                                                                                                                     | {message: 'User deleted'}         |
| DELETE | /user/profile      | YES   | user  | Delete own profile        |                                                                                                                     | {message: 'Profile deleted'}      |


### Flight Endpoints

| METHOD | ENDPOINT                           | TOKEN | ROLE  | DESCRIPTION                 | POST PARAMS                                     | RETURNS                        |
|--------|------------------------------------|-------|-------|-----------------------------|-------------------------------------------------|--------------------------------|
| GET    | /flight                            | YES   | user  | Get All flights             | `query params`                                  | [{flight}]                       |
| GET    | /flight/:flightId                  | YES   | user  | Get One flight              |                                                 | {flight}                         |
| POST   | /flight                            | YES   | admin | Create One flight           | `flight_num`,`airline`, `origin`, `depart_date`, `distance`, `duration`, `trip_class`, `price`   | {flight}                |
| PUT    | /flight/:flightId                  | YES   | admin | Update One flight              | `flight_num`,`airline`, `origin`, `depart_date`, `distance`, `duration`, `trip_class`, `price`, `travel_location_id`  | {message: 'Flight updated'} |
| DELETE | /flight/:flightId                  | YES   | admin | Delete one flight              |                                                 | {message: 'flight deleted'}    |


### TravelPlanning Endpoints

| METHOD | ENDPOINT                           | TOKEN | ROLE  | DESCRIPTION                 | POST PARAMS                                     | RETURNS                        |
|--------|------------------------------------|-------|-------|-----------------------------|-------------------------------------------------|--------------------------------|
| GET    | /travelPlanning                              | YES   | user  | Get All travelPlannings               | `query params`                                  | [{travelPlanning}]                       |
| GET    | /travelPlanning/:travelPlanId                      | YES   | user  | Get One travelPlanning          |                                                 | {travelPlanning}                         |
| POST   | /travelPlanning                              | YES   | admin | Create One travelPlanning             | `name`,`description`, `beginning_date`, `ending_date`  | {travelPlanning}                |
| PUT    | /travelPlanning/:travelPlanningId                      | YES   | admin | Update One travelPlanning       | `name`,`description`, `beginning_date`, `ending_date`, `flight_going_id`, `flight_return_id`, `travel_location_id`  | {message: 'travel planning updated'} |
| DELETE | /travelPlanning/:travelPlanningId                      | YES   | admin | Delete one travelPlanning              |                                                 | {message: 'travel planning deleted'}    |


### Activity Endpoints

| METHOD | ENDPOINT                           | TOKEN | ROLE  | DESCRIPTION                 | POST PARAMS                                     | RETURNS                        |
|--------|------------------------------------|-------|-------|-----------------------------|-------------------------------------------------|--------------------------------|
| GET    | /activity                              | YES   | user  | Get All activities               | `query params`                                  | [{activity}]                       |
| GET    | /activity/:activityId                      | YES   | user  | Get One activity                |                                                 | {activity}                         |
| POST   | /activity                              | YES   | admin | Create One activity              | `name`,`direction`, `category`, `isActivity`, `rating`, `url`  | {activity}                |
| PUT    | /activity/:activityId                      | YES   | admin | Update One activity              | `name`,`direction`, `category`, `isActivity`, `rating`, `url`, `travel_location_id`  | {message: 'activity updated'} |
| DELETE | /activity/:activityId                      | YES   | admin | Delete one activity              |                                                 | {message: 'activity deleted'}    |


### TravelLocation Endpoints

| METHOD | ENDPOINT                           | TOKEN | ROLE  | DESCRIPTION                 | POST PARAMS                                     | RETURNS                        |
|--------|------------------------------------|-------|-------|-----------------------------|-------------------------------------------------|--------------------------------|
| GET    | /travelLocation                              | YES   | user  | Get All travelLocations               | `query params`                                  | [{travelLocation}]                       |
| GET    | /travelLocation/:travelLocationId                      | YES   | user  | Get One travelLocation                |                                                 | {travelLocation}                         |
| POST   | /travelLocation                              | YES   | admin | Create One travelLocation              | `name`,`country`  | {travelLocation}                |
| PUT    | /travelLocation/:travelLocationId                      | YES   | admin | Update One travelLocation              | `name`,`country` | {message: 'travel location updated'} |
| DELETE | /travelLocation/:travelLocationId                      | YES   | admin | Delete one travelLocation              |                                                 | {message: 'travel location deleted'}    |


### TravelDays Endpoints

| METHOD | ENDPOINT                           | TOKEN | ROLE  | DESCRIPTION                 | POST PARAMS                                     | RETURNS                        |
|--------|------------------------------------|-------|-------|-----------------------------|-------------------------------------------------|--------------------------------|
| GET    | /travelDay                              | YES   | user  | Get All travelDays               | `query params`                                  | [{travelDay}]                       |
| GET    | /travelDay/:travelDayId                      | YES   | user  | Get One travelDay                |                                                 | {travelDay}                         |
| POST   | /travelDay                              | YES   | admin | Create One travelDay              | `date`  | {travelDay}                |
| PUT    | /travelDay/:travelDayId                      | YES   | admin | Update One travelDay              | `date`,`travel_planning_id`, `activity_id` | {message: 'travel day updated'} |
| DELETE | /travelDay/:travelDayId                      | YES   | admin | Delete one travelDay              |                                                 | {message: 'travel day deleted'}    |
