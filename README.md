# Project Management
## Adding new projects/catergories
Find '1 collections' folder in the source path
```
source/1 collections/...
```
Add a new folder with a correct label

**Make sure to add layout json and matching the contents**
```
source/1 collections/
    0 code
        0 code.json
        000 BMD.md
        001 MM.md
        ...
    1 leather
        1 leather.json
        000 airpodCase.md
        001 iPadCase.md
        ...
    2 physical
        2 physical.json
        ...
    ...
```

Inside data JSON, the form has to be like below
```
0 code.json
    {
        "layout": "work.html",
        "tags": "work",
        "group": "code"  //<-- Set the group type. It effects on the filtering
    }
```

## After creating a new project -> Front Matter Managing
Below is the sample shape of the front matter setting
```
---
title: BMD Battery Managemannt Division
photo: /0 assets/basic/BMD Thumbnail.png
video: https://www.youtube.com/embed/nqYUuZSCHp4?si=ULfaZ5-pGnBpozhm
mediumTech:
  - After Effects
  - Blender
  - Arduino
projectDate:
  - 12/12/2025
  - 01/15/2026
size:
  - 500 * 150 * 250 mm (W/D/H)
  - 1m 20s
---
```
Adjust the front matter contents based on the project information.

[Photo] matter allways has to be filled with the thumbnail image.
If there's [Video] matter is exist, it automatically shows the video url instead of the thumbnail image. (Only at the project page, not on the gallery view)

[Video] Has to be the Youtube's embedded link. Not a direct address.


## Change Selected Work List
Selected works are managed by the JSON list. Find the path below.
```
source/_data/selectedWorks.json
```
Adjust the list inside JSON. The order from list affects the order on the HTML.

```
selectedWorks.json
    {
        "selectedWorksPaths": [
            "0 code/000 BMD.md",
            "1 leather/000 airpod.md",
            ...
        ]
    }
```
---


# Style Guide
This website is based on Markdown, but using html components as additional styles. 
Make sure to check [Markdown Syntax](https://www.markdownguide.org/basic-syntax/).

The guide below is html components which you can add on your Markdown files

## About Description Section
Use a below line to auto-seperate the description section and content section.
```
<!--desc-->
```

## Spacer Line
Setting a spacer between contents with 4 options
1. Empty spacer
```
<div class="spacer"></div>
```
2. With short line
```
<div class="spacer short"></div>
```
3. With mid line
```
<div class="spacer mid"></div>
```
4. With long line
```
<div class="spacer long"></div>
```

## Content Box 
Use different column options with below
1. one
```
<div class="contentBox one">
    <!-- Content inside. Text/Image/Etc -->
</div>
```
2. two
```
<div class="contentBox two">
    <!-- Content inside. Text/Image/Etc -->
    <!-- Content inside. Text/Image/Etc -->
</div>
```
3. three
```
<div class="contentBox three">
    <!-- Content inside. Text/Image/Etc -->
    <!-- Content inside. Text/Image/Etc -->
    <!-- Content inside. Text/Image/Etc -->
</div>
```

**Use just 'contentBox' to wrap up the text box**
It supports Markdown style. Make sure to give an empty line between html and Markdown styles
```
<div class="contentBox">

    # MD Title
    MD main text


</div>
```

**For image or iframe, use html**
```
<img src="/0 assets/work/sampleWorkThumbnail" alt="" />
```

