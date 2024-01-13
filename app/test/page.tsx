import { GetMembershipPackages } from "@/networks/apis/MembershipPackagesAPIs";
import dynamic from "next/dynamic";
import React from "react";

const page =  () => {
  const a =  GetMembershipPackages();

  return <div>{a.then(res => res.totalItem)}</div>;
};

export default dynamic(() => Promise.resolve(page), { ssr: false });
