import styled from 'styled-components';

export const Container = styled.div`
    background-color: #FFF;
    box-shadow: 0px 0px 5px #CCC;
    border-radius: 10px;
    padding: 20px;
    margin-top: 20px;
    display: flex;
    align-items: center;

    @media(max-width: 800px) {
        margin-top: -40;
        margin-right: 10px;
        margin-left: 10px;        
      }

      @media(max-width: 500px) {
        width: 418px;
        flex-wrap: wrap;
        margin-right: 15px     
      }

      @media(max-width: 200px) {
        width: 100%     
      }
`;
export const InputLabel = styled.label`
    flex: 1;
    margin: 10px;
`;
export const InputTitle = styled.div`
    font-weight: bold;
    margin-bottom: 5px;
`;
export const Input = styled.input`
    width: 100%;
    height: 30px;
    padding: 0 5px;
    border: 1px solid lightblue;
    border-radius: 5px;
`;
export const Select = styled.select`
    width: 100%;
    height: 30px;
    padding: 0 5px;
    border: 1px solid lightblue;
    border-radius: 5px;
`;
export const Button = styled.button`
    width: 100%;
    height: 30px;
    padding: 0 5px;
    border: 1px solid lightblue;
    border-radius: 5px;
    background-color: #004358;
    color: white;
    cursor: pointer;
    transition: .6s;
    &:hover {
        background-color: rgba(0, 67, 88, .7);
        color: white;
    }
`;
