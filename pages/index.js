import { useEffect } from "react";
import { useDispatch } from "./_context";

export default function Index() {
  const dispatch = useDispatch();

  useEffect(() => {
    const dispatchForm = {
      type: "/",
    };

    dispatch(dispatchForm);
  }, [dispatch]);

  return null;
}
