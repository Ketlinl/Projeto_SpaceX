import gql from 'graphql-tag'
//lista de lancamentos que ja aconteceram
export const LAUNCHES_PAST_QUERY = gql`
  query LaunchesPast($limit: Int, $offset: Int) {
    launchesPast(limit: $limit, offset: $offset) {
      launch_date_local
      links {
        flickr_images
      }
      rocket {
        rocket_name
      }
      id
      mission_name
    }
  }
`
//query dos detalhes de uma lancamento que ja ocorreu
//ID! - obrigatório
export const LAUNCHE_QUERY = gql`
  query Launch($id: ID!) {
    launch(id: $id) {
      details
      id
      launch_date_utc
      launch_success
      links {
        flickr_images
        mission_patch_small
      }
      mission_name
      rocket {
        rocket_name
      }
    }
  }
`
//query de proximo lancamento
export const LAUNCH_NEXT_QUERY = gql`
  query LaunchNext {
    launchNext {
      launch_date_local
      links {
        flickr_images
      }
      id
      mission_name
      rocket {
        rocket_name
      }
    }
  }
`
//query de proximos lancamentos

export const LAUNCHES_UPCOMIMG_QUERY = gql`
  query LaunchesUpcoming($limit: Int, $offset: Int) {
    launchesUpcoming(limit: $limit, offset: $offset) {
      id
      launch_date_local
      links {
        flickr_images
      }
      mission_name
      rocket {
        rocket_name
      }
    }
  }
`
