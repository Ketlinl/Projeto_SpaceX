import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import LauncheNext from '../components/LauncheNext'

const LauncheNextPage: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        <IonTitle className="titleAl">Próximo Lançamento</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
      <LauncheNext />
    </IonContent>
  </IonPage>
)

export default LauncheNextPage
