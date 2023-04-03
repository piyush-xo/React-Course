import { useRouteLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";

const EditEventPage = (props) => {
  const loaderData = useRouteLoaderData('event-detail');
  return <EventForm event={loaderData.event} />;
};

export default EditEventPage;
