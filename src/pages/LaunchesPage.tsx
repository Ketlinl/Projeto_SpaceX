import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import Launches from '../components/Launches'

const LaunchesPage: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        <IonTitle className="titleAl">Lançamentos Passados</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
      <Launches />
    </IonContent>
  </IonPage>
)

export default LaunchesPage
