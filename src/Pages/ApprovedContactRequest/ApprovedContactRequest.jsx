import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const ApprovedContactRequest = () => {
  const {
    data: contactRequested = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allUsers"], // Include id in queryKey to ensure query invalidation
    queryFn: async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/purchase-contacts`
      );
      return data;
    },
  });
  return (
    <div>
      Approved contact requests
      <div className="grid grid-cols-3 gap-4">
        {contactRequested?.map((contact) => (
          <div key={contact?._id} className="p-4 border-2">
            <p>{contact?.email}</p>
            <p>Biodata Id: {contact?.biodataId}</p>
            <p>Status: {contact?.status}</p>

            <Button variant="outline">
              <p>Make Premium</p>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApprovedContactRequest;
