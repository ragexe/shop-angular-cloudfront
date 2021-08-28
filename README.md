# Shop Angular Cloudfront

## Description

A global mentoring project program to develop hands-on, full-service development skills with a primary focus on NodeJS in the AWS Cloud from an e2e application perspective.
Presented a full-stack application (**Brickage**) store for the sale of Lego construction kits

## Install deps

- `npm ci` - install all required modules for the development

## API generation

#### Product service

Place `swagger-api.json` under the path `./src/app/api/products` and run the following scripts:

- `npm run-script api:generate`

_Note: The command requires permission to create folders_

## Running locally

- `npm run-script start`

## Deployment

- `sls:cloud:update:build:deploy:nc` - production build and deploy with serverless framework

## Prerequesties

- NodeJS v14
- Serverless Framework v2
- Angular v12
