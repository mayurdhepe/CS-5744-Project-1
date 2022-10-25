---
id: system-architecture-rationale
title: System Architecture Rationale
sidebar_label: System Architecture Rationale
---

Throughout this documentation we have stated or hinted at some of the rationale behind a lot of the design decisions. At the highest level we have three major concerns: data the system needs to track and store, business logic, and an interface to the system. This is a clear pattern for a layered architecture. By using a layered or three-tier architecture we gain the following benefits:

- Proven architecture for modern web applications.
- Distinct layers make future expansion easier. (i.e. multiple front-end applications may make use of the same REST API)
- Code separation for easier development and maintenance.
- Components may scale independently.
