import React, { useState } from 'react';
import Layout from './components/Layout';
import CoursePlayer from './components/CoursePlayer';
import ReferralsHub from './components/ReferralsHub';
import SquadMatching from './components/SquadMatching';
import Scratchpad from './components/Scratchpad';
import { TabView } from './types';
import { CURRENT_USER } from './constants';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabView>(TabView.LEARNING);

  const renderContent = () => {
    switch (activeTab) {
      case TabView.LEARNING:
        return <CoursePlayer />;
      case TabView.CAREER:
        return <ReferralsHub />;
      case TabView.SQUADS:
        return <SquadMatching />;
      case TabView.COLLAB:
        return <Scratchpad />;
      default:
        return <CoursePlayer />;
    }
  };

  return (
    <Layout activeTab={activeTab} onTabChange={setActiveTab} user={CURRENT_USER}>
      {renderContent()}
    </Layout>
  );
};

export default App;
