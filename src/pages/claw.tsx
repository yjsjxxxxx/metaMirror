import NewsSection from '../components/Claw/NewsSection';
import ProcessCard from '../components/Claw/ProcessCard';
import CreativeRevolution from '../components/Claw/CreativeRevolution';
import ScenarioGrid from '../components/Claw/ScenarioGrid';
import VideoCaseSection from '../components/Claw/VideoCaseSection';
import Reshape from '../components/Claw/Reshape';
import OpenClaw from '../components/Claw/OpenClaw';
export default function clawPage() {
    return (
        <div className="flex flex-col space-y-20 mt-24 ">
            <OpenClaw />
            {/* <ProcessCard /> */}
            <CreativeRevolution />
            <ScenarioGrid />
            <VideoCaseSection />
            <NewsSection />
            <Reshape />
        </div>
    );
}
