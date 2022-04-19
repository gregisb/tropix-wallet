import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    font-family: 'Montserrat', sans-serif

    
`;

export const Title = styled.div`
    text-align: center;
    font-weight: bold;
    color: #00090c;
    margin-bottom: 5px;
    font-family: 'Montserrat', sans-serif
`;

export const Info = styled.div<{color?: string}>`
    text-align: center;
    font-weight: bold;
    color: ${props => props.color ?? '#00090c'};
`;