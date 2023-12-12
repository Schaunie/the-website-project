import { SurveyContext } from '../../../utils/context';
import { useContext } from 'react';
import { TitleH2 } from '../../../utils/style/Atoms';

function GovernementalInstitution() {
    const { repliesId } = useContext(SurveyContext);

    if (repliesId.includes('2f')) {
        return <div className="answer_wrapper">
            <p>Votre site internet devra tout d'abord fournir des informations sur l'institution elle-même, son histoire, sa mission, sa vision et ses objectifs. Cela aidera le public à comprendre son rôle et sa portée.</p>
            <p>Il servira également de plateforme pour diffuser des nouvelles, des annonces officielles{repliesId.includes('1f') && <span>, anoncer et faire connaitre des évènements</span>}{repliesId.includes('5g') &&<span> et toute information concernant vos activités</span>}.</p>
            {repliesId.includes('5g') && <p>Pour plus de transparence encore, il sera opportun d'utiliser votre site pour rendre accessible au public des rapports, des statistiques officielles et des informations concernant les personnes qui composent votre institution.</p>}

            <TitleH2>Des fonctionnalités sur-mesure</TitleH2>
            <p>En fonction du type d'institution que vous représentez, nous pourrons mettre en place un certain nombre de services additionnels :</p>
            <ul>
                <li>des services en lignes qui faciliterons l'accès du public à vos prestations.</li>
                <li>des ressources permettant au public de mieux comprendre les normes en vigueur et de trouver les réponses aux questions spécifiques à votre mission{repliesId.includes('5c') && <span> avec la mise en place d’une F.A.Q par exemple</span>}.</li>
                {repliesId.includes('1f') && <li>un calendrier en ligne permettant au public d'accéder aux informations relatives à des évènements.</li> }
                {repliesId.includes('1g') && <li>une plateforme permettant de faciliter la participation citoyenne. Par exemple la mise en place d'une boite à idée numérique.</li>}
                {repliesId.includes('5f') && <li>une page concernant les plue-values apportées à la société par vos actions.</li>}
                {repliesId.includes('1i') && <li>une plateforme sécurisée permettant de coordonner vos différents services.</li>}
                {repliesId.includes('1h') && <li>une plateforme de prise de rendez-vous avec des rappels programmés.</li>}
            </ul>
            <p>Enfin, votre site devra comporter les informations de contact pour les différentes divisions ou départements de l'institution {(repliesId.includes('1g')||repliesId.includes('5c')) && <span>, permettant au public de poser des questions, de signaler des problèmes ou de demander de l'aide</span>}.</p>
        </div>
    }
}


export default GovernementalInstitution