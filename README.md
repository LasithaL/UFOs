# UFO Sightings Summary
UFO sightings will walk you through the data collection, display and filtering process of a set of UFO sightings data collected in the Unites States of America.


## Project Overview
Given a dataset that contains UFO sightings that included Date of Sighting, City, State, Country, Shape of Sighting, Sighting Duration, and a Comment we were to extract and display the data in a web page as a data table that can be filtered by the user.  The process that was followed is described in the Results section of this report.

### Resources
***Datasource:*** A javascript file with [UFO Sightings](static/js/data.js) data was used as the datasource. Data within this file is arranged as a list of dictionaries with each dictionary item holding a single sighting data.
***Software:*** HTML/CSS, JavaScript, BootStrap and Visual Studios were used to create the web page.

### Process
***Page Layout:***

![Reload_Reset_Page](static/images/page_layout.PNG)

The page layout for the UFO Sightings is displayed above.
- Page Navigation - Yellow Outline
- Page Title - Red Outline
- Article Title - Blue Outline
- Article - Green Outline
- Filter Fields - Purple Outline
- Data Table - Brown Outline
The outline for the sections is only for the purpose of identifying the components and is not part of the web page itself.

***Page Navigation:*** The page navigation includes the text _UFO Sightings_ which is linked to the index.html file. By clicking on the text, you can reset the filter fields and reload the page.

***Page Title:*** The page title. _The Truth Is Out There_ is a string of static text placed at the center of the page.

***Article Title:*** Place in the left panel, the article title indicates what is included in the article itself.

***Article:*** The article introduces the data contained in within raising curiosity of the reader with an invite to browse through the data table.

***Filter Fields:*** Also located in the left panel, allows you to filter the data by Date, City, State, Country and Shape of sighted object.  The filters are live, and the data table responds to the filters as they are entered. All filter fields have a placeholder in place to show the user the data type and format that should be entered into the field for proper filtration.
- Field 1, _Enter Date_ is used to filter by date. The date range is limited in the dataset to 1/1/2010 to 1/13/2010. The user may enter any date in the given format to filter the data to a specific date within the data range.
- Field 2, _Enter City_ is used to filter the data table by a specific city. Only a limited number of cities are in the dataset and the user needs to pay close attention to be certain that the city of interest is within the dataset.
- Field 3, _Enter State_ is used to filter the data by the state. Again, only a limited number of states are available in the dataset.
- Field 4, _Enter Country_ is used to filter by the country. Unfortunately, the dataset only includes sightings from the United States and Canada. The user may opt not to enter any country in this field. The data from all countries available will be displayed in the data table.
- Field 5, _Enter Shape_ is used for the classification of the shape of the object that was sighted. The user needs to browse the data table for the available shapes listed in the dataset.

The user may enter criteria for any number of fields and the data will be filtered accordingly. The user may also remove any filter at any time and the dataset will adjust to the remaining filters.
***If a filter value falls outside of the dataset, there will be no data returned but an empty data table.***
***The filter values are case sensitive.  The dataset contains city, state and country data in lower case letters. The capitalization of any letters will yield a blank data table.***

***Data Table:*** The data table displays the data from the dataset. The table will adjust the data as the filters are applied.

#### Filter Examples
Filtering By Date
![Date_Filter](static/images/date_filter.PNG)

Filtering By City
![City_Filter](static/images/city_filter.PNG)

Compound Filters
![Compound_Filters](static/images/compound_filter.PNG)

Bad Filter => This filter includes a City filter value of 'Naples'. If you look at Compound FIlter example you see that the city 'Naples' is listed as 'naples' in the dataset. The filters are case sensitive. Therefore, the filter value of 'Naples' resulted in zero items being returned.
![Bad_Filter](static/images/bad_filter.PNG)


## Summary

### Drawbacks of Filters
- The dataset uses a specific nomenclature when addressing the City, State and Country. In essence, the user is expected to know the exact format of the Cities, States and the Countries where the data originated so they can set a meaningful set of filters. A filter value outside of the values included in the dataset will yield an empty data table. Also, there is no indication as to what values are available as filters. In pther words, the limitations of the dataset is not mentioned.


### Recommendations for the Future
- The current filter fields are all text input fields. For a future revision, these filter boxes can be replaced with dropdown filters that are pre-populated with the information that is within the datase. For example, the the _Enter State_ field and carry the two letter state id of all states that are within the datase.
In the image below, the city field is populated with what seems to be 'san diego'. But in reality, the left filter entry is 'san diego ' with an accidental space after the city name. This in return produced an empty data table.
![Reccomendation](static/images/reccomendation.PNG)

- In combination with the above reccomendation, for further ease of use the filter dropdowns can be linked where when a filter value is selected the rest of the dropdowns adjust the available values according to the selected filters. As an example, if the user selects the state to be 'ca' (California), then the rest of the filters will adjust their values to only show the relavent values to the rows where state = 'ca'.
- There also can be some consideration made for case sensitivity. It is natural for a user to enter 'CA' or "San Diego' in place of 'ca' or 'san diego'. The code can be adjusted to set the filter values to all UPPER or LOWER case and then match the dataset valses as UPPER or LOWER case letters.