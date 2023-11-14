import dynamic from "next/dynamic";
import React, { Component } from "react";

import { models } from 'powerbi-client';

const PowerBIEmbed = dynamic<any>(() => import('powerbi-client-react').then(m => m.PowerBIEmbed), { ssr: false });

const PowerBiDynamic = () => {


  const id = "cede963f-fb37-4dff-bfd2-f924f15232cd";
  const embedUrl = "https://app.powerbi.com/groups/a6394b3f-ae2e-47d4-a80f-9630b43738e0/reports/cede963f-fb37-4dff-bfd2-f924f15232cd/ReportSectiondecccb8482fa6cf4f797?experience=power-bi";
  const accessToken = "eyJ0eXAiOiJKV1QiLCJub25jZSI6ImRtQmFyZmdHNW9jZnEtV0szTmZHTU5NYXdYblJFYW5ibG9CaWxmRXhjdXMiLCJhbGciOiJSUzI1NiIsIng1dCI6IjlHbW55RlBraGMzaE91UjIybXZTdmduTG83WSIsImtpZCI6IjlHbW55RlBraGMzaE91UjIybXZTdmduTG83WSJ9.eyJhdWQiOiJodHRwczovL2dyYXBoLm1pY3Jvc29mdC5jb20iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9hMjRjZDMzOS0yMWIyLTQyZmEtOTViMC05ODI1OWJkZDQ2YzcvIiwiaWF0IjoxNjk5OTI5NTg5LCJuYmYiOjE2OTk5Mjk1ODksImV4cCI6MTY5OTkzMzQ4OSwiYWlvIjoiRTJWZ1lGQ2V6TE9nWnlWL2pNZnI3eHRscmlUa0F3QT0iLCJhcHBfZGlzcGxheW5hbWUiOiJteS1maXJzdC1lbWJlZGRlZCIsImFwcGlkIjoiMzg3NjAyZTMtMTJkNC00MTY3LWEzZmMtNTMyMGFkOGQxYWVlIiwiYXBwaWRhY3IiOiIxIiwiaWRwIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvYTI0Y2QzMzktMjFiMi00MmZhLTk1YjAtOTgyNTliZGQ0NmM3LyIsImlkdHlwIjoiYXBwIiwib2lkIjoiNzgwMmEzYzctMmMxNi00MzM4LWIwMDctNTQ2OGM1Njk2NDlhIiwicmgiOiIwLkFWRUFPZE5Nb3JJaC1rS1ZzSmdsbTkxR3h3TUFBQUFBQUFBQXdBQUFBQUFBQUFEUUFBQS4iLCJzdWIiOiI3ODAyYTNjNy0yYzE2LTQzMzgtYjAwNy01NDY4YzU2OTY0OWEiLCJ0ZW5hbnRfcmVnaW9uX3Njb3BlIjoiU0EiLCJ0aWQiOiJhMjRjZDMzOS0yMWIyLTQyZmEtOTViMC05ODI1OWJkZDQ2YzciLCJ1dGkiOiJxbHVTajJNZnEwSzZaNms4WTV5dEFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyIwOTk3YTFkMC0wZDFkLTRhY2ItYjQwOC1kNWNhNzMxMjFlOTAiXSwieG1zX3RjZHQiOjE2OTk3OTc2NDV9.u_-sUsCPMiqp4rAy2fmsmLjw5YfZY_8Dkd9fdE9muQOeh3I-zjCngx0xoxBO-XcXHPqtGT9-NqCmTcEQyML-8hD4yYtjOfkfOD0G9no9Xbs4FGUSAAPB75hUGIAowLpVq0mMoY736sKQE9KYhpFIgdbohwpQHy312nMO9HZfk0S_w1Fl-3w8PTm-LQVBTpfi7VlCowTY2ebyj5nF4iYEd-II3ULr1OWfFcD-Ls7ZmSQLtHbLYW33Eh9qX-TPTcg2q-hA-zF2fHnyAQwGcIsAXRigecG5DM_uWq2U4vQc-0BVcrUnGfxq9wCqZAHeszBcjAq0Hyt3kphByXoxlnpl7Q";
  const filterPaneEnable = "";
  const pageName = "Página 1";
  const embedType = 1;
  const tokenType = 1;
  const permissions = "View";
  const embedOptions = {
    width: '100%',
    height: '800px', // Set your desired height here
  };

  return (
     <div className="">
        <PowerBIEmbed
        cssClassName={"report-style-class"}
         	embedConfig = {{
            type: 'report',   // Supported types: report, dashboard, tile, visual, qna and paginated report
            id: id,
            embedUrl: embedUrl,
            accessToken: accessToken,    // Keep as empty string, null or undefined
            tokenType: tokenType,
            permissions: 7,
            settings: {
              panes: {
                  filters: {
                      expanded: false,
                      visible: false
                  }
              },
              
          }
          }}

          embedOptions={
            {
              height: '1000px'
            }
          }
          />
      </div>
  );
}

export default PowerBiDynamic
