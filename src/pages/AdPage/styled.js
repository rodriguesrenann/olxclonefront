import styled from "styled-components";

const Fake = styled.div`
   background-color: #DDD;
   height: ${props=>props.heigth || 20}px;
`

const PageArea = styled.div`
   display: flex;

   .box {
      background-color: #FFF;
      border-radius: 5px;
      box-shadow: 0px 0px 4px #999;
      margin-bottom: 20px;
      margin-top: 20px;
   }

   .box--padding {
      padding: 10px;
   }

   .leftSide {
    flex: 1;
    margin-right: 20px;

    .box {
       display: flex;
    }

    .adImage {
      height: 320px;
      width: 320px;
      margin-right: 20px;

      .each-slide img {
         display: flex;
         align-items: center;
         justify-content: center;
         background-size: cover;
         height: 320px;
      }
    }
    
    .adInfo {
        flex: 1;
    }

    .adName {
      margin-bottom: 20px;

      h2 {
         margin: 0;
         margin-top: 20px;
      }
    }

    .adDescription {

    }

    small {
       color: #999;
    }

   }

   .rightSide {
    width: 250px;

    .price span {
       color: #0000FF;
       display: block;
       font-size: 27px;
       font-weight: bold;
    }

    .contactSeller {
       background-color: #0000FF;
       color: #FFF;
       height: 30px;
       border-radius: 5px;
       box-shadow: 0px 0px 4px #999;
       display: flex;
       justify-content: center;
       align-items: center;
       text-decoration: none;
       margin-bottom: 20px;
    }

    

    .createdBy small {
      display: block;
      color: #999;
      margin-top: 10px;
    }


   }
`;

export  {PageArea, Fake} ;