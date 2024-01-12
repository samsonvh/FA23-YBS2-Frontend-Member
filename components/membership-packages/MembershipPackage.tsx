import { IMembershipPackageListing } from "@/data/ResponseInterfaces";
import Link from "next/link";

const MembershipPackage = ({
  membershipPackage,
}: {
  membershipPackage: IMembershipPackageListing;
}) => {
  return (
    <form className="row y-gap-20">
      <div className="col-12">
        <h1 className="text-22 fw-500">{membershipPackage.name}</h1>
      </div>
      {/* End .col */}

      <div className="col-12">
        <button
          type="submit"
          className="button py-10 -dark-1 bg-blue-1 text-white w-100"
        >
          Sign Up <div className="icon-arrow-top-right ml-15" />
        </button>
      </div>
      {/* End .col */}
    </form>
  );
};

export default MembershipPackage;
