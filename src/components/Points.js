import { Icon } from 'semantic-ui-react'
export default function DecorationContainer({ points }) {

    return(
        <>
          <h1><Icon name="star"/> {points}</h1>
        </>
    )
}