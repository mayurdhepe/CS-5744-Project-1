---
id: conclusion
title: Final Thoughts
sidebar_label: Final Thoughts
---

There is one requirement that we have failed to address thus far, FR-11. Notifications must be sent to users without an external event initiating the process. There are many mechanisms to perform such actions. There is no reason to restrict the system developers from using the mechanism that best suits the project. We can, however, suggest that for any process that needs to be scheduled to run at a defined frequency AWS Lambdas provide the needed functionality. Each process can be coded and configured for AWS Lambdas independently. If we were to include theses processes in the three-tier architecture diagram, they would fall under the application tier.

We have provided enough design within this document to begin development on a pet adoption and medical record system. Most of our decisions have been based on proven approaches to web application development. It is impossible to anticipate all possible problems or flaws in a design. If any unforeseen issues should arise, the separation of concerns will allow for easier changes in the design. If any changes are required, please keep in mind, all design decisions include tradeoffs.
