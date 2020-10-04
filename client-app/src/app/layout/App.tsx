import React, { useEffect, useContext } from 'react';
import { Container } from 'semantic-ui-react'
import Navbar from '../../features/nav/Navbar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import LoadingComponent from './LoadingComponent';
import ActivityStore from '../stores/activityStore';
import { observer } from 'mobx-react-lite';


const App = () => {
  const activityStore = useContext(ActivityStore);

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore]);

  if(activityStore.loadingInitial) return <LoadingComponent content="Loading activities..." />

  return (
    <React.Fragment>
      <Navbar />
        <Container style={{ marginTop: '7em' }}>
          <ActivityDashboard />
      </Container>
    </React.Fragment>
  );
}

export default observer(App);
