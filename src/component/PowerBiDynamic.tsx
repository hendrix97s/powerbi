import dynamic from "next/dynamic";
import React, { Component } from "react";

import { models } from 'powerbi-client';

const PowerBIEmbed = dynamic<any>(() => import('powerbi-client-react').then(m => m.PowerBIEmbed), { ssr: false });
// const models = dynamic<any>(() => import('powerbi-client').then(m => m.models), { ssr: false });

const PowerBiDynamic = () => {


  const id = "a24cd339-21b2-42fa-95b0-98259bdd46c7";
  const embedUrl = "https://app.powerbi.com/links/VNSBLXKvY0?ctid=a24cd339-21b2-42fa-95b0-98259bdd46c7&pbi_source=linkShare";
  const accessToken = "eyJ0eXAiOiJKV1QiLCJub25jZSI6ImYtZXpkQU9seFpWSVN4Q21UbXk1dXFKYXNUVWNJdm5KRzRMbWJpMVU3cGciLCJhbGciOiJSUzI1NiIsIng1dCI6IjlHbW55RlBraGMzaE91UjIybXZTdmduTG83WSIsImtpZCI6IjlHbW55RlBraGMzaE91UjIybXZTdmduTG83WSJ9.eyJhdWQiOiJodHRwczovL2dyYXBoLm1pY3Jvc29mdC5jb20iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9hMjRjZDMzOS0yMWIyLTQyZmEtOTViMC05ODI1OWJkZDQ2YzcvIiwiaWF0IjoxNjk5OTM0NjEzLCJuYmYiOjE2OTk5MzQ2MTMsImV4cCI6MTY5OTkzODUxMywiYWlvIjoiRTJWZ1lIQ1l2RmJxeUx1WXNCdUYxOTRJcnFyWURBQT0iLCJhcHBfZGlzcGxheW5hbWUiOiJteS1maXJzdC1lbWJlZGRlZCIsImFwcGlkIjoiMzg3NjAyZTMtMTJkNC00MTY3LWEzZmMtNTMyMGFkOGQxYWVlIiwiYXBwaWRhY3IiOiIxIiwiaWRwIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvYTI0Y2QzMzktMjFiMi00MmZhLTk1YjAtOTgyNTliZGQ0NmM3LyIsImlkdHlwIjoiYXBwIiwib2lkIjoiNzgwMmEzYzctMmMxNi00MzM4LWIwMDctNTQ2OGM1Njk2NDlhIiwicmgiOiIwLkFWRUFPZE5Nb3JJaC1rS1ZzSmdsbTkxR3h3TUFBQUFBQUFBQXdBQUFBQUFBQUFEUUFBQS4iLCJzdWIiOiI3ODAyYTNjNy0yYzE2LTQzMzgtYjAwNy01NDY4YzU2OTY0OWEiLCJ0ZW5hbnRfcmVnaW9uX3Njb3BlIjoiU0EiLCJ0aWQiOiJhMjRjZDMzOS0yMWIyLTQyZmEtOTViMC05ODI1OWJkZDQ2YzciLCJ1dGkiOiJiVzdxeG5yaURrZWw3TlkzOEphOUFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyIwOTk3YTFkMC0wZDFkLTRhY2ItYjQwOC1kNWNhNzMxMjFlOTAiXSwieG1zX3RjZHQiOjE2OTk3OTc2NDV9.ubrkmnC-ABp3131Bj-Ly2KzURJ-lbwhbraxC0fJL2q3nOrIEUDKPd9yKG62stm_2za3nxBRpTvHh3PWVDgk_ZZQQPFtAGAMHpdivB9YvIxSOjlismA36MmagdNS2NxKPtJnwgu8TSj5za99XYBShrC0-sxFFXFx_VqumJcEOKZbXENfKl5njgQSD-6b9SCMwPRJCFvMKA0Dx_ExvNWhn4fCU2vlLxIGijvFh_vcbNAvbLqZfQamd6PaumypvWZT0jJB_30ageG16CZOqAkK9YiZre4M51FdbVrf0sT9fJtlR699uFc8ARdoS7Jzhwzb_IXmsV_-QFK0m4yLZj8-QMg";
  const filterPaneEnable = "";
  const pageName = "Página 1";
  const embedType = 1;
  const tokenType = 1;
  // const permissions = "View";
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
