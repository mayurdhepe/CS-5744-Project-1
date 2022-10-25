---
id: requirements
title: Requirements
sidebar_label: Requirements
---

As we consider multiple use cases of this system it is apparent the scope of the system can easily expand if allowed. For example, the system can be expanded to provide a catalog and search feature for adoptable pets, a bulletin board for lost and found pets, or clinic management features for veterinarians. We will try to keep the scope as narrow as possible by focusing only on the storage and access of pet medical records and home history through a web application. At the same time it is important to recognize the areas in which the system may expand. This will assist in designing a system that not only meets the initial requirements but may be easily built on to meet future requirements.

## Functional Requirements

- **FR-1** - Pet owners (Personal Users) may self-register for an account.
- **FR-2** - Veterinarian office and adoption clinic owners/administrators (Business Users) may request business accounts.
- **FR-3** - Business users may create additional accounts for employees.
- **FR-4** - Business users may manage roles/permissions for employee accounts.
- **FR-5** - All users may login to the system using a unique username and password.
- **FR-6** - Business users and employees may create or modify medical records for pets in the system.
- **FR-7** - Personal users may upload supporting documentation for their pets (e.g. scanned or electronic copies of medical services).
- **FR-8** - Personal users may update/modify non-medical information of pets.
- **FR-9** - Any user may pass ownership of an owned pet to any other user.
- **FR-10** - Personal users may opt in/out sharing contact info to other owners if pet is passed.
- **FR-11** - System should notify pet owners of missing or incomplete medical or personal (e.g. vaccines not up-to-date).

## Non-functional Requirements

- **NR-1** - The application interface should meet or exceed level AA conformance of the [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG21/).
- **NR-2** - The full application stack should be cloud compatible.
- **NR-3** - The full application stack should autoscale to meet user demand.
- **NR-4** - The application should be available 99.99% of the time (“four nines”).
- **NR-5** - All web pages should load in under two seconds.
- **NR-6** - All web traffic should be encrypted using Transport Layer Security (TLS).
- **NR-7** - Appropriate measures should be taken to ensure data servers are secured.
- **NR-8** - Data backups should be created daily (minimum).
- **NR-9** - Data backups should be securely stored separately NRom data servers.
- **NR-10** - A private REST API should be available for third-party, desktop, or mobile application integration.
- **NR-11** - Access to all data should take a least privilege approach.

