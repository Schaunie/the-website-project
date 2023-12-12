import { SurveyContext } from '../../../utils/context';
import { useContext } from 'react';
import { TitleH2 } from '../../../utils/style/Atoms';

function Inclusion() {
    const { repliesId } = useContext(SurveyContext);

    if (repliesId.includes('5h')) {
        return <div>
            <TitleH2>Un site internet pour tous les publics</TitleH2>
            <p>Pour une inclusion plus importante, sachez que votre site internet sera accessible aux personnes en situation de handicap visuel, quel qu'il soit.</p>
            <p>Ainsi, nous serons particulièrement attentifs à respecter les critères permettant à ce type d'utilisateur particulier à naviguer en toute autonomie.</p>
        </div>
    }
}

export default Inclusion