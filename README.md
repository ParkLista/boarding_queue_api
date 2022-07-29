# Boarding Queue API
Creating a queue to starting boarding, this prepares a taaxi for a planned trip to the destination. This API simply implements the CRUD aspect of the daily Stage queues made by taxis to board passengers. Many changes are expected to take place as this is a learning project.

## Building Stack
This API is built with NodeJs in mind, laveraging the power of NodeJs Runtime, ExpressJs is used as the core of the endpoints.

## Taxi Properties
To add a taxi into the queue, the following properties must be made available by the taxi owner.
-   stage(destination)
-   createdAt
-   pricing
-   taxi
## Data Storage
The API utilizes the magic of NoSQL database models to persist the data.