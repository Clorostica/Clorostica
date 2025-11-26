import LiquidEther from "./LiquidEther";

const LiquidEtherDemo = () => {
  return (
    <div style={{ width: "100%", height: 600, position: "relative" }}>
      <LiquidEther autoResumeDelay={500} />
    </div>
  );
};

export default LiquidEtherDemo;
