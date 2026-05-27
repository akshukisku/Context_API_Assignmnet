import * as LottieModule from "lottie-react";
import ErrorLoader from "../animation/ErrorPage.json";

const LottieComponent = (LottieModule as any).default ?? LottieModule;

const NotFound = () => {
  return (
    <div style={{ width: 300, height: 300 }}>
      <LottieComponent animationData={ErrorLoader} loop />
    </div>
  );
};

export default NotFound;