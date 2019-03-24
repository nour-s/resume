# A nice looking resume
Nothing hurts me those days more than a CV that looks like an accident report. It is 2019, and no CV should be ugly. Therefore, I decided to create this react app of my resume, you can fill your data and photo and you get out-of-box nice looking CV.


![image](https://user-images.githubusercontent.com/1418564/54881800-48b90e80-4e6d-11e9-8c39-badace64db69.png)

# It is also responsive:

![cv_responsive](https://user-images.githubusercontent.com/1418564/54881889-2ffd2880-4e6e-11e9-8a1b-db72e60afcaf.gif)

# PDF Or printed paper:
The CV will print nicely on a paper or even to pdf file in case you wanted a common format to be used in emails:

![image](https://user-images.githubusercontent.com/1418564/54882011-4657b400-4e6f-11e9-8991-f75c91941767.png)

## This is cool, but how I can fill my data?
### Developer?

* Clone this repo.
* Install the depnedencies using NPM or Yarn.
* Edit the file `cv-content.json`, you can see where to fill, just replace the old data. 
* Build the app

#### Commands: 
```
npm install
// edit the json file.
npm build
```
Or using yarn:
```
yarn install
// edit the json file.
yarn build
```

You will get the html version in the `build` folder.<br/>
Just upload it somewhere or you can even create a repo on github and upload it there.<br/>
You can access the page using the GitHub.io domain.<br/>

Congratulations! you got a new cv.

### Not a Developer?
I'm still working on the simplest way possible where you can just run few commands and you get it right away. Right now, I can just ask you to be patient :).

## Known issues:
* The picture might need alignments, as I can't make one style that work on all pictures. Also you need to make sure the picture background matches the page background so you don't g et a weird-looking edges.
* The page will expand vertically if more lines are added. However, you need to be carefull when printing, as a page break might comes in the middle of a section.
* Adding a lot of texts in one section (such as Experiences) could cause text to go off the borders, try to be consise as much as possible. If you think some styles can be fixed, please let me know by opening a new issue or creating a pull requests.
