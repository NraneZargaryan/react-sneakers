import React from "react"
import ContentLoader from "react-content-loader"

export const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={210}
    height={260}
    viewBox="0 0 210 260"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="13" y="12" rx="10" ry="10" width="150" height="91" /> 
    <rect x="15" y="128" rx="3" ry="3" width="150" height="15" /> 
    <rect x="113" y="124" rx="0" ry="0" width="0" height="1" /> 
    <rect x="73" y="145" rx="0" ry="0" width="1" height="0" /> 
    <rect x="14" y="151" rx="3" ry="3" width="93" height="15" /> 
    <rect x="14" y="190" rx="8" ry="8" width="80" height="25" /> 
    <rect x="130" y="183" rx="8" ry="8" width="32" height="32" />
  </ContentLoader>
)