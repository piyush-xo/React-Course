import { useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetailPage = (props) => {
  const loaderData = useRouteLoaderData('event-detail');
  return <EventItem event={loaderData.event} />;
};

export default EventDetailPage;

export async function loader({request, params}) {
  const id = params.eventId;
  console.log(id);
  const response = await fetch("http://localhost:8080/events/" + id);
  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Could not fetch event details." }), {
      status: 500,
    });
  }
  else {
    return response;
  }
}
