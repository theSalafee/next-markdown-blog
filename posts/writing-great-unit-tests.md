---
title: "Intro To Web Dev, V2"
date: "Oct 26, 2021"
excerpt: "Dont use == ever use ==="
cover_image: "/images/posts/img7.jpg"
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
  .then(function (response) {
    const processingPromise = response.json();
    return processingPromise;
  })
  .then(function (processedResponse) {
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

### Integrating with other's libraries

1 - An easy and quick way to integrate with other's libraries is to use a cdn.

2 - For example, if you want to use jQuery, you can use the following link:

```javascript
<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
```

3 - Popmotion is a library that is used to animate things.

4 - If you want to use Popmotion, you can use the following link:

```javascript
    <script src="https://unpkg.com/popmotion@8.1.24/dist/popmotion.global.min.js"></script>
    <script src="./animation.js"></script>
```
Copying and pasting code is common as a developer. Dont be afraid to copy and paste code.

"blatantly ripping off" is a common way to copy and paste code. LOL.