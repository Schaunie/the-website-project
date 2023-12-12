import { SurveyContext } from '../../../utils/context';
import { useContext } from 'react';

function Cabinet() {
    const { repliesId } = useContext(SurveyContext);

    if (repliesId.includes('2h')) {
        return <div>
            
        </div>
    }
}

export default Cabinet