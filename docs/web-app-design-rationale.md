---
id: web-app-design-rationale
title: Web Application Design Rationale
sidebar_label: Web Application Design Rationale
---

By designing the application as a SPA and using react there are a few big benefits.

- We can build and deploy the application to a CDN, which is an immediate boost in loading HTML, JS, and other resources.
- React allows us to build the user-interface in small reusable modules.
- A single programming language.

The alternative to our design would be a more traditional web application where requests are sent to a server, where the pages are built and then sent back to the user. With an approach such as this we would either couple our frontend application with the REST API application or require additional resources to manage the full stack or possibly both. For these reasons, the SPA approach best suits our needs.
