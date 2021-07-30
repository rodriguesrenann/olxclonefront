import styled from "styled-components";

const Item = styled.div`
    a {
        display: block;
        border: 1px solid #FFF;
        background-color: #FFF;
        margin: 10px;
        text-decoration: none;
        padding: 10px;
        border-radius: 5px;
        color: #000;
        transition: all ease .2s;

        &:hover {
            background-color: #EEE;
            border: 1px solid #CCC;
        }

        .itemImage img {
            width: 100%;
            border-radius: 5px;

        }

        .itemName {
            font-weight: bold;
        }
        
    }
`;

export {Item};