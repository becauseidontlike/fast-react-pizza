import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { updateName } from "../user/userSlice";
import { updateOrder } from "../../services/apiRestaurant";

function UpdateOrder({ order }) {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Add priority</Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;

export async function action({ request, params }) {
  console.log("update");
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}
