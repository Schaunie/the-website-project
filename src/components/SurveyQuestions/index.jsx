import { useState, useContext, useEffect } from 'react';
import styled from 'styled-components'
import { Questions } from '../../datas/surveyQuestions';
import { possibleReplies } from '../../datas/surveyReplies';
import { Link } from 'react-router-dom';
import { SurveyContext } from '../../utils/context';
import { TitleH2 } from '../../utils/style/Atoms';
import colors from '../../utils/style/variables/colors';
import structures from '../../utils/style/variables/structures';


const SurveyContainer = styled.div`
    background-color: #fff;
    color: #000;
    border-radius: 10px;
    box-shadow: 0px 3px 6px rgba(0,0,0,0.3);
    position: relative;
    
    @media (min-width: ${structures.desktop}) {
        padding: 4rem 2rem 4rem 2rem;
        margin: -10rem 7rem 7rem 7rem;
    }

    @media (max-width: ${structures.desktop}) {
        padding: 1rem 1rem 2rem 1rem;
        margin: 1rem;
    }
`

const StyledP = styled.p `
    color: ${colors.primary};
    text-align: center;
    font-size: 1.3rem;
`

const RepliesWrapper = styled.div`
    @media (min-width: ${structures.desktop}) {
        display: grid;
        grid-template-columns: ${(props) => props.$liCount ? `repeat(2, 10rem)` : `repeat(3, 19rem)`};
        justify-content: center;
        column-gap: 2rem;
        margin: 2rem 2rem 0 2rem;
        justify-items: ${(props) => props.$liCount ? `center` : `start`};
        
    }
    @media (max-width: ${structures.desktop}) {
        margin: 2rem 0
    }
`

const ReplyBox = styled.li`
    position: relative;
    list-style-type: none;

    @media (min-width: ${structures.desktop}) {
        background: none;
        margin: 1rem 0rem 1rem 1.5rem;
        padding-left: 5px;
        font-size: 1.1rem;
        cursor: pointer;
    }
    
    @media (max-width: ${structures.desktop}) {
        background: none;
        margin: 1rem 0rem 1rem 1.5rem;
        padding-left: 5px;
        font-size: 1.1rem;
    }
`
const CheckboxSpan = styled.span`
        display: inline-block;
        width: 15px;
        height: 15px;
        vertical-align: middle;
        margin-right: 5px;
        background: ${(props) =>
        props.$isSelected ? `${colors.primary}` : `none`};
        border: ${colors.primary} solid 2px;
`

const LinkWrapper = styled.div`
    @media (max-width: ${structures.desktop}) {
        display: grid;
        ${props => props.$notFirstQuestion && `grid-template-columns: repeat(2, 1fr);`}
        column-gap: 1rem;
        justify-items: center;
    }
    @media (min-width: ${structures.desktop}) {
        display: grid;
        ${props => props.$notFirstQuestion && `grid-template-columns: repeat(2, 15rem);`}
        justify-content: center;
        justify-items: center;
    }
`

const NavButton = styled.button`
    background-color: ${colors.primary};
    display: block;
    color: #fff;
    border-radius: 30px;
    cursor: pointer;
    background: #fff;
    color: ${colors.primary};

    &.result_button {
        background: ${colors.primary};
        color: #fff;
    }

    @media (min-width: ${structures.desktop}) {
        padding: 1rem 2rem 1rem 2rem;
        margin: 2rem;
        width: 12rem;
        border: solid 3px ${colors.primary};
        font-weight: 600;
        font-size: 1.2rem;
    }

    @media (max-width: ${structures.desktop}) {
        padding: 1rem;
        width: 8rem;
        font-size: 1.1rem;
        border: solid 3px ${colors.primary};
        font-weight: 600;
    }
`

const StyledLink = styled(Link)`
    color:#fff;
    width: fit-content;
`


