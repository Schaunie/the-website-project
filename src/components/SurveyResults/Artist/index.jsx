import { SurveyContext } from '../../../utils/context';
import { useContext } from 'react';

function Artist() {
    const { repliesId } = useContext(SurveyContext);

    if (repliesId.includes('2h')) {
        return <div>
            
        </div>
    }
}

export default Artist