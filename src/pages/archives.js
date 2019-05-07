import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import Section from '../components/Section'
import ArchiveSection from '../components/ArchiveSection'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import AltHeader from '../components/AltHeader'
import bgimg from '../assets/images/apahm-2017.jpg'

class ArchivePage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
    }
    this.closeLightbox = this.closeLightbox.bind(this);
		this.gotoNext = this.gotoNext.bind(this);
		this.gotoPrevious = this.gotoPrevious.bind(this);
		this.gotoImage = this.gotoImage.bind(this);
		this.handleClickImage = this.handleClickImage.bind(this);
		this.openLightbox = this.openLightbox.bind(this);
  }

  openLightbox (index, event) {
    event.preventDefault();
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox () {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious () {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext () {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  gotoImage (index) {
    this.setState({
      currentImage: index,
    });
  }
  handleClickImage () {
    if (this.state.currentImage === this.props.images.length - 1) return;

    this.gotoNext();
  }

  render () {
    return(
      <Layout>
      <div id="archive">
        <AltHeader
          page='archives'
          background={'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.13)),url(' + bgimg + ')'}
          pageTitle='Archives'
          banner_sub1=''
          banner_sub2=''
        >
        </AltHeader>

        {/* === BEGIN ARCHIVE THEMES IN REVERSE CHRONOLOGICAL ORDER === */}

        <ArchiveSection
          year="2018"
          theme="In(di)visible"
          subtitle=""
          description="The Asian American identity is one that often goes unnoticed or unrecognized, falling into gray areas and between blurred lines. This invisibility stretches across media and politics, as Asians are often homogenized or overlooked. But by taking ownership of Asian-ness, originally just a category of otherness, this identity can be transformed into a source of unity and strength. "
        >
          <p><strong>Keynote Speaker</strong>: <strong>Christine Ha</strong>, also known as The Blind Cook, is a Vietnamese-American chef, TV host, and writer, and the first blind contestant and Season 3 winner of Masterchef USA.</p>

          <p><strong>Board</strong>:</p>

          <ul>
          <li>Presidents: Ada Tam, Yilun Ying</li>

          <li>Opening Ceremony Co-Heads: Ivy Chen, Anisa Marhull</li>

          <li>Treasurers: Vincent Gu, Haejin Park</li>

          <li>Secretary/Social Chair: Alex Humair</li>

          <li>Graphic Design Chair: Jimin Ko</li>

          <li>Marketing Chair: Rebecca Wan</li>

          <li>Senior Advisor: Daphne Chow, Isabel Chun, Erika Inoue, Emily Jin, Bryan Li, Alangoya Tezel, Shawn Wang, Randy Zhong</li>

          <li>Event Chairs: Albert Zhang, Alice Hu, Ankita Acharya, Claudia Chung, Shinya Kondo, Wan Yii Lee, Yi Jun Lim, Yuki Mitsuda, Vinay Ramesh, Irem Soysal, Jady Tian, Keki Takahara, Liana He, Ling Groccia, Michelle Lam, Miyeon Kim, Mona Villesvik, Gregory Yap</li>

          <li>Faculty Advisors: Chia-Ying Pan, Avi Edelman, Aisha Abdelmula, Ana Angeles</li>
          </ul>

          <p><strong>Performers</strong>:</p>

          <ul>
          <li>Columbia University Lion Dance</li>

          <li>Musics TM</li>

          <li>CU China Dance</li>

          <li>Mālama Hawaiʻi at Columbia University</li>

          <li>Columbia Taiko</li>

          <li>Columbia Dhoom</li>
          </ul>
        </ArchiveSection>

        <ArchiveSection
          year="2017"
          theme="Impressions"
          subtitle=""
          description="The theme for 2017 Opening Ceremony is Impressions. APAHM would like to challenge pre-existing stereotypes (or first impressions) about Asian Americans. APAHM 2017 is all about defying expectations, bringing a different image and exploring Asian American heritage and its meaning in new, unexpected ways."
        >
          <p><strong>Keynote Speaker</strong>: <strong>Steven Lim</strong>, a producer at BuzzFeed famous for producing viral videos at Buzzfeed, such as the "Worth it" series.</p>

          <p><strong>Board</strong>:</p>

          <ul>
          <li>Presidents: Bryan Li, Shawn Wang</li>

          <li>Opening Ceremony Co-Heads: Alangoya Tezel, Yilun Ying</li>

          <li>Treasurers: Ivy Chen, Emily Jin</li>

          <li>Secretary/Webmaster: Anna Wen</li>

          <li>Graphic Design Chair: Jimin Ko</li>

          <li>Senior Advisor: Daphne Chow</li>

          <li>Event Chairs:</li>

          <li>Faculty Advisors: Melinda Aquino, Valeria Martinez, Aisha Abdelmula, Ana Angeles</li>
          </ul>

          <p><strong>Performers</strong>:</p>

          <ul>
          <li>Lion Dance</li>

          <li>Columbia Raas</li>

          <li>Columbia Pops</li>

          <li>Malama Hawai'i</li>

          <li>China Dance</li>

          <li>Columbia Dhoom</li>

          <li>Taiko</li>
          </ul>
        </ArchiveSection>

        <ArchiveSection
          year="2016"
          theme="DisOriented"
          subtitle=""
          description="Figurative and material threads represent the narratives of Asian Pacific Americans from the past to present. The weaving of these individual threads into a unified piece of fabric reveal the intricacy of APIA relationships and history. Each distinctive thread plays an important role; the absence of one leads to the unraveling of others. This April, APAHM will weave personal stories into 'mosaics' displaying the diversity of APIA issues and cultures."
        >
          <p><strong>Keynote Speaker</strong>: <strong>Conrad Ricamora</strong>, actore, singer, and star of ABC's legal drama series <em>How To Get Away With Murder</em></p>

          <p><strong>Board</strong>:</p>

          <ul>
          <li>Presidents: Laura Tang, Paulina Mangubat</li>

          <li>Opening Ceremony Co-Heads: Sanchit Jain, Sophie Lucy</li>

          <li>Treasurers: Daphne Chow, Nihal Shetty</li>

          <li>Secretary/Webmaster: Edmund Qiu</li>

          <li>Graphic Design Chair: Isabel Chun</li>

          <li>Senior Advisor: Huei Chin Ng</li>

          <li>Event Chairs: Michelle Lee, Zoha Shahabuddin, Joanne Kim, Bryan Li, Ivy Chen, Gary Chen, Zibo Gao, Emily Jin, Randy Zhong, Yilun Ying, Kelvin Ng, Jimin Ko, Alangoya Tezel</li>
          </ul>

          <p><strong>Performers</strong>:</p>

          <ul>
          <li>Lion Dance</li>

          <li>Columbia Raas</li>

          <li>CU Generation</li>

          <li>Talent Complex</li>

          <li>Columbia Pops</li>
          </ul>
        </ArchiveSection>

        <ArchiveSection
          year="2015"
          theme="Threads"
          subtitle="Embodying the Diversity of Asian/Pacific American Voices"
          description='The theme for 2015 Opening Ceremony is Impressions. APAHM would like to challenge pre-existing stereotypes (or first impressions) about Asian Americans. APAHM 2015 is all about defying expectations, bringing a different image and exploring Asian American heritage and its meaning in new, unexpected ways.'
        >
          <p><strong>Keynote Speaker</strong>: <strong>Phil Yu</strong>, Korean-American blogger, Angry Asian Man</p>

          <p><strong>Board</strong>:</p>

          <ul>
          <li>Presidents: Harrison Liew, Xinni Liu</li>

          <li>Treasurers: Huei Chin Ng, Kathy Zhu</li>

          <li>Secretary/Webmaster: Laura Tang</li>

          <li>Event Chairs: Andrew Tieu, Annie Wang, Edmund Qiu, Michelle Lee, Paulina Mangubat, Shawn Wang, Zoha Shahabuddin, Anna Wen, Daphne Chow, Isabel Chun, Nihal Shetty, Sanchit Jain, Sophie Lucy</li>
          </ul>

          <p><strong>Performers</strong>:</p>

          <ul>
          <li>Columbia Raas</li>

          <li>Chinese Yo-Yo</li>
          </ul>
        </ArchiveSection>

        <ArchiveSection
          year="2014"
          theme="Currents"
          subtitle="Embodying the Diversity of Asian/Pacific American Voices"
          description='Whether continuously surging movements of water or shocking electrical charges, currents are swift and constantly shifting—their collective power drives change. Currents represent the increasing diverse population of Asian and Pacific American voices within the United States, as we strive to unite individual strengths with collective identity.'
        >
          <p><strong>Keynote Speaker</strong>: <strong>Professor Gary Okihiro</strong>, a foremost Asian-American author and scholar, founding director of Columbia University's Center for the Study of Ethnicity and Race</p>

        </ArchiveSection>

        <ArchiveSection
          year="2013"
          theme="Illuminate"
          description="Asian Pacific American Heritage Month brings you its 2013 installment: Illuminate. This year, April is our time to think about highlighting successful partnerships within and beyond the APIA community as well as brightening those yet to come. Our board has worked tirelessly to bring you the largest selection of events yet, and we're so excited to share our hard work with the Columbia community."
        >
          <p><strong>Keynote Speaker</strong>: <strong>Kelly Zen-Yie Tsai</strong>. Kelly is an award-winning spoken word poet, playwright, and filmmaker who has been featured at over 500 venues worldwide including the White House, Apollo Theater in Harlem, Kennedy Center, and Lincoln Center, as well as three seasons of "Russel Simmons Presents HBO Def Poetry." She has also been profiled in AngryAsianMan.com's "30 Most Influential Asian Americans Under 30." Read more about her at http://www.yellowgurl.com or see her performances at http://www.youtube.com/kztsai!</p>

          <p><strong>Performers</strong>:</p>

          <ul>
          <li>Hari Kondabolu</li>

          <li>Super Piano Brothers</li>
          </ul>


        </ArchiveSection>

        <ArchiveSection
          year="2007"
          theme="Resonance"
          description=''
        />

        <Footer />
      </div>
      </Layout>
    )
  }
}

export default ArchivePage
