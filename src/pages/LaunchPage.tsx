import React, { useCallback, useState } from 'react'
import {
  IonBackButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonLoading,
  IonModal,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import { useParams } from 'react-router'

import { Launch, useLaunchQuery } from '../generated/graphql'
import LaunchDetail from '../components/LaunchDetail'
import ImageViewer from '../components/ImageViewer'

const LaunchPage: React.FC = () => {
  //para não dar erro colocar o campo id como string
  const { id } = useParams<{ id: string }>()
  const { data, loading } = useLaunchQuery({
    variables: { id },
  })

  const [selectedImage, setSelectedImage] = useState('')
  const handleSelectImage = useCallback((url: string) => {
    console.log('Selected: ', url)
    setSelectedImage(url)
  }, [])

  const handleModalClose = useCallback(() => setSelectedImage(''), [])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/launches" />
          </IonButtons>
          <IonTitle className="titleAl">Detalhes da Missão</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        {loading ? (
          <IonLoading isOpen={loading} message="Carregando..." />
        ) : (
          <IonGrid fixed>
            <IonRow>
              <IonCol>
                <LaunchDetail
                  launch={data!.launch as Launch}
                  onSelectImage={handleSelectImage}
                />
              </IonCol>
            </IonRow>
          </IonGrid>
        )}
      </IonContent>
      <IonModal isOpen={!!selectedImage} onDidDismiss={handleModalClose}>
        <ImageViewer src={selectedImage} onClose={handleModalClose} />
      </IonModal>
    </IonPage>
  )
}
export default LaunchPage

//isOpen={!!selectedImage}
//quando tiver uma imagem selecionada a negação da negação vai retornar true
// quando não tiver imagem vai retornar false
