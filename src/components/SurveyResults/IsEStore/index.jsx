import { SurveyContext } from '../../../utils/context';
import { useContext } from 'react';

function IsEStore() {
    const { repliesId } = useContext(SurveyContext);
    if (repliesId.includes('1b')) {
        return <div>
            <p>Pour vendre vos produits en ligne, nous devrons ouvrir une e-boutique.</p>
            <p>Elle permettra principalement de toucher un public plus large à moindre coûts.</p>
            <p>Ce type de site internet doit, par définition, présenter un certain nombre de caractéristiques :</p>
            <ul>
                <li>Votre site doit être facilement administrable. Vous pourrez mettre à jour vos produits et gérer vos stocks aisément.</li>
                <li>Nous mettrons en place une plateforme de paiement sécurisé ainsi qu'une relation avec les services de livraison adaptés à vos produits.</li>
                <li>Nous créerons des espaces clients appropriés depuis lesquelles ils pourront non seulement vous prévenir si un problème survient mais aussi donner leurs avis sur leurs commandes.</li>
                <li>Nous veillerons à ce que votre site internet respecte les normes en vigueur.</li>
                <li>Si vous êtes intéressés, nous pourrons aider à la fidélisation de votre clientèle grâce à une Newsletter.</li>
            </ul>
        </div>
    }
}

export default IsEStore