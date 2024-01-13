import { GetMembershipPackages } from '@/networks/apis/MembershipPackagesAPIs'
import React from 'react'

const page = async () => {
    const a = await GetMembershipPackages();

  return (
    <div>{a.totalItem}</div>
  )
}

export default page