---
id: requirement-traceability-matrix
title: Requirement Traceability Matrix
sidebar_label: Requirement Traceability Matrix
---

Within the previous design sections we have included references to a number of functional and non-functional requirements where appropriate. Some of the requirements are overarching and difficult to pin to a single component of the system. The following requirements traceability matrices should provide a quick reference for the relationship between the requirements and the system components.

## Functional Requriements

<table class="traceability-matrix">
  <thead>
    <tr>
      <th></th>
      <th><div><span>3-Tier Architecture</span></div></th>
      <th><div><span>Database Component</span></div></th>
      <th><div><span>File Storage Component</span></div></th>
      <th><div><span>REST API Component</span></div></th>
      <th><div><span>Web Application Component</span></div></th>
      <th><div><span>Additional AWS Services</span></div></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th class="row-header"><abbr title="Pet owners (Personal Users) may self-register for an account.">FR-1</abbr></th>
      <td></td>
      <td>X</td>
      <td></td>
      <td>X</td>
      <td>X</td>
      <td></td>
    </tr>
    <tr>
      <th class="row-header"><abbr title="Veterinarian office and adoption clinic owners/administrators (Business Users) may request business accounts.">FR-2</abbr></th>
      <td></td>
      <td>X</td>
      <td></td>
      <td>X</td>
      <td>X</td>
      <td></td>
    </tr>
    <tr>
      <th class="row-header"><abbr title="Business users may create additional accounts for employees.">FR-3</abbr></th>
      <td></td>
      <td>X</td>
      <td></td>
      <td>X</td>
      <td>X</td>
      <td></td>
    </tr>
    <tr>
      <th class="row-header"><abbr title="Business users may manage roles/permissions for employee accounts.">FR-4</abbr></th>
      <td></td>
      <td>X</td>
      <td></td>
      <td>X</td>
      <td>X</td>
      <td></td>
    </tr>
    <tr>
      <th class="row-header"><abbr title="All users may login to the system using a unique username and password.">FR-5</abbr></th>
      <td></td>
      <td>X</td>
      <td></td>
      <td>X</td>
      <td>X</td>
      <td></td>
    </tr>
    <tr>
      <th class="row-header"><abbr title="Business users and employees may create or modify medical records for pets in the system.">FR-6</abbr></th>
      <td></td>
      <td>X</td>
      <td>X</td>
      <td>X</td>
      <td>X</td>
      <td></td>
    </tr>
    <tr>
      <th class="row-header"><abbr title="Personal users may upload supporting documentation for their pets (e.g. scanned or electronic copies of medical services).">FR-7</abbr></th>
      <td></td>
      <td>X</td>
      <td>X</td>
      <td>X</td>
      <td>X</td>
      <td></td>
    </tr>
    <tr>
      <th class="row-header"><abbr title="Personal users may update/modify non-medical information of pets.">FR-8</abbr></th>
      <td></td>
      <td>X</td>
      <td></td>
      <td>X</td>
      <td>X</td>
      <td></td>
    </tr>
    <tr>
      <th class="row-header"><abbr title="Any user may pass ownership of an owned pet to any other user.">FR-9</abbr></th>
      <td></td>
      <td>X</td>
      <td></td>
      <td>X</td>
      <td>X</td>
      <td></td>
    </tr>
    <tr>
      <th class="row-header"><abbr title="Personal users may opt in/out sharing contact info to other owners if pet is passed.">FR-10</abbr></th>
      <td></td>
      <td>X</td>
      <td></td>
      <td>X</td>
      <td>X</td>
      <td></td>
    </tr>
    <tr>
      <th class="row-header"><abbr title="System should notify pet owners of incomplete medical or personal information (e.g. vaccines not up-to-date) and upcoming appointments.">FR-11</abbr></th>
      <td></td>
      <td>X</td>
      <td></td>
      <td>X</td>
      <td>X</td>
      <td>X</td>
    </tr>
  </tbody>
</table>

## Non-functional Requriements

<table class="traceability-matrix">
  <thead>
    <tr>
      <th></th>
      <th class="rotate"><div><span>3-Tier Architecture</span></div></th>
      <th class="rotate"><div><span>Database Component</span></div></th>
      <th class="rotate"><div><span>File Storage Component</span></div></th>
      <th class="rotate"><div><span>REST API Component</span></div></th>
      <th class="rotate"><div><span>Web Application Component</span></div></th>
      <th class="rotate"><div><span>Additional AWS Services</span></div></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th class="row-header"><abbr title="The application interface should meet or exceed level AA conformance of the Web Content Accessibility Guidelines (WCAG) 2.1.">NR-1</abbr></th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>X</td>
      <td></td>
    </tr>
    <tr>
      <th class="row-header"><abbr title="The full application stack should be cloud compatible.">NR-2</abbr></th>
      <td>X</td>
      <td>X</td>
      <td>X</td>
      <td>X</td>
      <td>X</td>
      <td>X</td>
    </tr>
    <tr>
      <th class="row-header"><abbr title="The full application stack should autoscale to meet user demand.">NR-3</abbr></th>
      <td></td>
      <td>X</td>
      <td>X</td>
      <td>X</td>
      <td>X</td>
      <td>X</td>
    </tr>
    <tr>
      <th class="row-header"><abbr title="The application should be available 99.99% of the time (“four nines”).">NR-4</abbr></th>
      <td></td>
      <td>X</td>
      <td>X</td>
      <td>X</td>
      <td>X</td>
      <td></td>
    </tr>
    <tr>
      <th class="row-header"><abbr title="All web pages should load in under two seconds.">NR-5</abbr></th>
      <td></td>
      <td></td>
      <td></td>
      <td>X</td>
      <td>X</td>
      <td>X</td>
    </tr>
    <tr>
      <th class="row-header"><abbr title="All web traffic should be encrypted using Transport Layer Security (TLS).">NR-6</abbr></th>
      <td></td>
      <td></td>
      <td></td>
      <td>X</td>
      <td>X</td>
      <td>X</td>
    </tr>
    <tr>
      <th class="row-header"><abbr title="Appropriate measures should be taken to ensure data servers are secured.">NR-7</abbr></th>
      <td></td>
      <td>X</td>
      <td>X</td>
      <td></td>
      <td></td>
      <td>X</td>
    </tr>
    <tr>
      <th class="row-header"><abbr title="Data backups should be created daily (minimum).">NR-8</abbr></th>
      <td></td>
      <td>X</td>
      <td>X</td>
      <td></td>
      <td></td>
      <td>X</td>
    </tr>
    <tr>
      <th class="row-header"><abbr title="Data backups should be securely stored separately from data servers.">NR-9</abbr></th>
      <td></td>
      <td>X</td>
      <td>X</td>
      <td></td>
      <td></td>
      <td>X</td>
    </tr>
    <tr>
      <th class="row-header"><abbr title="A private REST API should be available for third-party, desktop, or mobile application integration.">NR-10</abbr></th>
      <td></td>
      <td></td>
      <td></td>
      <td>X</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th class="row-header"><abbr title="Access to all data should take a least privilege approach.">NR-11</abbr></th>
      <td></td>
      <td>X</td>
      <td>X</td>
      <td>X</td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>