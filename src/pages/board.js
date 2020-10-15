import React from 'react'
import Layout from '../components/layout'
import AltHeader from '../components/AltHeader'
import Footer from '../components/Footer'
// Import board component
import Board from '../components/Board'
// Import all (eboard + event chairs) members by First(Last)
import * as BoardMembers from '../components/_boardmembers'
import Member from '../components/Member'

// IMPORTANT: must import, otherwise URL error
import bgimg from '../assets/images/apahm-2018-light.jpg'

const BoardPage = ({ transition }) => (
  <Layout>
    <div style={transition && transition.style}>
      <AltHeader
        page='board'
        background={'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.13)),url(' + bgimg + ')'}
        pageTitle='Meet the Board'
        banner_sub1=''
        banner_sub2=''
      />
      <Board
        className='eboard'
        teamname='Eboard 2020-2021'
        description=''
      >
        <Member
          href=''
          title=''
          alt='Ling Groccia'
          imgsrc={BoardMembers.Ling}
          name='Ling Groccia'
          class='Barnard 2021'
          position='Co-President'
        />
        <Member
          href=''
          title=''
          alt='Julia Angkeow'
          imgsrc={BoardMembers.Julia}
          name='Julia Angkeow'
          class='CC 2022'
          position='Co-President'
        />
        <Member
          href=''
          title=''
          alt='Jessie Zhang'
          imgsrc={BoardMembers.Jessie}
          name='Jessie Zhang'
          class='Barnard 2023'
          position='Secretary'
        />
        <Member
          href=''
          title=''
          alt='Jady Tian'
          imgsrc={BoardMembers.Jady}
          name='Jady Tian'
          class='SEAS 2021'
          position='Co-Treasurer'
        />
        <Member
          href=''
          title=''
          alt='Andrew Huen'
          imgsrc={BoardMembers.Andrew}
          name='Andrew Huen'
          class='CC 2021'
          position='Co-Treasurer'
        />
        <Member
          href=''
          title=''
          alt='Shannon Hui'
          imgsrc={BoardMembers.Shannon}
          name='Shannon Hui'
          class='Barnard 2022'
          position='Co-Opening Ceremony Chair'
        />
        <Member
          href=''
          title=''
          alt='Sydnie Ito'
          imgsrc={BoardMembers.Sydnie}
          name='Sydnie Ito'
          class='CC 2022'
          position='Co-Opening Ceremony Chair'
        />
        <Member
          href=''
          title=''
          alt='Sophia Jao'
          imgsrc={BoardMembers.Sophia}
          name='Sophia Jao'
          class='Barnard 2022'
          position='Marketing Chair'
        />
        <Member
          href=''
          title=''
          alt='Janice Ng'
          imgsrc={BoardMembers.Janice}
          name='Janice Ng'
          class='CC 2022'
          position='Design Chair'
        />
        <Member
          href=''
          title=''
          alt='Isaac Quiles'
          imgsrc={BoardMembers.Isaac}
          name='Isaac Quiles'
          class='CC 2022'
          position='Social Chair'
        />
        <Member
          href=''
          title=''
          alt='James Xu'
          imgsrc={BoardMembers.James}
          name='James Xu'
          class='SEAS 2021'
          position='Webmaster'
        />
      </Board>
       <Board
        className='senioradvisors'
        teamname='Senior Advisors 2020-21'
        description=''>
        <Member
          href=''
          title=''
          alt='Claudia Chung'
          imgsrc={BoardMembers.Claudia}
          name='Claudia Chung'
          class='CC 2021'
          position='Senior Advisor'
        />
        <Member
          href=''
          title=''
          alt='Yuki Mitsuda'
          imgsrc={BoardMembers.Yuki}
          name='Yuki Mitsuda'
          class='Barnard 2021'
          position='Senior Advisor'
        />
        <Member
          href=''
          title=''
          alt='Tracy Chen'
          imgsrc={BoardMembers.Tracy}
          name='Tracy Chen'
          class='CC 2021'
          position='Senior Advisor'
        />
        <Member
          href=''
          title=''
          alt='Cheif Joseph Lynch'
          imgsrc={BoardMembers.Cheif}
          name='Cheif Joseph Lynch'
          class='CC 2021'
          position='Senior Advisor'
        />
      </Board>
      <Board
        className='generalboard'
        teamname='General Board 2020-21'
        description=''>
        <Member
          href=''
          title=''
          imgsrc={BoardMembers.Alyssa}
          name='Alyssa Sales'
          class='CC 2023'
          position='General Board'
        />
        <Member
          href=''
          title=''
          imgsrc={BoardMembers.Eric}
          name='Eric Che'
          class='CC 2023'
          position='General Board'
        />
        <Member
          href=''
          title=''
          imgsrc={BoardMembers.Annie}
          name='Annie Tan'
          class='CC 2023'
          position='General Board'
        />
        <Member
          href=''
          title=''
          imgsrc={BoardMembers.Karuna}
          name='Karuna Vikram'
          class='CC 2023'
          position='General Board'
        />
        <Member
          href=''
          title=''
          imgsrc={BoardMembers.Sam}
          name='Sam Azanza'
          class='Barnard 2022'
          position='General Board'
        />
      </Board>
      <Footer />
    </div>
  </Layout>
)

export default BoardPage
