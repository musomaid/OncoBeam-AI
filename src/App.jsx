import { useMemo, useState } from 'react';
import MainLayout from './layouts/MainLayout';
import { HomeScreen, AssistScreen, TreatmentScreen, AnalyticsScreen, ProfileScreen } from './screens';

export default function App() {
  const [tab, setTab] = useState('home');
  const screen = useMemo(() => ({ home: <HomeScreen />, assist: <AssistScreen />, treatment: <TreatmentScreen />, analytics: <AnalyticsScreen />, profile: <ProfileScreen /> }[tab]), [tab]);
  return <MainLayout tab={tab} setTab={setTab}>{screen}</MainLayout>;
}
