'use client'

import React from "react"
import { CreateOrganization } from "@clerk/nextjs";

const CreateOrganizationPage = () => {
  return (
    <CreateOrganization afterCreateOrganizationUrl={"/dashboard"}/>
  )
}

export default CreateOrganizationPage