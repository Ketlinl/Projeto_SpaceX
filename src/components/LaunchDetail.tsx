import {
  IonAvatar,
  IonCard,
  IonCardContent,
  IonCol,
  IonIcon,
  IonImg,
  IonItem,
  IonRow,
  IonText,
  IonThumbnail,
} from '@ionic/react'
import React from 'react'
import { Launch } from '../generated/graphql'
import { checkmark, close } from 'ionicons/icons'
import styles from './LaunchDetail.module.scss'
import noPhoto from '../assets/images/no-photo.svg'

interface Props {
  launch: Launch
  onSelectImage?: (url: string) => void
}

const LaunchDetail: React.FC<Props> = props => {
  const { launch, onSelectImage = () => null } = props

  return (
    <IonCard>
      <IonItem lines="none">
        <IonAvatar slot="start">
          <IonImg src={launch.links.mission_patch_small} />
        </IonAvatar>
        <IonText color="dark">
          <h2 className="ion-no-margin">{launch.mission_name}</h2>
          <p className="ion-no-margin">{launch.rocket.rocket_name}</p>
        </IonText>
        <IonIcon
          slot="end"
          color={launch.launch_success ? 'sucsess' : 'danger'}
          icon={launch.launch_success ? checkmark : close}
        />
      </IonItem>
      <IonImg
        src={launch.links.flickr_images[0] || noPhoto}
        className={styles.img}
      />
      <IonCardContent>{launch.details}</IonCardContent>
      {launch.links.flickr_images.length ? (
        <IonCardContent>
          <IonRow>
            {launch.links.flickr_images.map(image => (
              <IonCol key={image} size="3">
                <IonThumbnail
                  className={styles.thumb}
                  onClick={() => onSelectImage(image)}
                >
                  <IonImg src={image} />
                </IonThumbnail>
              </IonCol>
            ))}
          </IonRow>
        </IonCardContent>
      ) : null}
    </IonCard>
  )
}

export default LaunchDetail

//color={launch.launch_success ? 'sucsess' : 'danger'}
//se o lancamento aconteceu com sucesso a cor vai ser success
//se não a cor será danger
//-------------------------------------------------------------------
//launch.links.flickr_images.map - cada interação vai receber um img com retorno do tsx
//-------------------------------------------------------------------
//src={launch.links.flickr_images[0] || noPhoto
//se tiver alguma imagem utiliza ela se nao tiver coloca a imagem do foguete
//-------------------------------------------------------------------
//launch.links.flickr_images.length ?
// se tiver alguma imagem eele exibe se for null eu não renderizo nada na tela
