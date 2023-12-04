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

## Registering a user

## Tech Stack
