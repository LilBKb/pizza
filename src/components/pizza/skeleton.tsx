import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader 
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="140" cy="140" r="138" /> 
    <rect x="0" y="288" rx="10" ry="10" width="280" height="25" /> 
    <rect x="0" y="324" rx="10" ry="10" width="280" height="88" /> 
    <rect x="0" y="425" rx="10" ry="10" width="90" height="30" /> 
    <rect x="124" y="419" rx="30" ry="30" width="152" height="42" />
  </ContentLoader>
)

export default Skeleton

