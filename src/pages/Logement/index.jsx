import { useParams } from 'react-router-dom'
import { getAppart } from '../../service/data.js'
import styled from 'styled-components'
import Error from '../../components/Error'
import Collapse from '../../components/Collapse'
import TitleLocationTags from '../../components/TitleLocationTags'
import Rates from '../../components/Rates'
import Host from '../../components/Host'
import Gallery from '../../components/Gallery'

const Content = styled.div`
  padding: 0 50px; 

  @media screen and (max-width: 767px) {
    padding: 0 25px;
  }
`

const AppartInfos = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 30px;

  @media screen and (max-width: 767px) {
    flex-wrap: wrap;
    margin-top: 20px;
  }
`

const RatesAndHost = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column-reverse;

  @media screen and (max-width: 767px) {
    margin-top: 20px;
    flex-direction: row;
  }
`

const Collapses = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: space-between;
  & div {
    width: 100%;
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`

function Logement() {

  const { appartId } = useParams()
  const item = getAppart(appartId)
  return item.pictures === undefined ? (
    <Error />
  ) : (
    <Content>
      <Gallery appartPictures={item.pictures} />
      <AppartInfos>
        <TitleLocationTags
          appartTitle={item.title}
          appartLocation={item.location}
          appartTags={item.tags}
        />
        <RatesAndHost>
          <Rates appartRating={item.rating} />
          <Host appartHost={item.host} />
        </RatesAndHost>
      </AppartInfos>

      <Collapses>
        <Collapse title="Description" content={item.description} />
        <Collapse title="Équipements" content={item.equipments}  />
      </Collapses>
    </Content>
  )

}

export default Logement