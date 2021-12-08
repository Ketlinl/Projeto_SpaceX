import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonText,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import React from 'react'
import { Components } from '@ionic/core'
import { navigateCircle, newspaper, paperPlane, send } from 'ionicons/icons'

interface Link {
  path: string
  title: string
  icon: any
  direction: 'none' | 'forward' | 'back'
}

//Partial deixa o elemento opcional
interface Props extends Partial<Components.IonMenu> {
  title?: string
  toolbarColor?: string
  links?: Link[] //array de links
}

const defaultLinks: Link[] = [
  {
    path: '/launchenext',
    title: 'Próximo Lançamento',
    icon: paperPlane,
    direction: 'back',
  },
  {
    path: '/',
    title: 'Último Lançamento',
    icon: send,
    direction: 'back',
  },
  {
    path: '/',
    title: 'Próximos Lançamentos',
    icon: navigateCircle,
    direction: 'back',
  },
  {
    path: '/launches',
    title: 'Lançamentos passados',
    icon: newspaper,
    direction: 'back',
  },
]

const Menu: React.FC<Props> = props => {
  const {
    title = 'Menu',
    toolbarColor = 'secondary',
    contentId = 'main-content',
    links = defaultLinks,
    ...rest
  } = props
  return (
    <IonMenu contentId={contentId} {...rest}>
      <IonHeader>
        <IonToolbar color={toolbarColor}>
          <IonTitle className="titleAl">{title}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonList lines="none">
          <IonMenuToggle menu={props.menuId} autoHide={false}>
            {links.map(link => (
              <IonItem
                key={link.path}
                button
                routerLink={link.path}
                routerDirection={link.direction}
              >
                <IonIcon icon={link.icon} color={toolbarColor} slot="start" />
                <IonText color={toolbarColor}>{link.title}</IonText>
              </IonItem>
            ))}
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>
  )
}

export default Menu
//button - para ter comportamento de botão
