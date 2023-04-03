import { json, redirect, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetailPage = (props) => {
  const loaderData = useRouteLoaderData("event-detail");
  return <EventItem event={loaderData.event} />;
};

export default EventDetailPage;

export async function loader({ request, params }) {
  const id = params.eventId;
  console.log(id);
  const response = await fetch("http://localhost:8080/events/" + id);
  if (!response.ok) {
    throw json({ message: "Could not fetch event details." }, { status: 500 });
  } else {
    return response;
  }
}

export async function action({ params, request }) {
  const eventId = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + eventId, {
    method: request.method,
  });

  if (!response.ok) {
    throw json({ message: "Could not fetch event details." }, { status: 500 });
  }

  return redirect("/events");
}
