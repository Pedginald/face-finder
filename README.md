# <img src="https://github.com/Pedginald/face-finder/blob/main/readMeDocs/smart-brain-logo.png" width="75"> $~~$ Face Finder

Welcome to Face Finder...... An app that utilizes the awesome AI face detection API by Clarifai!

This project was built in order to delve deeper into the capabilities of Artificial Intelligence models, and to see how the API's handle client requests and how they can be integrated and utilized by a multitude of projects.

## Clarifai: Face Detection Model

Clarifai's Machine Learning face detection API has the ability to detect human faces in images and videos, with an accuracy level of 99.97%...... Hats off to Clarifai! 🎩 It then returns the results of these requests displayed in bounding boxes overlayed on the original file. To use the application, once you have registered and signed in, you will be in your personal profile. Then all you need to do is find a URL link to an image from your favourite search engine 😜, paste it into the text box, and click "Detect". The following Gif shows the application at work on an image with a face in it:
 
<img src="https://github.com/Pedginald/face-finder/blob/main/readMeDocs/face-detection.gif" width="50%"/>

And here it is in action on an image without a face (a small tip of the cap to my time as a farrier/blacksmith 😄):

<img src="https://github.com/Pedginald/face-finder/blob/main/readMeDocs/no-detection.gif" width="50%"/>

### Architecture

The face detection API uses InceptionV2 architecture Batch Normalization: Accelerating Deep Network Training by Reducing Internal Covariate Shift with FPN (Feature Pyramid Networks) for Object Detection. The model is trained on openimages_v4_face_only_crowd_filtered, and has the ability to detect partial occlusion of faces.

Batch Normalization..... ermmmm..... what?!?! 🤯

Here's a very interesting article by Sergey Ioffe and Christian Szegedy to help digest the topic:

>Training Deep Neural Networks is complicated by the fact that the distribution of each layer's inputs changes during training, as the parameters of the previous layers change. This slows down the training by requiring lower learning rates and careful parameter initialization, and makes it notoriously hard to train models with saturating nonlinearities. We refer to this phenomenon as internal covariate shift, and address the problem by normalizing layer inputs. Our method draws its strength from making normalization a part of the model architecture and performing the normalization for each training mini-batch. Batch Normalization allows us to use much higher learning rates and be less careful about initialization. It also acts as a regularizer, in some cases eliminating the need for Dropout. Applied to a state-of-the-art image classification model, Batch Normalization achieves the same accuracy with 14 times fewer training steps, and beats the original model by a significant margin. Using an ensemble of batch-normalized networks, we improve upon the best published result on ImageNet classification: reaching 4.9% top-5 validation error (and 4.8% test error), exceeding the accuracy of human raters.

## Registering a User and Signing In

This is a very simple and straightforward process that "does what it says on the tin". However, I would be remiss if I didn't include it in the README.md file. That's what it's for, eh! 🙂

To register:
* Click on the "Register" navigational button at the top right hand side of the initial page, this will take you to the registration form
* Fill in your name and email address
* Then choose a password
* Once you have done that, you will automatically be signed in to your profile

Here's that process:

<img src="https://github.com/Pedginald/face-finder/blob/main/readMeDocs/register.gif" width="50%"/>

To sign in:
* Click on the "Sign In" navigational button at the top right hand corner of the initial page, this will take you to the sign in page
* Enter your email address in the first field
* Enter your password in the second field
* Hit the "Sign In" button, and you're in!

Here's that process:

<img src="https://github.com/Pedginald/face-finder/blob/main/readMeDocs/sign-in.gif" width="50%"/>

## Tech Stack

This is a full stack application built using the PERN stack:- PostgreSQL, Express, Node, and React.

### React

A fantastic JavaScript library that enables the development and usage of simple, modular, and reusable components, whicht allows for a very efficient and streamlined devlopment process. It's implementation of the virtual DOM makes rendering super fast, and dramatically enhances user experience. It's a lightweight package, which lends itself to performant and productive projects. Another bonus of using React is having the ability to use React Router for client side routing. This adds to the performance of the app, as it means that it can update the URL from a link click without making another request for another document from the server.

### Node and Express

Node was used in the application in order to write the server side in JavaScript. It's super fast runtime environment allows for effiecient development processes as well as affording it easy scalability. Express is a Node JS framework that is great at handling requests, serving files, and handling HTTP methods. It is time efficient, fast, economical, and asynchronous.

### PostgreSQL

Using PostgreSQL was a no-brainer. It's the most advanced open source relational database system in the world. There are no licencing costs, meaning it is completely free to use. It is also very secure, reliable, extensively functional, and highly scalable.
