# Microservice Application for Vehicle Speed Offense Management

This document provides a detailed overview of a microservice application designed to manage and automate the process of offenses concerning vehicles following speed overruns detected by automatic radars. The application is implemented using Spring Boot 3 for the backend services and Angular 14 for the frontend.

## System Overview

The system consists of three microservices:

1. Speed Camera Management Service
2. Vehicle Registration Service
3. Offense Management Service

### 1. Speed Camera Management Service

This microservice is responsible for managing speed cameras. Each radar is defined by the following attributes:

- ID
- Maximum speed
- Coordinates (Longitude and Latitude)

#### API Endpoints

- `GET /api/radars`: Retrieve all speed radars
- `GET /api/radars/{id}`: Retrieve a specific speed camera by ID
- `POST /api/radars`: Add a new speed camera
- `PUT /api/radars/{id}`: Update an existing speed camera
- `DELETE /api/radars/{id}`: Delete a speed camera

### 2. Vehicle Registration Service

This microservice manages vehicles and their owners. Each vehicle belongs to a single owner. An owner is defined by the following attributes:

- ID
- Name
- Date of birth
- Email

A vehicle is defined by the following attributes:

- ID
- Registration number
- Brand
- Tax power
- Model

#### API Endpoints

- `GET /api/owners`: Retrieve all owners
- `GET /api/owners/{id}`: Retrieve a specific owner by ID
- `POST /api/owners`: Add a new owner
- `PUT /api/owners/{id}`: Update an existing owner
- `DELETE /api/owners/{id}`: Delete an owner

- `GET /api/vehicles`: Retrieve all vehicles
- `GET /api/vehicles/{id}`: Retrieve a specific vehicle by ID
- `POST /api/vehicles`: Add a new vehicle
- `PUT /api/vehicles/{id}`: Update an existing vehicle
- `DELETE /api/vehicles/{id}`: Delete a vehicle

### 3. Offense Management Service

This microservice manages offenses. Each offense is defined by the following attributes:

- ID
- Date
- Radar number (that detected the overtaking)
- Vehicle number
- Vehicle speed
- Maximum speed of the radar
- Amount of the offense

#### API Endpoints

- `GET /api/offenses`: Retrieve all offenses
- `GET /api/offenses/{id}`: Retrieve a specific offense by ID
- `POST /api/offenses`: Add a new offense
- `PUT /api/offenses/{id}`: Update an existing offense
- `DELETE /api/offenses/{id}`: Delete an offense
- `POST /api/offenses/ticket`: Post a speeding ticket that will result in an offense
- `GET /api/offenses/owner/{ownerId}`: Retrieve offenses for a specific owner

## Frontend Application

The frontend application is built using Angular 14 and provides a user interface for interacting with the microservices. It includes the following features:

- Dashboard for viewing and managing speed cameras, vehicles, and offenses
- Forms for adding and updating speed cameras, vehicles, and offenses
- Functionality to post a speeding ticket that will result in an offense
- Functionality for an owner to consult their infractions

## Security and Authentication

To ensure the security of the application, authentication and authorization mechanisms should be implemented. This can be achieved using JSON Web Tokens (JWT) or OAuth2, depending on the desired level of security and complexity.

## Deployment

The microservices can be deployed using containerization technologies like Docker and orchestrated using Kubernetes or other container orchestration platforms. This will ensure scalability, fault tolerance, and ease of deployment.

## Monitoring and Logging

To monitor the health and performance of the microservices, tools like Prometheus and Grafana can be used. For logging, a centralized logging solution like ELK Stack (Elasticsearch, Logstash, and Kibana) can be implemented to aggregate and analyze logs from all microservices.

---

![Home]([http://url/to/img.png](https://github.com/abderrahimJK/distributed_System-vehicle_OverSpeed_Detection/blob/main/captures/img.png))

![Infractions](https://github.com/abderrahimJK/distributed_System-vehicle_OverSpeed_Detection/blob/main/captures/img_1.png)

![Infraction details](https://github.com/abderrahimJK/distributed_System-vehicle_OverSpeed_Detection/blob/main/captures/img_2.png)

![Ticket](https://github.com/abderrahimJK/distributed_System-vehicle_OverSpeed_Detection/blob/main/captures/img_3.png)

![Oner](https://github.com/abderrahimJK/distributed_System-vehicle_OverSpeed_Detection/blob/main/captures/img_4.png)

![Radar](https://github.com/abderrahimJK/distributed_System-vehicle_OverSpeed_Detection/blob/main/captures/img_5.png)
