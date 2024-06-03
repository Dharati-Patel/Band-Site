import BandSiteApi from "./band-site-api.js";

const apiKey = '3c710c1a-8ca8-4bae-93af-65c38573275d';
const bandSiteApi = new BandSiteApi(apiKey);

function ShowsDetail(showsData) {
    let table = document.querySelector(".shows__container");

    // Clear existing content
    table.innerHTML = '';

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
    locationLabel.classList.add("shows__description--label-location");
    detailLabel.appendChild(locationLabel);
    locationLabel.innerText = "LOCATION";

    //button label
    let buttonLabel = document.createElement("div");
    buttonLabel.classList.add("shows__description--label-button");
    detailLabel.appendChild(buttonLabel);

    //button
    let button = document.createElement("button");
    button.classList.add("shows__description--label-button-text");
    buttonLabel.appendChild(button);
    button.innerText = "BUY TICKETS";

    for (let i = 0; i < showsData.length; i++) {
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

        const options = { weekday: 'short', year: 'numeric', month: 'short', day: '2-digit' };
        const formattedDate = new Date(showsData[i].date).toLocaleDateString('en-US', options).replace(/,/g, '');
        date.innerText = formattedDate;

        //Venues
        let dataVenue = document.createElement("h3");
        dataVenue.classList.add("shows__data--venue-label");
        dataContainer.appendChild(dataVenue);
        dataVenue.innerText = "VENUE";

        let venue = document.createElement("h4");
        venue.classList.add("shows__data--venue");
        dataContainer.appendChild(venue);
        venue.innerText = showsData[i].place;

        //Location
        let dataLocation = document.createElement("h3");
        dataLocation.classList.add("shows__data--location-label");
        dataContainer.appendChild(dataLocation);
        dataLocation.innerText = "LOCATION";

        let location = document.createElement("h4");
        location.classList.add("shows__data--location");
        dataContainer.appendChild(location);
        location.innerText = showsData[i].location;

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

async function loadShowsData() {
    const showsData = await bandSiteApi.getShowData();
    ShowsDetail(showsData);
   
}

document.addEventListener('DOMContentLoaded', loadShowsData);

