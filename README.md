# Outline
This repository holds a website at the behest of D.W.Parker Skip hire. The brief was to create a new website that cost them a fraction of the cost of their previous one, which was created from Yell from a template. This previous website was also unresponsive, only updating display on refresh, which had been commented on my customers in the past.

This project is created in React from scratch, meaning it is composed of JavaScript, HTML, and CSS. The information and pictures on the page were supplied by the customer.

![Website Home Page](https://user-images.githubusercontent.com/60265517/206943350-1590c6da-1641-4064-9095-1a655dd39aea.png)

## Noteworthy Components

Customer requests | Implementation |
------------------|-------------------|
A messaging feature should be added for the user to submit a form in the webpage and for the information to be sent the main office email | Through utilising the free feature of EmailJS, which fell well within the company’s expectations of email bandwidth, created a system that would generate and forward emails to the appropriate site workers |
Messaging service should be secure | reCAPTCHAv3 from google was implemented and spamming is safeguarded by EmailJS.|
One page should display the location of the main site on a map. | Used pigeon maps, a free static map rest API, to display a pin at the location of the site. |

### Contact Form:
![ContactFooter](https://user-images.githubusercontent.com/60265517/206943357-7c2fe55d-f622-4057-8948-9475cb050d4b.png)

### Map with Pinned Location:
![Map](https://user-images.githubusercontent.com/60265517/206943363-f6d3103b-6452-4a28-9912-3869b2160933.png)

## Replication
Using this project requires the creation of the API keys for reCAPTCHA, and the EmailJS email and templates keys.

The API keys are held was secrets in the Vercel site.

## Site Deployment
Site is deployed on Vercel, and site can be found hosted at www.dwparkerskiphire.co.uk.
