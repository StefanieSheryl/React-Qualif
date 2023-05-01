import {gql} from "@apollo/client"

export const GET_ALLDATA = gql`
query getArtist($name : String!){
    artist(name : $name){
      id
      name
      image
      albums{
        id
        name
        image
        tracks{
          id
          name
          preview_url
        }
      }
    }
}
`

export const GET_ALBUM = gql`
query getAlbum($id : String!){
    album(id : $id){
      id
      name
      image
      tracks{
        id
        name
        preview_url
      }
    }
}
`