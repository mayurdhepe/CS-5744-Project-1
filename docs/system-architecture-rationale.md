---
id: system-architecture-rationale
title: System Architecture Rationale
sidebar_label: System Architecture Rationale
---


Provided below are the key design decisions, derived from the functional and nonfunctional requirements that we use as evaluation criteria for our architecture. We explain in detail how each of them relate to the requirements and how the architecture chosen aims to achieve these design decisions in the best possible way.

## Evaluation criteria/ key design decisions - 

### Ability to sync with university’s authentication systems/APIs

This caters to requirements FR1 and FR2. We require that the users are able to register and be authenticated by the university systems and then be able to login to use the app. We achieve this in our architecture by the layered approach where the authentication and authorization are controlled by specific REST APIs in the application layer.


### Ability to integrate with third party authentication methods like gmail, facebook etc

This design decision also relates to FR1 and FR2 requirements. This also caters to NR7 where we require the system to be decoupled and easily interact with third party systems like google authentication or facebook authentication. This is achieved in our design by separating the presentation and the application layers where we handle the separate authentication methods and routes based on the request from the presentation layer.

### Ability to extend authentication systems/APIs to more universities 

This design decision stems from the need to make FR1 and FR2 easily interoperable and modifiable for when the product needs to extend the authentication system to more universities. This is achieved in the architecture by decoupling authentication service from other services in the application layer and by designing separate APIs for each university’s authentication request for redirecting to required external university authentication APIs.


### Fast password encryption and decryption

This relates to FR3 where we require secure password encryption and decryption. This is achieved by using load balancers to distribute password validation requests optimally across servers in the application layer. This is also supported in the data layer by using database sharding where we distribute the user data across multiple data shards and read/write from/to the shards using a hashing/sharding algorithm. This could help distribute user data across database servers and all operations would only be performed on the shard the user is present in, instead of on the entire data.

### Fast and real-time driver search

This design decision relates to FR4 where riders can search and see all available drivers. This is achieved in our architecture by creating a separate rider availability service that responds to all rider availability requests. This is also helped by using geographically placed data centers that cater to closest regions. Intelligent caching by identifying available drivers and placing them in cache can help speed up driver search.

### Ability to expand search with added search specifications( distance, prices, only VT drivers etc)

This design decision stems from FR4 where the riders are able to search for nearby drivers based on distance and other parameters. Our architecture allows for expanding to more advanced searches by separating the data and application layer. Thus allowing the data layer to scale independently and horizontally with increasing attributes of ride data. Caching currently available rides helps access these rides faster when searching.


### Support for faster notification system when ride requested/canceled

This design decision caters to FR5 where riders need to be notified on status of rides. Notification system is made reliable and faster by creating a separate notification service in the application layer. Notifications are also improved in speed by using a  load balancer to distribute notification requirements across web servers and by using a message queue to allow multiple workers to process notifications.


### Ability to expand notification service to include more events in future
This criteria comes from NR1 which requires the system to be scalable to increasing demand.
We are able to achieve this by creating a separate notification service to handle notifications in the application layer. This is also achieved by using messaging queues to increase or decrease the number of workers needed to process messages in the queue based on demand.

### Support for switching third party location APIs used

FR6,FR7,NR7
This criteria stems from FR6 ,FR7 and NR7 that require real time location updates in the app and ability to obtain location information from external systems and to be able to switch third party location APIs accessed if needed. This is achieved by using a separate location service that connects to external APIs to obtain location information to pass on to the presentation layer. The location service would be decoupled from the external service it interacts with to allow for each modification in future.

### Ability to expand/improve ETA calculation based on more external data( current traffic data) or changing data statistics results(analysis of historical data)

This design decision is related to FR7 where the location and ETA should be constantly updated for the riders. This is achieved in the architecture by using a separate location service in the application layer to handle everything related to location service and by keeping it well connected and synchronized with rider availability service. The REST APIs of each service interact with each other and with external location APIs with the help of messaging queues to optimize and speed up processing time.

