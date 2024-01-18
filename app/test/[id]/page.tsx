import { GetMembershipPackages } from "@/networks/apis/MembershipPackagesAPIs";
import dynamic from "next/dynamic";
import React from "react";

const page =  ({params}) => {
  const a =  GetMembershipPackages();

  return <div>{a.then(res => res.pageSize)}</div>;
};

export default dynamic(() => Promise.resolve(page), { ssr: false });
