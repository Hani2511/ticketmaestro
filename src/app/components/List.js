import EventCard from "./EventCard";

export default function List() {

    const events = [{
        "id": "17GOvOG615my7_w",
        "name": "Jazz Sabbath",
        "venue": "Band On The Wall.",
        "date": "2025-02-12",
        "time": "20:00:00",
        "location": "Manchester",
        "url": "https://www.ada.ac.uk/ada-manchester"
      },
      {
        "id": "17GOvOG6153YNR7",
        "name": "Jazz Sabbath",
        "venue": "Kendal Brewery Arts Centre",
        "date": "2025-02-13",
        "time": "20:00:00",
        "location": "Cumbria",
        "url": "https://www.ada.ac.uk/ada-manchester"
      },
      {
        "id": "17GOvOG615KYH5",
        "name": "Random Name",
        "venue": "The Palace Theatre",
        "date": "2024-08-20",
        "time": "17:00:00",
        "location": "Manchester",
        "url": "https://www.ada.ac.uk/ada-manchester"
      }];


return (
  <div className="event-list">
    {events.map(event => <div key={event.id}><EventCard {...event}/></div>)}
  </div>
)
}