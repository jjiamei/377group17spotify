# spotify-genre
A JavaScript project
https://jjiamei.github.io/377group17spotify/
Spotted: A Spotify Visualization Project
Target browsers - desktop, mobile

Joaquin
Original APi: Spotify API
Due to issues with continued access and permissions, a dataset containing Spotify data was pulled from Kaggle instead (https://www.kaggle.com/datasets/leonardopena/top-spotify-songs-from-20102019-by-year)
Visualizations: The project visualizes Spotify's Top 50 Songs from 2010 for this first iteration of the app. The visualization is a bar chart which lists each song ordered by ranking, and details this energy level (Spotify API). 
The project uses D3.js and Chart.js for the visualization. 
The project uses a basic CSS framework with flex boxes and is mainly designed for easy usability
This portion of the project demonstrates the popularity of dance pop and energetic songs, and is an indicator of how current trends have remained the same over time. 

Jessica

I used the Spotify API to create an website/app which, upon clicking the "log in with Spotify!" button, the user will be redirected to Spotify's login, and if the user is authenticated through Spotify, the login page will redirect to a page which generates the user's top 10 artists within the last 6 months. The artists' popularity rating and genre is also displayed to the user.

Originally, we had planned to create an API which looks into the information problem,  "does Spotify overlook artists from marginalized groups by favoring pushing already
well-established artists, who are often white?" In order to look into this information problem, we wanted to create an app which generates custom artist recommendations of 
artists the user has yet to listen to before. These recommendations would be pulled using Spotify's API, to generate customized recommendations of artists who have a lower 
value in popularity rating, but have a high metric that demonstrates quality such as user/listening retention, etc. In the end, the Spotify API was more complicated than
we imagined, so it took me a while to create a working version of this app. 

There is an issue from the API that only allowed user within the Spotify development dashboard can access their top artist's infos. If you want to test out the feature, please email jjiang07@terpmail.umd.edu with your name and email account associated with your Spotify account.

The app is hosted on Heroku as Github Page only allows to host static pages.

To start, first do 
```
npm install
```

Then
```
npm start
```