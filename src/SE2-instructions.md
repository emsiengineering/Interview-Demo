# Project Brief
​
In this project, we want you to recreate a React App that displays institutions’ information. Attached is an image mockup of what the final product will look like.
​
Your goal is to recreate the mockup to the best of your ability. We expect you to use React, but you are free to use whatever packages or methods of styling that you wish. However, you shouldn’t use any existing component library (write your own CSS instead). 
​
The university image svg is included. You will need to add an attribution link at the bottom of the page for this svg that looks like this:
```
<div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
```
The icon for the search bar is also included.
​
​
We would suggest using [Create React App](https://github.com/facebook/create-react-app) to get started quickly and not worry about the configuration side of the project. 
​
------------------------------------------
​
​
You will be using College Scorecard API. It is a public API that provides data for US universities and colleges. You can get a free API key [here](https://collegescorecard.ed.gov/data/documentation/).
​
​
Your request will look like:
​
GET 
`https://api.data.gov/ed/collegescorecard/v1/schools.json?per_page=100&_fields=school.name,school.school_url,id,school.city,school.state,latest.student.size,latest.admissions.admission_rate.overall,latest.programs.cip_4_digit.credential,latest.programs.cip_4_digit.title&api_key=[your API key]&school.state=[State Filter, if desired]` 
​
​
Include the first 100 resultant schools for your query. You need not include more than this.
​
The API has a lot of data points, but is not very well documented. Please contact me (ryan.lease@economicmodeling.com) if you have questions on how to use the API itself. You can also consult [StackExchange for questions tagged with ‘collegescorecard’](https://opendata.stackexchange.com/questions/tagged/collegescorecard).
​
​
## The Requirements
​
- You must put your code on to GitHub. We will review it from there.
- Use small commits to git so that we can see how you’ve developed your solution.
- Follow good coding practices, and add comments if necessary for clarity.
- You must use React to develop the project.
- Please include a `README.md` file that outlines how to run your project, and any additional notes you may have.
​
## Evaluation Criteria
​
- How readable your code is
- How close the final product is to the mockup (we aren't expecting by-the-pixel perfection)
- How your solution handles the API
- How well you talk through your decisions in code review
​
If you finish quickly and want an extra challenge, work on making your design responsive to different screen sizes, such as for a mobile phone.
​
Feel free to contact me (ryan.lease@economicmodeling) with any questions or clarifications.
