PERSON API Documentation

Overview
This documentation provides an overview of a Node.js Express API used for managing a collection of "Person" records in a MongoDB database.

Base URL
Base URL for API endpoints: https://stagetwo-w8m5.onrender.com/api/

Endpoints

	CREATE A NEW PERSON

URL: /

Method: POST

Description: Creates a new person.

Request Body: name (string, required): The name of the new person.

Response:201 Created: Person created successfully.
404 Not Found: Person was not created successfully.


    GET PERSON BY ID
URL: /:user_id

Method: GET

Description: Retrieves a person by their unique ID.

Parameters:
user_id (string): The unique identifier of the person.

Response:
200 OK: Person details retrieved successfully.
404 Not Found: Person not found.


    UPDATE PERSON BY ID
URL: /:user_id

Method: PUT

Description: Updates a person's information by their unique ID.

Parameters:
user_id (string): The unique identifier of the person.

Request Body:
name (string, required): The updated name of the person.

Response:
200 OK: Person updated successfully.
404 Not Found: Invalid user ID.


    DELETE PERSON BY ID
URL: /:user_id

Method: DELETE

Description: Deletes a person by their unique ID.

Parameters:
user_id (string): The unique identifier of the person.

Response:
200 OK: Person deleted successfully.
404 Not Found: Invalid user ID.





