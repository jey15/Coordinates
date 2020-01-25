import styled from 'styled-components';

export const Innerbox = styled.div`
    border: 1px solid rgb(211, 211, 211);
    height: ${props => (props.height)}px;
    width: ${props => (props.width)}px;
    position: relative;
    top: ${props => 
        ((300 - props.y) === 300 ? 
            ((300 - props.y) - (props.height/2) -1) : 
            ((300 - props.y) <= 0 ? 
                ((300 - props.y) + (props.height/2 + ((300 - props.y)*-1)) +1) : (300 - props.y)) )
        }px;
    left: ${props => 
        (props.x === 0 ? 
            (props.x + (props.width/2)) : 
               (props.x > 399 ? 
                    ((props.x - (props.x - 400)) - (props.width/2)) 
                        : props.x
                )
        )
        
    }px;
    transform: translate(-50%, -50%);
`;


// padding-top: ${(props.height / 2)};
// padding-bottom: ${(props.height / 2)};
// padding-left: ${(props.width / 2)};
// padding-right: ${(props.width / 2)};
// - (props.width/2)
// - ((props.height/2))
// background-color: red;
