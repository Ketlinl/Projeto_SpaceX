import {
  IonCard,
  IonCol,
  IonGrid,
  IonImg,
 
  IonRow,
} from '@ionic/react'
import React from 'react'
import {  useLaunchNextQuery } from '../generated/graphql'
import noPhoto from '../assets/images/no-photo.svg'
import styles from './LaunchesItem.module.scss'


const LauncheNext: React.FC = () => {
  const { data } = useLaunchNextQuery({})

  return (
    <IonGrid fixed>
      <IonRow>
        <IonCol size="12" sizeSm="6" sizeLg="4">
          <IonCard
            button
            className={styles.card}
            routerLink={`/launchenext/${data?.launchNext.id}`}
            // faz a animação de redirecionamento
          >
            <IonImg
              src={data?.launchNext.links.flickr_images[0] || noPhoto}
              className={styles.img}
            />
            <h2 className={styles.cardTitle}>
              {data?.launchNext.mission_name}
            </h2>
            <p className={styles.cardSubtitle}>{data?.launchNext.rocket.rocket_name}</p>
          </IonCard>
        </IonCol>
      </IonRow>
    </IonGrid>
  )
}

export default LauncheNext
