import dynamic from "next/dynamic";
import React, { Component } from "react";
import { EmbedProps } from 'powerbi-client-react';
import PowerBiDynamic from "@/component/PowerBiDynamic";


const HomePage = () => {
  return (
    <div className="border h-screen">
    <PowerBiDynamic/>
    </div>
  )
}

export default HomePage