API Root: https://images-api.nasa.gov 


API Endpoints:
 /search 
/asset/{nasa_id}
 /metadata/{nasa_id}
 /captions/{nasa_id}
 /album/{album_name}


For meta data
Base url+ 
API Root:
https://images-api.nasa.gov
API Endpoints:
/search
/asset/{nasa_id}
/metadata/{nasa_id}
/captions/{nasa_id}
/album/{album_name}
the search URL looks like this.
step 1: baseUrl = https://images-api.nasa.gov
Step2: API Endpoints, depending on what we want to do, we can do the following.
2.1 for searching
  2.1.1: baseUrl + "/search" + "?q="  + "{searchstrings}"
 eg: https://images-api.nasa.gov/search?q=apollo%2011
  the output will be object, in JSON format
  2.2 Retrieving a media asset's manifest
  2.2.1 : baseUrl + "/asset/" + "{nassa_id}"
   eg: https://images-api.nasa.gov/asset/as11-40-5874
   the output is also an object
  2.3  Retriving a media asset's metadata location
  2.3.1: baseUrl + "/metadata" + "{string}"
    eg: https://images-api.nasa.gov/metadata/as11-40-5874
  2.4 Retriving a video asset's captions
  2.4.1: baseUrl + "/captions/" + "string"
    eg. : https://images-api.nasa.gov/captions/172_ISS-Slosh
 2.5 : Retriving a album:
   2.5.1 : baseUrl + "/album" + "{string}"
     eg: https://images-api.nasa.gov/album/apollo


steps for creating react Application:

created a directory React-NASA  and  cd into the directory followed the steps

1. npm vite@latest
2. project name,react and javascript
3. cd into project name 
4. npm install
5. npm install react-router-dom
6. npm run dev

added code changes in main.jsx.
created 2 directories components and pages in src directory.
in Pagesdirectory I created 3 files 
About file--- it displays a message "this is about page."
Home file --- it displays a message "this is Home page."
Nasalist ----it displays a search bar and when user searches for some planets it displays the images and titles and date created.


This is the application to show the images from the NASA API