---
title: 'Intro To Web Dev, V2'
date: 'Oct 26, 2021'
excerpt: 'Dont use == ever use ==='
cover_image: '/images/posts/img7.jpg'
---

## AJAX and Node.js
 1 - AJAX is a way to send data from one page to another. It is also an older way to connect to an API.

2 - According to Bryan Holt, AJAX is a stupid acronym for "Asynchronous JavaScript and XML."

3 - AJAX is not widely used in JS development anymore. However, in my previous job that is all they ever used.

4 - In modern JS, we use JSON to send data.

AJAX example:
```javascript
const DOG_URL = "https://dog.ceo/api/breeds/image/random";
const promise = fetch(DOG_URL); // new ajax way
promise
  .then(function(response) {
    const processingPromise = response.json();
    return processingPromise;
  })
  .then(function(processedResponse) {
    console.log(processedResponse);
  });
console.log("this will log first");
```
In the above example, we are using the fetch API to get a random dog image. Then we process the response and covert it to JSON.

Bryan initialized the API end-point to a variable. Then he used the .then() method to create a promise and process the response.

When working with an API, you need to read the documentation to know what the response will look like. In this case, the response will look like this: 
```javascript
{
  "status": "success",
  "message": "https://images.dog.ceo/breeds/affenpinscher/n02110627_11783.jpg"
}
```




