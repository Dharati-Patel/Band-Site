let shows = [
    {
        date: "Mon Sept 09 2024",
        venue: "Ronald Lane",
        location: "San Francisco, CA"
      },
      {
        date: "Tue Sept 17 2024",
        venue: "Pier 3 East",
        location: "San Francisco, CA"
      },
      {
        date: "Sat Oct 12 2024",
        venue: "View Lounge",
        location: "San Francisco, CA"
      },
      {
        date: "Sat Nov 16 2024",
        venue: "Hyatt Agency",
        location: "San Francisco, CA"
      },
      {
        date: "Fri Nov 29 2024",
        venue: "Moscow Center",
        location: "San Francisco, CA"
      },
      {
        date: "Wed Dec 18 2024",
        venue: "Pres Club",
        location: "San Francisco, CA"
      }
];

function ShowsDetail(arr) {
    let table = document.querySelector(".shows__container");

    //header container
    let headerContainer = document.createElement("div");
    headerContainer.classList.add("shows__container--header");
    table.appendChild(headerContainer);

    //header title
    let headerTitle = document.createElement("h1");
    headerTitle.classList.add("shows__container--header-title");
    headerContainer.appendChild(headerTitle);
    headerTitle.innerText = "Shows";

    //shows details
    let detail = document.createElement("div");
    detail.classList.add("shows__description");
    table.appendChild(detail);

    //labels
    let detailLabel = document.createElement("div");
    detailLabel.classList.add("shows__description--label");
    detail.appendChild(detailLabel);

    //date label
    let dateLabel = document.createElement("h3");
    dateLabel.classList.add("shows__description--label-date");
    detailLabel.appendChild(dateLabel);
    dateLabel.innerText = "DATE";

    //venue label
    let venueLabel = document.createElement("h3");
    venueLabel.classList.add("shows__description--label-venue");
    detailLabel.appendChild(venueLabel);
    venueLabel.innerText = "VENUE";

    //location label
    let locationLabel = document.createElement("h3");
    locationLabel.classList.add("shows__header-container--location");
    detailLabel.appendChild(locationLabel);
    locationLabel.innerText = "LOCATION";

    //button
    let buttonLabel = document.createElement("button");
    buttonLabel.classList.add("shows__header-container--button");
    detailLabel.appendChild(buttonLabel);

    buttonLabel.innerText = "BUY TICKETS";

    for (let i = 0; i < shows.length; i++) 
    {
        let dataContainer = document.createElement("div");
        dataContainer.classList.add("shows__data");
        detail.appendChild(dataContainer);
        
        // data Date
        let dataDate = document.createElement("h3");
        dataDate.classList.add("shows__data--date-label");
        dataContainer.appendChild(dataDate);
        dataDate.innerText = "DATE";

        let date = document.createElement("h4");
        date.classList.add("shows__data--date");
        dataContainer.appendChild(date);

        date.innerText = arr[i]["date"];

         //Venues
        let dataVenue = document.createElement("h3");
        dataVenue.classList.add("shows__data--venue-label");
        dataContainer.appendChild(dataVenue);
        dataVenue.innerText = "VENUE";

        let venue = document.createElement("h4");
        venue.classList.add("shows__data--venue");
        dataContainer.appendChild(venue);

        venue.innerText = arr[i]["venue"];

        //Location
        let dataLocation = document.createElement("h3");
        dataLocation.classList.add("shows__data--location-label");
        dataContainer.appendChild(dataLocation);
        dataLocation.innerText = "LOCATION";

        let location = document.createElement("h4");
        location.classList.add("shows__data--location");
        dataContainer.appendChild(location);

        location.innerText = arr[i]["location"];

        //Button
        let dataButton = document.createElement("div");
        dataButton.classList.add("shows__data--button-div");
        dataContainer.appendChild(dataButton);

        let button = document.createElement("button");
        button.classList.add("shows__data--button");
        dataButton.appendChild(button);

        button.innerText = "BUY TICKETS";

    }
}    
ShowsDetail(shows);