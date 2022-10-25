---
id: api-design-rationale
title: REST API Design Rationale
sidebar_label: REST API Design Rationale
---

## Why REST API

The REST API is an important component of our system. It separates the user interface from the data storage. The separation makes it easier to have our front end and back end on different servers (this is not a requirement of our system, but having the REST API provides this flexibility). Meanwhile, it also allows other third-party applications to make use of the data from our database in their development. Every application will take place independently without affecting others. Moreover, it doesn't matter which language third-party developers are using. They can have Python, Java, PHP and they can use our service in the same way. Also thanks to the separation, when we eventually start developing and implementing the system, we can have different development groups working on different ends without much difficulty.

## Why DAO

Our REST API will use Object Oriented architectural style, be implemented in Java, and follow DAO (Data Access Object) design pattern.

As described in the high-level design section, DAO abstracts and encapsulates all data related operations in one layer (data access layer). DAOs are the only objects that directly interact with the database. Therefore, if the structure of our database changes, the influences will be limited in the methods implemented within the DAO classes. For example, at the beginning of our system development, we only have less than 10 breeds for cat, such as domestic shorthair and domestic longhair, which are the most common in shelters. So we have breed as an attribute in the pet table. However, when we find out there are much more than we thought, we move this information to a separate table. This change will only affect the methods implemented in PetDAO class. As long as the logic stays the same, a cat has a breed in this case, all clients as well as all other parts of the REST API does not need to know anything about this change.

Moreover, this separation follows “single responsibility principle”. The principle states that one part, or one class, of a system should be responsible for just one single functionality of that system. The responsibility should be entirely encapsulated in the responsible class and should not spread out in other classes.

Another good practice, for object oriented programming, DAO design pattern follows is “coding to the interface”. DAO pattern is based on interface. Other parts of the REST API focuses on what does each DAO does, instead of how it does it. The implementation is free to change within DAO classes as long as they provide the same functionality. This loosens the coupling between each component and prepare us better for changes in the future.

One more thing to mention is that DAO pattern allows the JUnit tests to run faster. Because the data access is all encapsulated in DAO classes, sample data, or mock data, can be used in testing. This helps avoid actually connecting to database to run tests. This enables the tests to run in case of a database connectivity problem. Also this shrinks the range to check when a bug is found. Because we are not using the database, we only need to check our code.

In summary, the separation of responsibility and the loosely coupling relationship are the biggest advantages of DAO pattern. As the user requirements may constantly change and technology continues evolving, this feature will help our system to handle changes easily.
