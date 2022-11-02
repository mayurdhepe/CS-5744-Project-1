---
id: requirements
title: Requirements
sidebar_label: Requirements
---

The requirements of this software application will be recognized as to cater to the students and faculty, especially at Virginia Tech. The customer of this application will  be the university that is willing to participate with the application built. Although there is scope to expand this application to many universities, in order to keep it as narrow and focused as possible, the customer will be Virginia Tech. The intended user will be the students and faculty that attend Virginia Tech. Since, there is potential for other universities to link up with our product, we will take this into consideration when designing our system. 


## Functional Requirements

- **FR-1** - Students and faculty of Virginia Tech can self-register for an account on the HokieRide app by providing first name, last name, email address, HokieID, and optionally their phone number.
- **FR-2** - In order to use the application, the system must verify all accounts to be identified as Virginia Tech students and faculty.
- **FR-3** - After verification, all users may login with unique credentials (username and password).
- **FR-4** - Riders should be able to search for all nearby available drivers that are heading in the same direction or within a 2 mile radius of the driver’s chosen destination.
- **FR-5** - Riders and drivers should be able to request and cancel a ride if needed.
- **FR-6** - Once a ride is accepted by a driver, riders and driver should be able to see each other’s location and riders should view an estimated time of arrival (ETA) until the trip is completed.
- **FR-7** - The location and ETA should constantly be updated as the driver moves.
- **FR-8** - Drivers should be able to create a ride and specify source, destination and number of riders he/she is able to accommodate in their car.
- **FR-9** - Email and/or SMS notifications should be sent out when the driver has arrived and when the trip has been completed.
- **FR-10** - Riders and drivers should be able to rate each other at the end of the trip.
- **FR-11** - Users should be able to view their history - rides taken and rides offered.
- **FR-12** - System should provide a credit system, agreed upon by Virginia Tech, that accumulates points to be transferred as a deposit into Hokie Wallet or provided as parking spots during weekdays for free.
- **FR-13** - All users will be able to use a “Alert VT Police” button which will send a notification to the campus police department for assistance.
- **FR-14** - The system will provide a web-based application to display an interactive database for the Virginia Tech Campus Police Department.
- **FR-15** - The web-based application will allow officers to look up users by first name and last name, and also HokieID.
- **FR-16** - Search results will show information about the user such as name, email, phone number and picture. Additionally, the user’s ride history, current trip details (if on a trip) which includes start location, destination, car mode, license plate number, and current location will be displayed.
- **FR-17** - Should there be an emergency, the system should send out a notification to the web-based application to alert the police of a potential incident.


## Non-functional Requirements

- **NR-1** - The application should be scalable in order to meet the user demand.
- **NR-2** - Both mobile and web applications should abide by the Web Content Accessibility Guidelines 2.0 (WCAG).
- **NR-3** - Use SSL Certificates with HTTPs for APIs and Web Content Accessibility
- **NR-4** - Use a common package to handle both Cookies and Session maintenance. Initial stage of security is modular.
- **NR-5** - Validate users by email addresses. Send verification email to the user with a clickable link to validate authentication.
- **NR-6** - Use Virginia Tech API(s) to validate active accounts (active students and staff) upon email account verification.
- **NR-7** - Design a highly decoupled system to facilitate connections with external third-party APIs, services and more. 
- **NR-8** - Data backups must be made on a daily basis.
- **NR-9** - Data backup storage containers should be of low cost. Speeds can be reduced to minimum. Only enough for daily traffic updates.  
- **NR-10** - Use MongoDB to store Documents (JSONs). Better storage management of routes taken.
- **NR-11** - Efforts towards obtaining real-time updates on searches, locations, ETAs and other notifications with little-to-no lag.
- **NR-12** -	Prioritize speeds to searching for rides compared to other minor features like fetching ride histories for users.
- **NR-13** - Any and all operations related to security and safety such as emergency notifications, ride searches on web-application, should be quick (< 2 seconds) and seamless.
- **NR-14** -	Store ride availability status details in a separate Database table to increase read writes for the sole purpose of searching for rides. Maximizes speeds by reducing calls made to the database by other features. 
- **NR-15** -	Encrypt all customer data using 1 encryption type. As this data can be set as Confidential.
- **NR-16** -	Encrypt passwords with another stronger encryption type. This is crucial for minimizing password hacks.
- **NR-17** -	Allow for error logs to be made so that maintenance can be done once/twice a week.
- **NR-18** -	Develop all functionality using APIs as it can be used between all platforms (Browser and Apps). No major in-app/in-browser computing and processing.



