# AuthenticationJS

A REST api Authentication & Profile service writteen in NodeJS

This project also doubles as a school assignment (that I created my self).

## Certain Items worth pointing out
- 

## Software Analysis 
Since I will be writing it in the style of a REST API the most fitting languages would be those that are generally associated with web development like PHP & NodeJS that I am provicient enough in. also databases like MySQL & MongoDB

- Programming Languages: 
 - PHP: PHP is a very powerful widely used web development language running a very large part of todays web architecture. PHP as a really good MySQL integration. Frameworks like [Laravel](https://laravel.com/) make this a really good language however I am skilled enough in PHP to develop this API in it. It does not have my preference
 - NodeJS: NodeJS combined with express make this language expremely pleased to work in. However it does not "force" a structured way like languages such as C#. You have to decide more your self how you should write your program. Adding both pro's and cons to the mix one being sphagetti code and hard to grasp system architecture. NodeJS has a better integration with MongoDB than MySQL because of a NPM package called Mongoose
 - Both PHP & NodeJS have packages. PHP has Composer and NodeJS has NPM and YARN

- Database:
  - MySQL: MySQL forces a pre-structured table setup that if in production is hard to change but ensuring that you are less likely to fuckup the database!
  - MongoDB: MongoDB is a bit less strict on the collection setup which you can change on the fly within your code without having to edit the table in its entirety. However it does open up the option to mess up and corrupt a collection.

I decided to go with NodeJS because of its scalability and the fact that it can run on multiple platforms.
Also because of its Non-Blocking IO operations makes this quite desirable for large scale applications and its multi-threadding capabilities
Because I went for NodeJS I will combine this with the MongoDB database because of its superior integration.

## Goals of this project
- Register new users
- Authentication
- Ability to add "items" to the players profile
- Optional: 2FA

## Planning 
| | Monday | Tuesday | Wednesday | Thursday | Friday |
| --- | --- | --- | --- | --- | --- |
|Week 1 | Start Step 1 | -> | Finish step 1 > start step 2 | -> | ->
|Week 2 | -> | -> | Finish step 2 & Turn in assignment |  Write portfolio itme | Enter reflection form

### Step 1
- Setup the project
- Create the registration
- Create the authentication

### Step 2
- Start writing the profile storage

## Sources
- [NodeJS Clusters](https://nodejs.org/api/cluster.html)
- [TCP Server](https://nodejs.org/api/net.html)