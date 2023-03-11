import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={220}
    height={327}
    viewBox="0 0 220 327"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="-2" y="-1" rx="0" ry="0" width="220" height="220" /> 
    <rect x="-3" y="230" rx="0" ry="0" width="220" height="24" /> 
    <rect x="184" y="266" rx="0" ry="0" width="30" height="24" /> 
    <rect x="184" y="298" rx="0" ry="0" width="30" height="24" />
  </ContentLoader>
)

export default MyLoader
