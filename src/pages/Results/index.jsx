import GovernementalInstitution from '../../components/SurveyResults/GovernementalOrganisation'
import IsWebsite from '../../components/SurveyResults/isWebsite';
import Association from '../../components/SurveyResults/Associations'
import Inclusion from '../../components/SurveyResults/Inclusion';
import Craftman from '../../components/SurveyResults/Craftman';
import Company from '../../components/SurveyResults/Company';
import Artist from '../../components/SurveyResults/Artist';
import AppointmentPicker from '../../components/AppointmentPicker';
import styled from 'styled-components';

const TitleH1 = styled.h1`
    text-align: center;
    margin: 4rem auto 3rem auto;
    font-size: 3rem;
`

function Results() {
    return <div>
        <TitleH1>Un site internet adapté à vos besoins</TitleH1>
        <GovernementalInstitution />
        <Association />
        <Craftman />
        <Company />
        <Artist />
        <Inclusion />
        <IsWebsite />
        <AppointmentPicker />
    </div>
}

export default Results