import { Button, styled } from '@mui/material';

export const StyledButton = styled(Button, {})`
    background: ${props => (props.color ? 'error' : '#366eff')};
    box-shadow: 0 4px 18px rgba(54, 110, 255, 0.35),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);
    border-radius: 30px;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.01em;
    text-transform: none;
`;
