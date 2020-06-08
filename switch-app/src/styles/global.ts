import { createGlobalStyle  } from 'styled-components';

export default createGlobalStyle`
    * {
        margin : 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background: ${props => props.theme.colors.background};
        font-size:14px;
        color: ${props => props.theme.colors.text};
        font-family: sans-serif;
    }
    p {
        padding: 40px
        font-size: 1.1em;
        line-height: 1.8em;
        margin-top: 2em;
      }
    
`;