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
import Badges from './components/Badges';
import { promises as fs } from 'fs';
import Stack from 'react-bootstrap/Stack';

export default async function Home() {
  const file = await fs.readFile(process.cwd() + '/app/members.json', 'utf-8');
  const memberData = JSON.parse(file);
  
  return (
    <>
    <NewsNavbar />
    <main style={{backgroundColor: 'white'}} >
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
        <Stack gap={3}>
        <Row>
          <Container>
            <p>New Members</p>
            <Stack gap={3}>
            {memberData.members.map((member) => (
              <MemberCard key={member.email} member={member}>
            </MemberCard>
            ))}
            </Stack>          
          </Container>
        </Row>
        <Row>
          <Container>
          <QuestsCard></QuestsCard>
          </Container>
        </Row>
          </Stack>
        </Col>      
        <Col xs={4}>  
        <Stack gap={3}>
        <Row>
          <Container>
          <UpdatesCard>
          </UpdatesCard>
          </Container>
        </Row>
        <Row>
          <Container>
          <PostUpdateCard></PostUpdateCard>
          </Container>
        </Row>
        </Stack>
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
