import { SurveyContext } from '../../../utils/context';
import { useContext } from 'react';
import { TitleH2 } from '../../../utils/style/Atoms';

function IsWebsite() {
    const { repliesId } = useContext(SurveyContext);

    if (repliesId.includes('3a')) {
        return <div>
            <TitleH2>Votre ancien site internet, une ressource non négligeable</TitleH2>
            <p>Puisque vous disposez déjà d'un site web, nous entreprendrons ensemble une analyse exhaustive pour identifier les aspects qui ne répondent pas à vos attentes mais également ceux qui vous satisfont.</p>
            <p>Cette démarche nous permettra de focaliser notre attention sur les éléments cruciaux pour vous.</p>
        </div>
    }
}

export default IsWebsite
