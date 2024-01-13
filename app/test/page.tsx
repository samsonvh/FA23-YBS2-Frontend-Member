import { GetMembershipPackages } from "@/networks/apis/MembershipPackagesAPIs";
import dynamic from "next/dynamic";
import React from "react";

const page = async () => {
  const a = await GetMembershipPackages();

  return <div>{a.totalItem}</div>;
};

export default dynamic(() => Promise.resolve(page), { ssr: false });
