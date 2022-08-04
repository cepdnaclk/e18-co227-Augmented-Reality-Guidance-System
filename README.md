___
# CO227 Computer Engineering Project - Augmented Reality Guidance System
___

[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/cepdnaclk/e18-co227-Augmented-Reality-Guidance-System/issues)
[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fcepdnaclk%2Fe18-co227-Augmented-Reality-Guidance-System&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)

## Tech Stack 
  * HTML/CSS/JavaScript   -   Used for creating and styling the web application 
  * [JQuery](https://jquery.com/)      -  Simplify HTML DOM tree traversal and manipulation, as well as event handling, CSS animation 
  * [ThreeJS](https://threejs.org/) -  Used for rendering 3D objects
  * [AFrame](https://aframe.io/) - Used for creating 3d objects
  * [aframe-htmlembed-component](https://github.com/supereggbert/aframe-htmlembed-component) - Used for embedding html content in AFrame
  * [ArJS](https://ar-js-org.github.io/) Used as the augmented reality library

## Run Locally

- Clone your forked repository
    ```
    git clone https://github.com/USERNAME/e18-co227-Augmented-Reality-Guidance-System
    
    cd e18-co227-Augmented-Reality-Guidance-System
    ```

- Run using http server (Ex: wampserver, python3 http server)

## How to add a new marker with room details

1. Get the marker you want to use in JPG or PNG format.
    * A good marker should have the following properties:
        * Being rotationally asymmetrical
        * Containing simple shapes/structures
        * Having a high contrast

2. Create the pattern file for the marker by using [ARjs Marker Training](https://jeromeetienne.github.io/AR.js/three.js/examples/marker-training/examples/generator.html). 
    * You can upload the JPG/PNG file you created earlier and download the `.patt` file. 
    * Also Download the full marker image by setting the pattern ratio around 0.55-0.60. It should contain a thick black border. It is the image you should print and use as the marker.

3. Rename the `.patt` file with the room id in the given format and move it to the `assets/img/patterns` directory. 
    * Example 1: `g_01.patt` for 1st room on the ground floor
    * Example 2: `1_06.patt` for 6th room on the first floor

4. Create a `.json` file for the respective room details and move it to the relevant `assets/data/*_floor/` directory.

5. Add the respective room_id to the `roomIds` array in `assets/js/main.js`