function SurveyQuestions() {
    const [questionNumber, setQuestionNumber] = useState(1);
    const [selectedCount, setSelectedCount] = useState(0);
    const { replies, repliesId, setReplies } = useContext(SurveyContext);

    const repliesCurrentQuestion = replies.filter((reply) => reply.question === questionNumber)

    // Safely save reply into replies array
    // Limit number of replies and delete replies that are unselected from replies array
    function saveReplies(newreply) {
        if (repliesId.includes(newreply.replyId)) {
            setReplies((prevreplies) => (prevreplies.filter(
                (reply) =>
                    (reply.replyId !== newreply.replyId)
            )))
        } else {
            if (questionNumber === 1 || questionNumber === 5) {
                if (selectedCount >= 3) {
                    replies.pop();
                }
            } else {
                if (selectedCount >= 1) {
                    replies.pop();
                };
            };
            setReplies((prevreplies) => (prevreplies.concat(newreply)));
        }
    }

    // I don't know if it's useful. Used to add replies in the correct form. I think it would be better to put il directly into the onclick...
    function addReply(id, reply) {
        saveReplies({ question: questionNumber, replyId: id, reply: reply });
    }

    // Handle the reply 'Autre'
    function changeReply(id, newReply) {
        setReplies((prevreplies) => (prevreplies.filter(
        (reply) =>
            (reply.replyId !== id)
    )))
        setReplies((prevreplies) => (prevreplies.concat({ question: questionNumber, replyId: id, reply: newReply })));
    }

    // Delete all the replies for the given question number
    function deleteQuestionReplies(prevQuestionNumber) {
        setReplies((prevreplies) => (prevreplies.filter(
            (reply) =>
                reply.question !== prevQuestionNumber)));
    }

    // Reset the replies array
    function resetReplies() {
        setReplies([]);
    }

    // Vérify if there's any reply before getting to next question
    function nextQuestion() {
        if (repliesCurrentQuestion.length < 1) {
            alert("Vous n'avez pas sélectionné de réponse.");
        } else {
            setQuestionNumber(questionNumber + 1);
        }
    }

    // Update the number of selected replies for the current question after each render
    useEffect(() => {
        setSelectedCount(() => {
            return repliesCurrentQuestion.length
        });
    }, [repliesCurrentQuestion]);

    // Reset the replies array if user go back from result using navigator buttons
    useEffect(() => {
        if (questionNumber === 1) {
            resetReplies();
        }
    }, []);

    return <SurveyContainer>
        <StyledP>Définissons ensemble votre projet</StyledP>
        <TitleH2>
            {Questions[questionNumber]}
        </TitleH2>
        <RepliesWrapper
            $liCount={possibleReplies.filter((reply) => (reply.question === questionNumber)).length === 2}>
            {
                possibleReplies.map(({ id, reply, question }) => (
                    (question === questionNumber &&
                    <ReplyBox
                        key={id}
                        onClick={(e) => {addReply(id, reply);}}>
                        <CheckboxSpan $isSelected={repliesId.includes(id)}></CheckboxSpan>
                        {(['1k', '2j', '5k'].includes(id)) ? <span>
                            <label htmlFor="other">Autre : 
                            <input type="text" name="other" placeholder='Précisez' id={id} onBlur={(e) => changeReply(id, e.target.value)} />
                            </label>
                        </span> : reply}
                    </ReplyBox>
                )))
            }
        </RepliesWrapper>
        <LinkWrapper $notFirstQuestion={questionNumber!==1}>
            {
                (questionNumber !== 1) &&
                <NavButton onClick={() => {
                    setQuestionNumber(questionNumber - 1);
                    deleteQuestionReplies(questionNumber - 1);
                    deleteQuestionReplies(questionNumber);
                }}>
                    Précédent
                </NavButton>
            }
            {
                (questionNumber !== 5) ?
                    <NavButton
                        onClick={() => { nextQuestion(); }}
                    >Suivant</NavButton>
                    : <StyledLink to='/results'>
                        <NavButton className='result_button'>
                            Résultats
                        </NavButton>
                    </StyledLink>
            }
        </LinkWrapper>
    </SurveyContainer>
}

export default SurveyQuestions