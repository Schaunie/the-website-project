import { SurveyContext } from '../../../utils/context';
import { useContext } from 'react';
import { TitleH2 } from '../../../utils/style/Atoms';

function Association() {
    const { repliesId } = useContext(SurveyContext);

    if (repliesId.includes('2e')) {
        return <div className="answer_wrapper">
            <p>Votre site internet doit tout d’abord présenter votre association, sa mission, ses objectifs et informer le public sur ses activités. Il servira également à partager des actualités, des rapports d’activités, des réussites, des témoignages ainsi que toute information pertinente sur les projets et les initiatives de l’association.</p>
            {repliesId.includes('5f') && <p>Vos réussites et les témoignages qui y sont liées permettront d’insister sur votre engagement communautaire et la plus-value social qu’il apporte à la société.</p>}
            <p>Tout cela permettra d’accroitre la visibilité de l’organisation et de sensibiliser le public aux enjeux qu’elle défend.</p>
            <TitleH2>Des fonctionnalités sur-mesures</TitleH2>
            <p>Nous intégrerons à votre site internet des fonctionnalités pour les visiteurs qui voudront s’impliquer dans votre organisation que ce soit par le biais de dons, de volontariat ou d’actions de communication. </p>
            <p>Votre site pourra ainsi servir à gérer les adhésions et à fournir aux membres ou aux donateurs des espaces dédiés. {(repliesId.includes('1g') || repliesId.includes('1i')) && <span>Ces espaces pourront leurs permettre d’accéder à des ressources exclusives et à des informations importantes</span>}{repliesId.includes('1i') ? <span> mais aussi à faciliter la communication interne.</span> : <span>.</span>}</p>
            {repliesId.includes('1f') && <p>Nous pourrons également y inclure un calendrier en ligne pour informer les visiteurs des évènements à venir, des conférences, des collectes et d’autres activités que vous organisez. Le cas échéant, nous pourront également y intégrer une billetterie ou une plateforme de réservation.</p>}
            <p>Pour les visiteurs, votre site fournira des ressources éducatives sur les problèmes que votre organisation cherche à résoudre. En plus de sensibiliser le public aux enjeux sociaux qui vous sont chères, cela aidera également à <dfn title='Le référencement correspond à votre position sur les moteurs de recherche quand le visiteur tape certains mots-clés.'>référencer</dfn> correctement votre site internet. </p>
            {repliesId.includes('5g') && <p>Dans le but de faciliter la transparence, il sera bon d’y intégrer des rapports financiers et des budgets. Cela aidera le public à mieux cerner votre manière de gérer vos fonds et renforcera ainsi sa confiance en votre organisation.</p>}
            <p>Enfin, votre site devra comporter les informations de contact de votre organisation{(repliesId.includes('1g') || repliesId.includes('5c')) && <span> ainsi qu'une plateforme permettant au public de poser des questions, de demander des informations supplémentaires ou de demander de l'aide</span>}.{repliesId.includes('1h') && <span>Cela pourra s'accompagner d'une plateforme de prise de rendez-vous leurs permettant de rencontrer des personnes à même de les aider.</span>}</p>
        </div>
    }
}

export default Association
