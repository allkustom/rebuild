# Style Guide
This website is based on Markdown, but using html components as additional styles. 
Make sure to check [Markdown Syntax](https://www.markdownguide.org/basic-syntax/).

The guide below is html components which you can add on your Markdown files

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