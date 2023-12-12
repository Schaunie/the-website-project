import Survey from '../../components/SurveyQuestions';
import { styled, keyframes } from 'styled-components';
import backgroundImg from '../../assets/home_background.jpg';
import { ScaleUp } from '../../utils/style/animations';

const BannerWrapper = styled.div`
    margin:0;
    height: 40rem;
    color: #fff;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    background-image: url(${backgroundImg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`

const Overlay = styled.div`
    position: absolute;
    background-color: rgba(45, 66, 79, 0.4);
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 0;
`

const TitleH1 = styled.h1`
    font-size: 4rem;
    text-align: center;
    z-index: 1;
    position: inherit;
    margin-top: -5rem;
    margin-right: auto;
    margin-left: auto;
`

const HighlightEffect = styled.span`
    position: relative;
    z-index: 2;

    &::after {
      content: "";
      position: absolute;
      display: inline-block;
      height: 80px;
      background: linear-gradient(to top, rgba(39, 149, 159, 0.95) 38%, transparent 40%);
      z-index: -1;
      bottom: 0;
      left: 0;
      animation: ${ScaleUp} 1s ease-in-out forwards;
    }
`

const SubTitle = styled.h3`
    margin: 1rem auto 1rem auto;
    font-size: 2.8rem;
    text-align: center;
    font-weight: 400;
    z-index: 1;
    position: inherit;
`

function Home() {

  return (
    <div className="home">
      <BannerWrapper>
        <Overlay></Overlay>
        <TitleH1>VOTRE <HighlightEffect>PROJET</HighlightEffect> WEB</TitleH1>
        <SubTitle>Faites de vos idées une réalité</SubTitle>
      </BannerWrapper>
      <Survey />
    </div>
  );
}

export default Home;
