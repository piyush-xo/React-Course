import { useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
  const loaderData = useLoaderData();
  return <EventsList events={loaderData.events} />;
}

export default EventsPage;

export async function loader() {
  // loader function gets executed even before the page is opened by react,
  // in other words, React will load the page only after the loader function completes it's execution
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return response object with error and catch it in the ui
    throw new Response(JSON.stringify({ message: "Could not fetch events." }), {
      status: 500,
    });
  } else {
    return response;
  }
}
