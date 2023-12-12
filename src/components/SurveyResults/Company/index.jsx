import { SurveyContext } from '../../../utils/context';
import { useContext } from 'react';
import IsEStore from '../IsEStore';
import { TitleH2 } from '../../../utils/style/Atoms';

function Company() {
    const { repliesId, replies } = useContext(SurveyContext);

    const repliesFirstQuestion = replies.filter((reply) => reply.question === 1);
    const isShowcaseSite = ((repliesFirstQuestion.length === 1) && (repliesId.includes('1a'))) ? true : false;
    const isBigCompany = (repliesId.includes('2d')) ? true : false;

    function companyTarget() {
        if (repliesId.includes('4a')) {
            return "des particuliers"
        }
        if (repliesId.includes('4b')) {
            return "des professionnels"
        }
        if (repliesId.includes('4c')) {
            return "tous le monde"
        }
    }

    function offerType() {
        if (repliesId.includes('1c') || repliesId.includes('1b')) {
            return "produit"
        }
        if (repliesId.includes('1d')) {
            return "service"
        }
        if (repliesId.includes('1e')) {
            return "oeuvre"
        } 
        else {
            return "produits ou service"
        } 
    }

    if (repliesId.includes('2b') || repliesId.includes('2c') || repliesId.includes('2d')) {
        return <div>
            <TitleH2>Des fonctionnalités adaptées à vos objectifs et vos valeurs</TitleH2>
            {isShowcaseSite &&
                <div>
                    <p>Votre site internet sera avant tout votre vitrine virtuelle.</p>
                    <p>Un site <dfn id='vitrine_definition'>vitrine</dfn> est un site qui, par définition, sert essentiellement à présenter une entreprise, sans générer de ventes directes.</p>
                    <p>Son principal objectif est donc d’informer les internautes sur l’activité de {(repliesId.includes('2d')) ? <span>l'entreprise que vous représentez</span> : <span>votre entreprise</span>} et de communiquer vos coordonnées pour permettre à ceux qui sont intéressés de vous contacter et d’en savoir plus.
                        <span> Ainsi, nous créerons des présentations claires de vos {offerType()}s avec vos tarifs ou, le cas échéant, la possibilité de demander des devis aisément.</span></p>
                </div>
            }

            {(!isShowcaseSite && !repliesId.includes('1b')) &&
                <div>
                    <p>Votre site internet sera avant tout votre vitrine virtuelle.</p>
                    <p>Nous l'utiliserons pour informer les internautes sur vos {offerType()}s. Ainsi, nous présenterons vos {offerType()}s avec vos tarifs ou, le cas échéant, la possibilité de demander des devis aisément.</p>
                </div>
            }

            <IsEStore />

            {(repliesId.includes('5a')) && <p>Pour souligner votre fiabilité, votre professionnalisme, nous mettrons en évidences vos partenaires de confiance, publics ou commerciaux.</p>}
            {(repliesId.includes('5b') || repliesId.includes('1g') || repliesId.includes('5a')) && <p>En fonction des {offerType()}s que vous proposez, nous pourrons mettre en place des ressources qui pourraient aider vos clients en difficulté.
                {repliesId.includes('1g') && <span>Nous pourrons donc, si vous le souhaitez, intégrer à votre site internet un <dfn title='Un chatbot est un logiciel qui dialogue avec vos client'>chatbot</dfn> ainsi qu'une plateforme de messagerie ou de création de ticket incident.</span>}
            </p>
            }
            {repliesId.includes('1f') && <p>Nous vous permettrons de promouvoir vos évènements en publiant des articles les concernant. Ils pourront être recensés au moyen d'un calendrier numérique et pourront faire l'objet de Newsletters ou de rappels.</p>}
            {repliesId.includes('1h') && <div>
                <p>Nous implanterons un plateforme permettant la gestion des réservation ou, le cas échéant, la prise de rendez-vous. Cette plateforme sera faite sur-mesure et respectera les normes en vigueur. Ainsi, vous pourrez choisir</p> <ul>
                    <li>d'accepter les réservations automatique,</li>
                    <li>de programmer des sms/e-mails de rappels,</li>
                    <li>de choisir les plages horaires et les jours disponibles,</li>
                    <li>d'adapter vos tarifs aux temporalités,</li>
                    <li>et toute autre option que vous considérez.</li>
                </ul>
            </div>}
            {(repliesId.includes('5e') || repliesId.includes('5d')) && <p>Pour valoriser la durabilité de vos {offerType()}s, nous insisterons sur les garanties et les assurances que vous proposez à vos clients, des témoignages seront appréciés.</p>}
            {(repliesId.includes('5g') || repliesId.includes('5j')) && <p>En ce qui concerne l'éthique et la transparence, il sera préférable d'utiliser votre site internet pour communiquer sur vos circuits d'approvisionnement
                {(repliesId.includes('5g')) && <span>, sur les personnes qui composent {(repliesId.includes('2d')) ? <span>l'entreprise que vous représentez</span> : <span>votre entreprise</span>} et vos investissements</span>}.</p>}
            {repliesId.includes('1i') && <p>Enfin, votre site internet pourra vous permettre de prendre en charges certains processus inhérents à votre entreprise. Nous pouvons par exemple mettre en place une centralisation de la gestion des stock, une plateforme de communication entre vos différets services, une plateforme de recrutement...</p>}

            <TitleH2>Le design qu'il vous faut</TitleH2>

            <p>Nous serons particulièrement attentifs au design de votre site.
                {(isBigCompany || repliesId.includes('3a')) ? <span> Il devra tout d'abord être en adéquation avec votre identité visuelle actuelle, que ce soit au niveau des couleurs ou de la typographie.</span>
                    : <span>Pour cela, nous nous nousinteresserons particulièrement à votre identité visuelle. On y incluera notamment les couleurs et les typographies utilisées pour créer votre site internet.</span>
                }
                <span> Tout cela devra être choisi avec soin.</span>
                <span> De plus, comme vos {offerType()}s s'adressent à {companyTarget()},</span>
                {repliesId.includes('4b') && <span> il faudra mettre l'accent sur la réactivité et la fiabilité. Pour cela, il sera nécessaire de choisir un design sobre et classique dans lequel vos prospects auront aisément accès aux informations essentiels.</span>}
                {repliesId.includes('4a') && <span> votre site internet devra rassurer vos clients potentiels. Pour cela, nous mettrons en place la possibilité pour vos clients de rajouter des avis sur le commandes passées. Nous créerons également une F.A.Q expliquant le fonctionnement du procédé de commande.</span>}
                {repliesId.includes('4c') && <span> nous privilégierons un design clair et classique.</span>}
            </p>
            <TitleH2>Un <dfn title='Le référencement correspond à votre position sur les moteurs de recherche quand le visiteur tape certains mots-clés.'>référencement</dfn> adapté</TitleH2>
            {isBigCompany ? <div>
                <p>En tant que grande entreprise, votre nom est déjà connu dans votre secteur d'activité et votre réputation n'est plus à faire. Ainsi, il ne sera pas nécessaire d'insister sur les mots-clés utilisés habituellement.</p>
                <p>Nous pourront cependant nous concentrer sur la qualité des ressources qui seront présentes sur le site, sa mordernité ergonomique et technologique, vos innovations ainsi que l'association de votre nom aux actualités.</p>
                <p>Cela permettra d'accroitre votre visibilité auprès d'un plus large public.</p>
            </div> : <div>
                <p>Pour référencer votre site internet, en fonction de votre public cible, nous identifierons un ensemble de mots-clés sur lesquels vous vous positionnerez.</p>
                <p>Pour les <abbr title="Petites et Moyennes Entreprises">PME</abbr>, les mots-clés sont généralement les {offerType()}s que vous proposez suivies de zones géographiques ou de domaines d'activités.</p>
                {(repliesId.includes('1b')) && <p>Dans le cadre des e-boutiques, un référencement efficace devra s'accompagner de publicité, notamment sur les réseaux sociaux.</p>}
            </div>}
        </div>
    }
}


export default Company