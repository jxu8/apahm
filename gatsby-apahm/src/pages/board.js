import React from 'react';
import Link from 'gatsby-link';

import Header from '../components/Header';
import About from '../components/About';
import Resume from '../components/Resume';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
// Import board component
import Board from '../components/Board';
// Import all (eboard + event chairs) members by First(Last), note last name is optional
import * as BoardMembers from '../components/_boardmembers'
import Member from '../components/Member'

const BoardPage = () => (
  <div>
    <Header />
    <Board
        className='eboard'
        teamname='Eboard 2017-2018'
        description=''
    >
        <Member
            href=''
            title=''
            alt='Ada Tam'
            imgsrc={BoardMembers.Ada}
            name='Ada Tam'
            class='Barnard 2018'
            position='Co-President'
        />
        <Member
            href=''
            title=''
            alt='Yilun Ying'
            imgsrc={BoardMembers.Yilun}
            name='Yilun Ying'
            class='CC 2019'
            position='Co-President'
        />
        <Member
            href=''
            title=''
            alt='Ivy Chen'
            imgsrc={BoardMembers.Ivy}
            name='Ivy Chen'
            class='SEAS 2019'
            position='Opening Ceremony Co-Head'
        />
        <Member
            href=''
            title=''
            alt='Anisa Marhull'
            imgsrc={BoardMembers.Anisa}
            name='Anisa Marhull'
            class='Barnard 2020'
            position='Opening Ceremony Co-Head'
        />
        <Member
            href=''
            title=''
            alt='Alex Humair'
            imgsrc={BoardMembers.Alex}
            name='Alex Humair'
            class='Barnard 2019'
            position='Secretary/Social Chair'
        />
        <Member
            href=''
            title=''
            alt='Haejin Park'
            imgsrc={BoardMembers.Haejin}
            name='Haejin Park'
            class='CC 2019'
            position='Co-Treasurer'
        />
        <Member
            href=''
            title=''
            alt='Vincent Gu'
            imgsrc={BoardMembers.Vincent}
            name='Vincent Gu'
            class='GS 2018'
            position='Co-Treasurer'
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
            alt='Rebecca Wan'
            imgsrc={BoardMembers.Rebecca}
            name='Rebecca Wan'
            class='CC 2020'
            position='Marketing Chair'
        />
        <Member
            href=''
            title=''
            alt='Daphne Chow'
            imgsrc={BoardMembers.Daphne}
            name='Daphne Chow'
            class='CC 2018'
            position='Senior Advisor'
        />
        <Member
            href=''
            title=''
            alt='Erika Inoue'
            imgsrc={BoardMembers.Erika}
            name='ERika Inoue'
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
            alt='Bryan Li'
            imgsrc={BoardMembers.Bryan}
            name='Bryan Li'
            class='CC 2018'
            position='Senior Advisor'
        />
        <Member
            href=''
            title=''
            alt='Alangoya Tezel'
            imgsrc={BoardMembers.Alangoya}
            name='Alangoya Tezel'
            class='CC 2018'
            position='Senior Advisor'
        />
        <Member
            href=''
            title=''
            alt='Shawn Wang'
            imgsrc={BoardMembers.Shawn}
            name='Shawn Wang'
            class='CC 2018'
            position='Senior Advisor'
        />
        <Member
            href=''
            title=''
            alt='Randy Zhong'
            imgsrc={BoardMembers.Randy}
            name='Randy Zhong'
            class='CC 2018'
            position='Senior Advisor'
        />
    </Board>
    <Board
        className='eventchair'
        teamname='Event Chairs 2017-2018'
        description='Each event chair spearheads his/her own event! From political panels to art exhibitions, from poetryslams to film screenings, each event chair is an integral part of making the month happen.'
    >
    <hr />
        <Member
            href=''
            title=''
            alt='Albert Zhang'
            imgsrc={BoardMembers.Albert}
            name='Albert Zhang'
            class='CC 2019'
            position='Returning Event Chair'
            event='Mural, Escape the Room I'
        />
        <Member
            href=''
            title=''
            alt='Alice Hu'
            imgsrc={BoardMembers.Alice}
            name='Alice Hu'
            class='CC 2019'
            position='Event Chair'
            event='Mental Health Awareness'
        />
        <Member
            href=''
            title=''
            alt='Claudia Chung'
            imgsrc={BoardMembers.Claudia}
            name='Claudia Chung'
            class='CC 2021'
            position='Event Chair'
            event='Spa + Henna Night'
        />
        <Member
            href=''
            title=''
            alt='Gregory Yap'
            imgsrc={BoardMembers.Gregory}
            name='Gregory Yap'
            class='CC 2019'
            position='Returning Event Chair'
            event='Escape the Room I, II'
        />
        <Member
            href=''
            title=''
            alt='Jady Tian'
            imgsrc={BoardMembers.Jady}
            name='Jady Tian'
            class='SEAS 2021'
            position='Event Chair'
            event='Closing Ceremony'
        />
        <Member
            href=''
            title=''
            alt='Keki Takahara'
            imgsrc={BoardMembers.Keki}
            name='Keki Takahara'
            class='Barnard 2020'
            position='Event Chair'
            event='Asians in Art'
        />
        <Member
            href=''
            title=''
            alt='Liana He'
            imgsrc={BoardMembers.Liana}
            name='Liana He'
            class='SEAS 2019'
            position='Returning Event Chair'
            event='Closing Ceremony'
        />
        <Member
            href=''
            title=''
            alt='Ling Groccia'
            imgsrc={BoardMembers.Ling}
            name='Ling Groccia'
            class='Barnard 2021'
            position='Event Chair'
            event='Asians in Art'
        />
        <Member
            href=''
            title=''
            alt='Michelle Lam'
            imgsrc={BoardMembers.Michelle}
            name='Michelle Lam'
            class='GS 2019'
            position='Event Chair'
            event='Asians in Film'
        />
        <Member
            href=''
            title=''
            alt='Miyeon Kim'
            imgsrc={BoardMembers.Miyeon}
            name='Miyeon Kim'
            class='GS 2018'
            position='Event Chair'
            event='Sporting Exposition'
        />
        <Member
            href=''
            title=''
            alt='Mona Villesik'
            imgsrc={BoardMembers.Mona}
            name='Mona Villesik'
            class='Barnard 2021'
            position='Event Chair'
            event='Spicy Ramen Challenge'
        />
        <Member
            href=''
            title=''
            alt='Shinya Kondo'
            imgsrc={BoardMembers.Shinya}
            name='Shinya Kondo'
            class='SEAS 2020'
            position='Event Chair'
            event='Asians in Art'
        />
        <Member
            href=''
            title=''
            alt='Vinay Ramesh'
            imgsrc={BoardMembers.Vinay}
            name='Vinay Ramesh'
            class='SEAS 2019'
            position='Event Chair'
            event='Sporting Exposition'
        />
        <Member
            href=''
            title=''
            alt='Wan Yii Lee'
            imgsrc={BoardMembers.Wanyii}
            name='Wan Yii Lee'
            class='GS 2019'
            position='Event Chair'
            event='88Rising x Asian in Hip-Hop'
        />
        <Member
            href=''
            title=''
            alt='Yi Jun Lim'
            imgsrc={BoardMembers.Yijun}
            name='Yi Jun Lim'
            class='CC 2020'
            position='Event Chair'
            event='Panel on Colonialism'
        />
        <Member
            href=''
            title=''
            alt='Yuki Mitsuda'
            imgsrc={BoardMembers.Yuki}
            name='Yuki Mitsuda'
            class='Barnard 2021'
            position='Event Chair'
            event='Asians in Art'
        />
    </Board>
    <Footer />
  </div>
);

export default BoardPage;
