import { SurveyContext } from '../../../utils/context';
import { useContext } from 'react';
import IsEStore from '../IsEStore';
import { TitleH2 } from '../../../utils/style/Atoms';

function Craftman() {
    const { repliesId } = useContext(SurveyContext);

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
    }

    if (repliesId.includes('2a')) {
        return <div>
            <p>Votre site internet sera avant tout une vitrine virtuelle qui permettra de présenter vos {offerType()}s à vos futurs clients. Ils pourront ainsi visualiser votre travail, vos compétences et, le cas échéant, votre style.</p>
            <p>En détaillant les processus inhérents à votre savoir-faire, nous ferons comprendre aux clients potentiels que choisir un artisan, c’est privilégier la qualité. Nous pourrons inclure dans votre site des témoignages et des avis client ce qui renforcera votre crédibilité et votre professionnalisme tout en insistant sur votre capacité à vous adapter aux différentes problématiques que vous rencontrez. Cela permettra également {repliesId.includes('5b') && <span>de mettre l'accent sur votre créativité, votre adaptabilité et</span>} un meilleur <dfn title='Le référencement correspond à votre position sur les moteurs de recherche quand le visiteur tape certains mots-clés.'>référencement</dfn> dans votre domaine d’expertise.</p>
            {!(repliesId.includes('1b')) && <div>
                <TitleH2>Un design adapté</TitleH2>
                <p>De plus, pour faire connaitre vos {offerType()}s dans votre région, nous mettrons aussi en place un référencement d’ordre géographique {repliesId.includes('1f') && <span>et une fonctionnalité permettant de publier des atualités sur vos évènements</span>}. Nous définirons ainsi un ensemble de mots-clés adaptés à votre public cible. Il sera important que ces mots-clés apparaissent régulièrement sur votre site{repliesId.includes('1f') && <span> et sur vos publications</span>}.</p>
                
                <TitleH2>Un design sur-mesure</TitleH2>
                <p>Par ailleurs, nous adapterons le design de votre site à vos {offerType()}s.
                    {repliesId.includes('4b') ? <span>Dans votre cas, comme vos {offerType()}s s'adressent à des professionnels, il faudra mettre l'accent sur la réactivité et la fiabilité. Pour cela, il sera nécessaire de choisir un design sobre et classique dans lequel vos prospects auront aisément accès aux informations essentiels.</span>
                        : <span>Pour des {offerType()}s uniques par exemple, nous choisirons un design sobre et minimaliste. Cela accentuera la spécificité de chaque demande pour vos futurs clients.</span>}{repliesId.includes('5b') && <span> Pour mettre l'accent sur la créativité, nous choisirons quelques couleurs vives à intégrer au design. Elles sont généralement associées à l'imaginaire.</span>}</p>
                <p>Enfin, votre site internet permettra à ses visiteurs de faire des demandes de devis adapté à votre savoir-faire{repliesId.includes('1g') && <span>, prendre des rendez-vous sur des plages horaires de votre choix</span>} et de trouver facilement vos informations de contact.</p>
            </div>}
            <IsEStore />
        </div>
    }
}

export default Craftman