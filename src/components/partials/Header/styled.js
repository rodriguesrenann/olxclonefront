import styled from 'styled-components';

const HeaderArea = styled.div`
    background-color: #FFF;
    height: 60px;
    margin-bottom: solid #CCC;
    
    .container {
        max-width: 1000px;
        margin: auto;
        display: flex;
    }

    a {
        text-decoration: none;
    }

    .logo {
        flex: 1;
        display: flex;
        height: 60px;
        align-items: center;
    }

    .logo-1,
    .logo-2,
    .logo-3 {
        font-size: 27px;
        font-weight: bold;
    }

    .logo-1 {color: #FF0000}
    .logo-2 {color: #00FF00}
    .logo-3 {color: #0000FF}

    nav {
        padding-top: 10px;
        padding-bottom: 10px;

        ul, li {
            margin: 0;
            padding: 0;
            list-style: none;
        }

        ul {
            display: flex;
            align-items: center;
            height: 40px;
        }

        li {
            margin-right: 20px;

            a, button {
                border: 0;
                outline: none;
                cursor: pointer;
                color: #000;
                font-size: 14px;
                text-decoration: none;
                
                &:hover {
                    color: #999;
                }

                &.button {
                    background-color: #FF8100;
                    border-radius: 4px;
                    color: #FFF;
                    padding: 5px 10px;
                }

                &.button:hover {
                    background-color: #E57706;
                }
            }
        }
        .logoutButton {
            background: border-box;
        }
    }
`;

export { HeaderArea };