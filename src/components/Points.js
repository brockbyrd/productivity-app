import { Icon } from 'semantic-ui-react'
export default function DecorationContainer({ overallPoints }) {

    return(
        <>
          <h1><Icon name="star"/>{overallPoints}</h1>
        </>
    )
}