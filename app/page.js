import Image from 'next/image'
import styles from './page.module.css'
import NewsNavbar from './components/newsNavbar'
import SideMenu from './components/sideMenu'
import SideDrawer from './components/sideDrawer'
import Col from 'react-bootstrap/Col';
import Banner from './components/Banner';
import { Container, Row } from 'react-bootstrap';
import MemberCard from './components/MemberCard'
import QuestsCard from './components/QuestsCard'
import UpdatesCard from './components/UpdatesCard'
import PostUpdateCard from './components/PostUpdateCard'
import PopularGroupsCard from './components/PopularGroupsCard'
import Badges from './components/Badges'
export default function Home() {
  return (
    <>
    <NewsNavbar />
    <main style={{backgroundColor: 'red'}} >
      <Col>
    <SideDrawer />
    </Col>
    <Col>
      <Container className={styles.description}>
      <Row className="justify-content-md-center">
        <Banner />
      </Row>
      <Row>
        <Col>
        <Row>
          <Container>
          <MemberCard>
            
          </MemberCard>
          </Container>
        </Row>
        <Row>
          <Container>
          <QuestsCard></QuestsCard>
          </Container>
        </Row>

        </Col>
      
        <Col>  <Row>
          <UpdatesCard>

          </UpdatesCard>
        </Row>
        <Row>
          <PostUpdateCard></PostUpdateCard>
        </Row>
</Col>
        <Col>
        <Row>
          <Container>
            <PopularGroupsCard></PopularGroupsCard>
          </Container>
        </Row>
        <Row>
          <Container>
            <Badges />
          </Container>
        </Row>

        </Col>
      </Row>
      </Container>
      </Col>
    </main>
    </>
  )
}
