# Welcome!
In this repository you will find code for a data analysis of UN Green Space Data and comparing it to US CDC health data metrics.
This README serves as a starting guide to understand our data, code, and presentation

### Contents:
-Resources: This folder has the data inputs and outputs used in this project (CSV, JSON, .XLSX, and .PNG)
-code: This folder has the jupyter notebook and python files that were used to clean and organize the data and export to mongoDB, and access this data via Flask API app
-html-js: This folder has the front end resources required to load the webpage. This includes html, css, javascript and Jquery.

### Getting Started:
-Once you've downloaded the repository. You will see the code in the 'datacleanup.ipynb' generates the final data export in the 'Resources' folder 'data.json'
-Once the 'data.json' file is created, you will need to navigate to the 'Resources' folder in your python powershell and run the mongo import command (Available in the Code folder, file labeled 'dbcreation.ipynb')
-Upon successful import of the mongo DB, you may run the python app in the 'code' folder labeled 'app.py'. This will utalize the flask API, and access the mongo DB. 
-Finally, once your 'app.py' is running, in the 'html-js' folder open the 'index.html' and the full application will be running in your browser.

### Using the Webapp:
If your webapp is up and running you should have a pretty intuitive UI in your browser. 
The javascript will access a random datapoint from our data set and present a few views on that county. 
-Generate Metadata for that location
-Generate Barchart of the health data for that location
-Move the leaflet map to the coordinates available for that location

Upon using the menu and selecting a new location, the above mentioned metadata, bar chart, and map should update accordingly.

At the bottom we have a scatterplot diagram of all the data available, comparing the average greenspace per million people to the percent of the population effected with that health condition. You may click on the right side legend to hide/show any of the 4 data traces. 

### Credits/Resources
Health data was obtained from the CDC Places initiative:
https://chronicdata.cdc.gov/500-Cities-Places/PLACES-Local-Data-for-Better-Health-County-Data-20/swc5-untb/explore/query/SELECT%0A%20%20%60year%60%2C%0A%20%20%60stateabbr%60%2C%0A%20%20%60statedesc%60%2C%0A%20%20%60locationname%60%2C%0A%20%20%60datasource%60%2C%0A%20%20%60category%60%2C%0A%20%20%60measure%60%2C%0A%20%20%60data_value_unit%60%2C%0A%20%20%60data_value_type%60%2C%0A%20%20%60data_value%60%2C%0A%20%20%60data_value_footnote_symbol%60%2C%0A%20%20%60data_value_footnote%60%2C%0A%20%20%60low_confidence_limit%60%2C%0A%20%20%60high_confidence_limit%60%2C%0A%20%20%60totalpopulation%60%2C%0A%20%20%60locationid%60%2C%0A%20%20%60categoryid%60%2C%0A%20%20%60measureid%60%2C%0A%20%20%60datavaluetypeid%60%2C%0A%20%20%60short_question_text%60%2C%0A%20%20%60geolocation%60%2C%0A%20%20%60%3A%40computed_region_bxsw_vy29%60%2C%0A%20%20%60%3A%40computed_region_he4y_prf8%60%0AORDER%20BY%20%60statedesc%60%20DESC%20NULL%20FIRST/page/filter

Greensapce data was obtained from the UN Habitat data:
https://data.unhabitat.org/datasets/11-7-1-provision-and-access-to-open-spaces-in-cities-2020/explore 