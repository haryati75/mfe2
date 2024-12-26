# mfe2
Microfrontend for multi-framework apps (v2)
based on Stephen Grider's Udemy online course

### Description
Uses Webpack Module Federation to create a microfrontend architecture. 
React and Vue apps are configured manually.

### Packages

#####  Frontend modules:
* container (host)
* marketing (remote)
* dashboard (remote)
* auth (remote with limited interaction to host)

##### Package Dependencies:
* React
* Webpack Module Federation
* Babel
* Material-UI
* React Router
* Vue (Dashboard)

##### Cloud Services: 
* Github Repository
* Github Actions
* AWS S3 Bucket
* AWS Cloudfront

#### Deployment
* Github Actions are used to deploy the apps to AWS S3 Bucket
* AWS Cloudfront is used to serve the apps
* Deployment is done automatically when code is pushed to the respective packages
* URL for the apps:
  * Container: [https://dijew8g8kxjn3.cloudfront.net/](https://dijew8g8kxjn3.cloudfront.net/)
  * Github Repository: https://github.com/haryati75/mfe2
  
### Usage
1. Clone the repository
2. Go into the `packages` directory
3. Go into each package and run `npm install`
4. Run `npm start` in each package to start the development server

#### Local Servers
* Container: [http://localhost:8080](http://localhost:8080)
* Marketing: [http://localhost:8081](http://localhost:8081)
* Dashboard: [http://localhost:8082](http://localhost:8082)
* Auth: [http://localhost:8083](http://localhost:8083)

