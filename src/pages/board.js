import React from 'react'
import AltHeader from '../components/AltHeader'
import Footer from '../components/Footer'
// Import board component
import Board from '../components/Board'
// Import all (eboard + event chairs) members by First(Last), note last name is optional
import * as BoardMembers from '../components/_boardmembers'
import Member from '../components/Member'

// IMPORTANT: must import, otherwise URL error
import bgimg from '../assets/images/apahm-2018-light.jpg'

const BoardPage = ({transition}) => (
  <div style={transition && transition.style}>
    <AltHeader
      page='board'
      background={'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.13)),url(' + bgimg + ')'}
      pageTitle='Meet the Board'
      banner_sub1=''
      banner_sub2=''
      >
    </AltHeader>
    <Board
      className='eboard'
      teamname='Eboard 2018-2019'
      description=''
      >
      <Member
        href=''
        title=''
        alt='Anisa Marhull'
        imgsrc={BoardMembers.Anisa}
        name='Anisa Marhull'
        class='Barnard 2020'
        position='President'
        />
      <Member
        href=''
        title=''
        alt='Alex Humair'
        imgsrc={BoardMembers.Alex}
        name='Alex Humair'
        class='Barnard 2019'
        position='Vice President'
        />
      <Member
        href=''
        title=''
        alt='Vinay Ramesh'
        imgsrc={BoardMembers.Vinay}
        name='Vinay Ramesh'
        class='SEAS 2019'
        position='Opening Ceremony Co-Chair'
        />
      <Member
        href=''
        title=''
        alt='Wan Yii Lee'
        imgsrc={BoardMembers.Wanyii}
        name='Wan Yii Lee'
        class='GS 2019'
        position='Opening Ceremony Co-Chair'
        />
      <Member
        href=''
        title=''
        alt='Jady Tian'
        imgsrc={BoardMembers.Jady}
        name='Jady Tian'
        class='SEAS 2021'
        position='Treasurer'
        />
      <Member
        href=''
        title=''
        alt='Keki Takahara'
        imgsrc={BoardMembers.Keki}
        name='Keki Takahara'
        class='Barnard 2020'
        position='Treasurer'
        />
      <Member
        href=''
        title=''
        alt='Ling Groccia'
        imgsrc={BoardMembers.Ling}
        name='Ling Groccia'
        class='Barnard 2021'
        position='Secretary'
        />
      <Member
        href=''
        title=''
        alt='Claudia Chung'
        imgsrc={BoardMembers.Claudia}
        name='Claudia Chung'
        class='CC 2021'
        position='Social Chair'
        />
      <Member
        href=''
        title=''
        alt='Mona Villesik'
        imgsrc={BoardMembers.Mona}
        name='Mona Villesik'
        class='Barnard 2021'
        position='Marketing Chair'
        />
      <Member
        href=''
        title=''
        alt='Yuki Mitsuda'
        imgsrc={BoardMembers.Yuki}
        name='Yuki Mitsuda'
        class='Barnard 2021'
        position='Marketing Chair'
        />
      <Member
        href=''
        title=''
        alt='Jimin Ko'
        imgsrc={BoardMembers.Jimin}
        name='Jimin Ko'
        class='CC 2019'
        position='Design Chair'
        />
      <Member
        href=''
        title=''
        alt='Erika Inoue'
        imgsrc={BoardMembers.Erika}
        name='Erika Inoue'
        class='Barnard 2018'
        position='Senior Advisor'
        />
      <Member
        href=''
        title=''
        alt='Ankita Acharya'
        imgsrc={BoardMembers.Ankita}
        name='Ankita Acharya'
        class='Barnard 2018'
        position='Senior Advisor'
        />
      <Member
        href=''
        title=''
        alt='Emily Jin'
        imgsrc={BoardMembers.Emily}
        name='Emily Jin'
        class='SEAS 2019'
        position='Senior Advisor'
        />
        <Member
          href=''
          title=''
          alt='Yilun Ying'
          imgsrc={BoardMembers.Yilun}
          name='Yilun Ying'
          class='CC 2019'
          position='Senior Advisor'
          />
        <Member
          href=''
          title=''
          alt='Ivy Chen'
          imgsrc={BoardMembers.Ivy}
          name='Ivy Chen'
          class='SEAS 2019'
          position='Senior Advisor'
          />
        <Member
          href=''
          title=''
          alt='Haejin Park'
          imgsrc={BoardMembers.Haejin}
          name='Haejin Park'
          class='CC 2019'
          position='Senior Advisor'
          />
        <Member
          href=''
          title=''
          alt='Vincent Gu'
          imgsrc={BoardMembers.Vincent}
          name='Vincent Gu'
          class='GS 2018'
          position='Senior Advisor'
          />
        <Member
          href=''
          title=''
          alt='Albert Zhang'
          imgsrc={BoardMembers.Albert}
          name='Albert Zhang'
          class='CC 2019'
          position='Senior Advisor'
          />
        <Member
          href=''
          title=''
          alt='Alice Hu'
          imgsrc={BoardMembers.Alice}
          name='Alice Hu'
          class='CC 2019'
          position='Senior Advisor'
          />
        <Member
          href=''
          title=''
          alt='Gregory Yap'
          imgsrc={BoardMembers.Gregory}
          name='Gregory Yap'
          class='CC 2019'
          position='Senior Advisor'
          />
        <Member
          href=''
          title=''
          alt='Michelle Lam'
          imgsrc={BoardMembers.Michelle}
          name='Michelle Lam'
          class='GS 2019'
          position='Senior Advisor'
          />
        <Member
          href=''
          title=''
          alt='Liana He'
          imgsrc={BoardMembers.Liana}
          name='Liana He'
          class='SEAS 2019'
          position='Senior Advisor'
          />
        <Member
          href=''
          title=''
          alt='Shinya Kondo'
          imgsrc={BoardMembers.Shinya}
          name='Shinya Kondo'
          class='SEAS 2020'
          position='Senior Advisor'
          />
        <Member
          href=''
          title=''
          alt='Rebecca Wan'
          imgsrc={BoardMembers.Rebecca}
          name='Rebecca Wan'
          class='CC 2020'
          position='Senior Advisor'
          />
        <Member
          href=''
          title=''
          alt='Yi Jun Lim'
          imgsrc={BoardMembers.Yijun}
          name='Yi Jun Lim'
          class='CC 2020'
          position='Senior Advisor'
          />
    </Board>
    <Board
      className='eventchair'
      teamname='Event Chairs 2018-2019'
      description='Each event chair spearheads his/her own event! From political panels to art exhibitions, from poetryslams to film screenings, each event chair is an integral part of making the month happen.'
      >
      <Member
        href=''
        title=''
        imgsrc={BoardMembers.Tracy}
        name='Tracy Chen'
        class='CC 2021'
        position='Event Chair'
        />
      <Member
        href=''
        title=''
        imgsrc={BoardMembers.Andrew}
        name='Andrew Huen'
        class='CC 2021'
        position='Event Chair'
        />
      <Member
        href=''
        title=''
        imgsrc={BoardMembers.Julia}
        name='Julia Angkeow'
        class='CC 2022'
        position='Event Chair'
        />
      <Member
        href=''
        title=''
        imgsrc={BoardMembers.Shannon}
        name='Shannon Hui'
        class='Barnard 2022'
        position='Event Chair'
        />
      <Member
        href=''
        title=''
        imgsrc={BoardMembers.Carmen}
        name='Carmen Chung'
        class='GS 2020'
        position='Event Chair'
        />
      <Member
        href=''
        title=''
        imgsrc={BoardMembers.Sumer}
        name='Sumer Drall'
        class='GS 2020'
        position='Event Chair'
        />
      <Member
        href=''
        title=''
        imgsrc={BoardMembers.James}
        name='James Xu'
        class='SEAS 2021'
        position='Event Chair'
        />
      <Member
        href=''
        title=''
        imgsrc={BoardMembers.EmilyL}
        name='Emily Li'
        class='CC 2021'
        position='Event Chair'
        />
      <Member
        href=''
        title=''
        imgsrc={BoardMembers.Caitlyn}
        name='Caitlyn Chen'
        class='SEAS 2022'
        position='Event Chair'
        />
    </Board>
    <Footer />
  </div>
)

export default BoardPage
