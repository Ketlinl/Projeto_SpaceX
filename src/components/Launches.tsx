import { IonButton, IonCol, IonGrid, IonLoading, IonRow } from '@ionic/react'
import React, { useCallback, useEffect, useState } from 'react'
import { Launch, useLaunchesPastQuery } from '../generated/graphql'
import LaunchesItem from './LaunchesItem'

const Launches: React.FC = () => {
  const { data, loading, fetchMore } = useLaunchesPastQuery({
    variables: { limit: 12, offset: 0 },
  })
  //guarda offset de paginacao
  const [offset, setOffset] = useState(0)
  const [limit] = useState(12)
  //quando acabar os registros
  const [finished, setFinished] = useState(false)

  const handleLoadMore = useCallback(() => setOffset(limit + offset), [
    limit,
    offset,
  ])

  useEffect(() => {
    if (offset > 0) {
      fetchMore<'offset'>({
        variables: {
          offset,
        },
        updateQuery(previous, { fetchMoreResult }) {
          if (!fetchMoreResult) {
            return previous
          }
          if (fetchMoreResult.launchesPast.length < limit) {
            setFinished(true)
          }
          return {
            //tudo o que tinha em previous
            ...previous,
            launchesPast: [
              ...previous.launchesPast,
              ...fetchMoreResult.launchesPast,
            ],
          }
        },
      })
    }
  }, [fetchMore, limit, offset])
  // se tiver carregando dados
  if (loading) {
    return <IonLoading isOpen={loading} message="Carregando..." />
  }
  return (
    <IonGrid fixed>
      <IonRow>
        {data &&
          data.launchesPast.map(launch => (
            <IonCol key={launch.id} size="12" sizeSm="6" sizeLg="4">
              <LaunchesItem launch={launch as Launch} />
            </IonCol>
          ))}
      </IonRow>
      {!loading && !finished ? (
        <IonRow>
          <IonCol>
            <IonButton expand="block" onClick={handleLoadMore}>
              Ler Mais ...
            </IonButton>
          </IonCol>
        </IonRow>
      ) : null}
    </IonGrid>
  )
}

export default Launches
