import "./index.css";
import { MyComposition } from "./Composition";
import { MeridianSecurityGameComposition } from "./SecurityGame";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <MeridianSecurityGameComposition />
      <MyComposition />
    </>
  );
};