### Support to expand ride schema to include additional information like ‘number of passengers’, ‘reached within ETA’ etc

This is related to FR8 and NR9. This can be achieved in our architecture by the separation of the data layer from other layers for independent scaling when need for data storage servers increases. We can horizontally scale by adding more database servers to handle increased data size without affecting performance.


### Faster SMS/Email dispatch or ability to queue SMS/Email for later dispatch if SMS/Email cannot be sent immediately( due to network failure, high number of SMS requested etc)

This is related to FR9 where SMS/Email should be sent for required ride status changes. This is achieved by using a separate notification service in the application layer and using messaging queues to allow for concurrent processing of incoming notification requests. Speed can also be achieved by using separate data centers and allocating geographically closes data center to a user and rider. The ride status in the presentation layer can be propagated down till the data layer in order to keep the application and presentation layers stateless so that user load can be redirected to any of the servers(as every server would have access to state) for faster processing.

### Ability to gain faster access to driver details and rider details of the currently ongoing rides.

This is related to FR14,FR15,NR12,NR13 where campus police can search all rides and currently ongoing rides in a fast and reliable manner.
This is achieved by separating the data layer firstly for easier optimization. Secondly, we would be using master slave database separation where the master would be used for write operations(which are less frequent) and the multiple slaves support read operrations( more frequent ). We also implement cache DBs that dynamically update to contain the currently ongoing rides for faster access.

### Ability to integrate with university wallets or credit systems and update user wallets in HokieRide app as well as user wallet/credits in university based on user activity.

FR12
This is related to FR12 where the user can use and connect with a university wallet or credit system. This is achieved in the application layer that can identify incoming requests based on university specific information added in the headers by the presentation layer and appropriately redirect requests to university wallet systems. 

### Ability to scale all real time services to increased number of users in same university and to increased number of universities without affecting speed in the services -

- Ride matching
- Notification service
- Live location and ETA 

This is related to FR5,FR9 AND NR1 where integration with university services should be possible and should be easily extendable with increasing universities or increasing users in a university. This is achieved by using the load balancer to distribute processing requests across servers and by using multiple data centers in different geographical locations. Each data center would have its own cache that prioritizes different data depending on the universities it is closest to. The master slave architecure in the DB allows for increased read/write calls to the DB withou affecintg performance.

### Allow for easy change of university and all university affiliated services  -

- Authentication
- Credits
- Campus police to connect to database

This is related to FR2, FR12 and NR1 where users can access different university services and also easily be able to change universities. This is achieved by using multiple data centers that replicate entire user data. Changing university would lead to change in the university field in the data layer of the user and the separate services (authentication, credits, campus police ) would seamlessly work with updated user data as they would redirect to appropriate university services based on incoming request headers.

### Ability to add a real time two way communication channel between rider and campus police department (like live chat) to access during the ride

This is related to FR13 where a live chat can be enabled between rider and campus police if needed during the ride. This would be possible by having a separate emergency alert service that handles all processes and requests related to emergency services. The messaging queues can be customized to prioritize all messages or requests with an emergency tag over every other request. The application can support faster and seamless chat by using Content delivery network to temporarily render all static content in the app to reduce load from other other services. Having a stateless architecture also helps here as the rider state at the presentation layer is at the data layer and can be accessed by any server thus allowing all servers to be available for the chat.

### Ability to increase/decrease resource usage(increase servers or reduce) based on load and demand

This is related to NR1,NR10 and NR11 to allow for faster search by campus police and seamless emergency and notification related services at scale. This is achieved in the architecture by usage of the load balancer to distribute load across servers, messaging queues to concurrently process requests and increase or decrease processors required based on load in the queue and by the ability to horizontally scale the data layer when required.

### Support for automating user management/permission management system for campus police department(deactivate when employee resigned or add user with permissions to app when new employee joined)

