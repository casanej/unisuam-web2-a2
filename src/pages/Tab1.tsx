import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import Signin from "../Signin"
import SProfile from '../SProfile';
import{AuthProvider} from "../contexts/AuthContext"

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <AuthProvider>
          <Signin />
        </AuthProvider>
        <AuthProvider>
          <SProfile />
        </AuthProvider>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
