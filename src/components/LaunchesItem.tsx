import { IonCard, IonImg } from '@ionic/react'
import React from 'react'
import { Launch } from '../generated/graphql'
import { crop } from '../utils'
import styles from './LaunchesItem.module.scss'
import noPhoto from '../assets/images/no-photo.svg'

interface Props {
  launch: Launch
}

const LaunchesItem: React.FC<Props> = props => {
  const { launch } = props

  return (
    <IonCard
      button
      className={styles.card}
      routerLink={`/launches/${launch.id}`}
      // faz a animação de redirecionamento
    >
      <IonImg
        src={launch.links.flickr_images[0] || noPhoto}
        className={styles.img}
      />
      <h2 className={styles.cardTitle}>{crop(launch.mission_name, 15)}</h2>
      <p className={styles.cardSubtitle}>{launch.rocket.rocket_name}</p>
    </IonCard>
  )
}

export default LaunchesItem
