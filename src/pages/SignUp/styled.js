import styled from "styled-components";

const PageArea = styled.div`
    form {
        background-color: #FFF;
        border-radius: 3px;
        padding: 10px;
        box-shadow: 0px 0px 3px #CCC;
    }

    .area {
        display: flex;
        align-items: center;
        padding: 10px;
        max-width: 500px;
    }

    .area-title {
        width: 200px;
        text-align: right;
        padding-right: 20px;
        font-weight: bold;
        font-size: 14px;
    }

    .area-input {
        flex: 1;
    }

    input {
        width: 100%;
        font-size: 14px;
        padding: 5px;
        border-radius: 3px;
        border: 1px solid #CCC;
        outline: none;
        transition: all ease .4s;

        &:focus {
            border: 1px solid #333;
            color: #333;
        }
    }
    
    .area-check {
        float: left;
        
    }

    button {
        background-color: #0089FF;
        border: 0;
        outline: 0;
        padding: 5px 10px;
        border-radius: 4px;
        color: #FFF;
        font-size: 15px;
        cursor: pointer;

        &:hover {
            background-color: #006FCE;
        }
    }
`;

export default PageArea;