import Card from "../Card";
import Window from "./Window";
import MetaLogo from '../images/meta.png';
import AmazonLogo from '../images/amazon.webp';
import UkgLogo from '../images/ukg.png';

export default function Work({ onDrag, zIndex, removeWindow }) {
  return (
    <Window
      className="work"
      zIndex={zIndex}
      onDrag={onDrag}
      removeWindow={removeWindow}
      windowString="work"
      key="work"
      title="WORK EXPERIENCE"
    >
      <div className="work">
        <Card
          title="META"
          icon={<img alt="Meta" style={{ width: 32 }} src={MetaLogo} />}
          size="sm"
          summary={`Briefly worked on an internal tool for performance logging before I was laid off due to the company's macroeconomic downturn. Committed nearly 4,000 lines of significant code in the first month of picking up a project.`}
        />
        <Card
          title="AMAZON"
          icon={<img alt="Amazon" style={{ width: 80, marginRight: -15 }} src={AmazonLogo} />}
          size="sm"
          summary={`Created an internal tool that provides product recall information for products at Amazon. Full stack development using modern AWS technologies such as CDK, Lambda, API gateway, and CloudFormation. Frontend created with React and backend in Java.`}
        />
        <Card
          title="UKG"
          icon={<img alt="UKG" style={{ width: 40 }} src={UkgLogo} />}
          size="sm"
          summary={`Worked as a software engineer intern, helped develop and test accessibility features for UKG's flagship mobile app, UKG pro.`}
        />
      </div>
    </Window>
  );
}
