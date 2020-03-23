# RC Fit 7 - Fitness Manager

RC Fit 7 is a full-stack web application that allows users to sign-up for fitness classes with certain trainers, and track the classes they've taken. It also has an administrator that is able to create classes, add trainers, and view which users are signed up to specific classes.

Access the live webapp: [RC Fit 7](https://rcfit7-react-app.herokuapp.com/)

Moody Movies has a custom web interface that allows users to search for top movies from countries. Utilizing IMDB datasets, Moody's PostgreSQL database holds 180,000 movies with country origin, ratings, and votes. Users also search for movies by country in an interactive Google map. Users can add and remove movies from their favorites list.

This project was made at Hackbright Academy in San Francisco over eight weeks beginning January 2020.

![Homepage](https://github.com/dahliakadri/movies_by_destination/blob/master/static/img/moodymovie.gif "Homepage")

## Contents

- [Technologies](#technologies)
- [Installation](#installation)
- [Features](#features)
- [Features for V2.0](#featuresforv2.0)
- [About the Developers](#aboutthedeveloper)

### Technologies

| Backend           |     Frontend      |
| ----------------- | :---------------: |
| Node.js           |   Javascript 6    |
| MongoDB           |    React 16.2     |
| Mongoose          |       CSS3        |
| Express           | Twitter Bootstrap |
| Passport.js       |       HTML5       |
| Soup Sieve 2.0    |       AJAX        |
| Beautiful Soup 4  |   jQuery 3.4.1    |
| SQLAlchemy 1.3.10 |    Babel 6.26     |

| APIs                   |
| ---------------------- |
| IMDB Datasets          |
| Google Maps Javascript |

---

### Installation

#### Prerequisites

You must have the following installed to run Moody Movies

- [PostgreSQL](https://www.postgresql.org/)
- [Python 3.x](https://www.python.org/downloads/)
- [API key for Google Maps JavaScript](https://developers.google.com/maps/documentation/javascript/tutorial)

#### Run Moody Movies on your local computer

Download IMDB Movie Datasets:

> This application utilizes data from IMDB data sets of over 10 million
> lines of data. The data was parsed with a python algorithm to seed
> 180,000 movies into a PostgreSQL database. Download the three files below
> and save to the main folder of the repo. Remove the first line of each dataset
> before running the seed script.

[Explanation of IMDB Datasets](https://www.imdb.com/interfaces/)

- [**title.akas.tsv.gz**](https://datasets.imdbws.com/title.akas.tsv.gz%5C)
- [**title.basics.tsv.gz**](https://datasets.imdbws.com/title.basics.tsv.gz)
- [**title.ratings.tsv.gz**](https://datasets.imdbws.com/title.ratings.tsv.gz)

Clone or fork repository:

    $ git clone https://github.com/dahliakadri/movies_by_destination.git

Create and activate a virtual environment inside your Moody Movies directory:

```
$ virtualenv env
$ source env/bin/activate
```

Install dependencies:

```
$ pip install -r requirements.txt
```

Set your Google API restriction to your local IP address only and then add your Google Map API key into the moodMap.jsx file

    GoogleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=YourAPIKey&libraries=places`

Create database 'moody':

```
$ createdb moody
```

Run seed.py in the terminal which will run model.py, create the database tables and seed the database with IMDB datasets:

```
$ python3 movie_data_seed.py
```

Run the app from the command line

```
$ python server.py
```

---

### Features

Access the live webapp: [Moody Movies](http://moodymovies.sadraii.com)

#### Login/Sign Up

![Login/SignUp](https://github.com/dahliakadri/movies_by_destination/blob/master/static/img/moodymovielogin.gif "Login / Sign Up")

#### User Profile

<img src="https://github.com/dahliakadri/movies_by_destination/raw/master/static/img/moodymovieprofile.png" alt="Profile" width="600">

#### Search Movies by Country

A drop down menue of all countries with movies appear on the homepage. Users can click on any country and view a list of top movies. Users can view movie details by hovering over each movie.

![Movies by Country](https://github.com/dahliakadri/movies_by_destination/blob/master/static/img/moodymoviebycountry.gif "Movies by Country")

#### Search Movies by Map

Utilizing the Google Maps API, users can move around the map and browse countries that have movies, indicated by a golden ticket. Users can click on the ticket and view a list of top movies. Users can view movie details by hovering over each movie.

![Movies by Map](https://github.com/dahliakadri/movies_by_destination/blob/master/static/img/moodymoviebymap.gif "Movies by Map")

#### Add Movies to Favorites

Registered users can save movies to their favorites list by clicking on as many movies as they want from a particular search and adding them. This can also be done by utilizing the Google Maps feature.

![Add Movies](https://github.com/dahliakadri/movies_by_destination/blob/master/static/img/moodymovieaddmovie.gif "Add Movies to Favorites")

#### Remove Movies from Favorites

Registered users can also remove movies from their favorites by clicking one or mutliple movies in their current favorites list and deleting.

![Remove Movies](https://github.com/dahliakadri/movies_by_destination/blob/master/static/img/moodymovieremovemovie.gif "Remove Movies to Favorites")

#### Logout

![Logout](https://github.com/dahliakadri/movies_by_destination/blob/master/static/img/moodymovielogout.gif "Moody Logout")

---

### <a name="featuresforv2.0"></a> Features for V2.0

Future iterations of this project will include:

- Movies about particular countries, built by a text analysis tool, specifically Google’s Natural Language Machine Learning API to pattern match through movie summaries
- Ratings and reviews by users
- Share movie recommendations
- Where to watch particular movies on streaming apps

---

### <a name="aboutthedeveloper"></a> About the Developer

RC Fit 7 creators and designers:

[<img src="https://media-exp1.licdn.com/dms/image/C4D03AQH9bImUzEztVQ/profile-displayphoto-shrink_200_200/0?e=1590624000&v=beta&t=8Q89ixVklNYqqmnkjXeBlcBBSphqYJct9FD0dVa22Jw" height="70px" width="70px">](https://github.com/maserallm) [Nadia Kadri](https://github.com/maserallm)

[<img src="https://media-exp1.licdn.com/dms/image/C4E03AQFuF0ueWRw_tw/profile-displayphoto-shrink_200_200/0?e=1585180800&v=beta&t=nSqWVySUot2gTW_FialUtZQUlYNMp8WsDo7iQedVP50" height="70px" width="70px">](https://github.com/maserallm) [Maserall Marcelin](https://github.com/maserallm) is an Inventory Analyst at Publix Supermarkets, Inc. turned software developer. He can be found on [LinkedIn](https://www.linkedin.com/in/maserall-marcelin-76067a12b/) and [Github](https://github.com/maserallm)

is a Technical Program Manager and Executive Assistant in security engineering at Box turned software engineer. This is her first fullstack project. She can be found on [LinkedIn](https://www.linkedin.com/in/dahliakadri/) and on [Github](https://github.com/dahliakadri).
