# <img src="https://github.com/Pedginald/face-finder/blob/main/readMeDocs/smart-brain-logo.png" width="75"> $~~$ Face Finder

Welcome to Face Finder...... An app that utilizes the awesome AI face detection API by Clarifai!

This project was built in order to delve deeper into the capabilities of Artificial Intelligence models, and to see how the API's handle client requests and how they can be integrated and utilized by a multitude of projects.

## Tech Stack



## Clarifai: Face Detection Model

Clarifai's Machine Learning face detection API has the ability to detect human faces in images and videos, with an accuracy level of 99.97%...... Hats off to Clarifai! 🎩 It then returns the results of these requests displayed in bounding boxes overlayed on the original file. To use the application, once you have registered and signed in, you will be in your personal profile. Then all you need to do is find a URL link to an image from your favourite search engine 😜, paste it into the text box, and click "Detect". The following Gif shows the application at work on an image with a face in it:
 
<img src="https://github.com/Pedginald/face-finder/blob/main/readMeDocs/face-detection.gif" width="50%"/>

And here it is in action on an image without a face (a small tip of the cap to my time as a farrier/blacksmith 😄):

<img src="https://github.com/Pedginald/face-finder/blob/main/readMeDocs/no-detection.gif" width="50%"/>

### Architecture

The face detection API uses InceptionV2 architecture Batch Normalization: Accelerating Deep Network Training by Reducing Internal Covariate Shift with FPN (Feature Pyramid Networks) for Object Detection. The model is trained on openimages_v4_face_only_crowd_filtered, and has the ability to detect partial occlusion of faces.

## Registering a user

