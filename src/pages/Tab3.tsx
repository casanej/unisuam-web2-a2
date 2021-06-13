import { IonContent, IonHeader, IonList, IonPage, IonTitle, IonToolbar, IonItem, IonLabel } from '@ionic/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import { timeSinceAgo } from '../utils/date';

const Tab3: React.FC = () => {
  const { username } = useParams<{ username?:string; }>();
  const [repOwnerName, setRepOwnerName] = useState<string>('');
  const [userRepos, setUserRepos] = useState<any[]>([]);

  const getUserRepos = async () => {
    if(repOwnerName){
        const response = await axios.get(`https://api.github.com/users/${repOwnerName}/repos`);
    
        if(response.status === 200) {
          setUserRepos(response.data)
        }
        console.log('[RESPONSE]', response);
    }
  }

  useEffect(() => {
    if(username) setRepOwnerName(username);
  }, [username])

  useEffect(() => { getUserRepos(); }, [repOwnerName])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Listagem de Repositórios de: {repOwnerName} </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {
            userRepos.map(repo => <IonItem key={repo.id} href={repo.html_url} target='_blank'>
              <IonLabel>{repo.name}</IonLabel>
              <IonLabel>Stars: {repo.stargazers_count}</IonLabel>
              <IonLabel>Forks: {repo.forks_count}</IonLabel>
              <IonLabel>Watchers: {repo.watchers}</IonLabel>
              <IonLabel>Ultimo Update: {timeSinceAgo(repo.updated_at)}</IonLabel>
            </IonItem>)
          }
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