This is related to FR13, FR14 and NR1 which requires efficient emergency handling services that can scale. This is achieved in the architecture by creating a separate campus police application that interacts with the user service in the application layer through the REST APIs. Messaging queues can be set up to listen to data layer changes in campus police databases to automatically update campus police applications as well as rider applications with the changes.


### Ability to modify search algorithms for rides in the ride database to include more parameters or to modify the algorithm itself for faster search.

This is related to FR4, FR5 and NR11 where riders can search for drivers in real time. This is achieved by using the separate rider availability service in the application layer that can be modifiable in its search algorithm.

### Ability to reuse user input validation in multiple places across app - during signup, during login, during user profile editing, during campus police search

This is related to FR2 and FR15 where the users can register themselves on the app and campus police can search for users based on some user identification fields. By separating the presentation layer we allow reusability of components wherever needed. Here the input forms and validation logic can be reused during registration, login and when searching for driver. This logic can also be modified based on university specifications for the fields like university ID character lengths etc.

### Ability to allow user to share live location to campus police before or during the ride

This is related to FR7 and NR14 where live location needs to be updated in real time for riders and drivers and it should be shareable with campus police if needed during the ride. This is achieved by allocating a separate location service that can handle and optimize live location sharing requests. The CDN ensures static content is quickly dispatched to the application to reduce processing time for other components of the app. By allocating closest geographics data centers to the client also speeds up all requests related to location updates.

### Ability to re-purpose more resources to rides that have requested emergency help from campus police . Prioritize these rides in notification, live location tracking and overall network requests.

This design criteria caters to FR14,NR1,N11,NR12 where campus police can access the application and interact with riders during a ride seamlessly during an emergency situation.
This can be achieved by customizing the load balancer to prioritize emergency service related requests over every other request. Use of cache to always have ongoing ride data along with frequently accessed data for faster access. Applications can switch to Content delivery networks for static assets on low priority pages and components of the app and finally messaging queues can also be customized to prioritize all emergency requests, whether it is read operations from DB or search requests or location requests.

### Ability to automatically notify police of suspicious rides that have failed normal network checkpoints for too long or display abnormal activity( like location not changed for too long, well behind ETA for long time, or lacking network pings from rider or driver phones).

This is related to FR13, NR7,NR13 and NR17 where the campus police have access to a web application to check all rides and ongoing rides and respond to emergency requests in real time and reliably. This is achieved in the architecture by using a separate notification service that can subscribe to current ride data stored in cache for faster access. The notification service can be specified to define and identify suspicious activity automatically from the ongoing rides based on the data obtained from cache and connect with emergency service to initiate an emergency request.

### Ability to switch data backup service used and frequency of backups.

NR8,NR9
This is related to NR8 and NR9 which require frequent data backups efficiently and with low cost. This is achieved by using an separate data layer with master slave DB architecture. Since each slave has the same data and as in master, backup can be distributed across the DBs to minmize downtime and increase back up speed. Or one of the slaves can be used for backup while others are fully available and this can be rotated on a daily basis.


### Support for determining resource usage and computation power to allocate for different services during regular usage and ability to set this at different levels for different universities.

NR1,NR11
This design criteria stems from NR1 and NR11 where the application is required to be real time in services like search, location, rider availability and also be scalable without affecting speed of these services. We are able to achieve this by using load balancer, cache and messaging queues to keep the load distributed always across servers and in an optimal manner to be able to increase or decrease resource usage based on demand. 

### Ability to expose APIs to data that can be shared publicly like ride start, end, ride duration, etc in the future.

NR7,NR18
This design criteria is related to NR7 and NR18 which require a highly de coupled system to facilitate ease of interoperability with external systems and to develop all functionalities using APIs so it is decoupled from the type of presentation layer that needs to access it. This is achieved by the layered architecture that separates the presentation layer and the application layer and by using REST APIs in the application layer for all communication. The REST API endpoints can be decided to be made public in which case user authentication would not be required to access them.
