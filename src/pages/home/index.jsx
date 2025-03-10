import { Suspense, lazy } from "react";
import { Loader } from "../../components";

const LazyLandingPage = lazy(() => import("./LandingPage"));

export const LandingPage = (props) => (
  <Suspense fallback={<Loader />}>
    <LazyLandingPage {...props} />
  </Suspense>
);
