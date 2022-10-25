---
id: data-tier-rationale
title: Data Tier Rationale
sidebar_label: Data Tier Rationale
---

## File Storage Design Rationale

Using S3 as our file storage gives us everything we desire with minimal investment. There is no need to develop a custom component for secure file storage and retrieval. S3 provides all the necessary tools to properly configure the file storage. Additionally, separate S3 buckets can be used to store redundant backup copies of files and databases.

- Benefits of S3:
- Easy to use file storage
- Necessary security controls
- Easy backups
- Low-cost
- Scalable

## Database Design Rationale

For the storage of the system’s structured data we chose the relational database model. The largest contributor to this decision was the maturity of relational databases along with their ACID (Atomicity, Consistency, Isolation, Durability) properties. What this boils down to is ensuring the integrity of the data contained in the system.

To satisfy the requirement to run in the cloud and to standardize on a single platform we chose Amazon Aurora as our database platform. It’s very likely the database can be developed without locking into a specific database system, by using SQL standards. Some of the benefits of Amazon Aurora:

- Cloud platform
- Low-cost
- Scalable
- Multiple providers (postgres or mysql compatible)

