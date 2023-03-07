import styled from "styled-components";

const HeadContainer = styled.div`
text-align: center;
background: papayawhip;
padding: 5px;

`;

 const Title = styled.h1`
 color: darkgreen;
 padding: 10px;
 margim: 20px;
 `;

 const Paragraph =styled.p`
 color: black;
 text-align: right;
 padding: 5px;
 margin: 20px;
 `;


export default function Header () {
    return (
        <>
        <HeadContainer>
        <Title>Seasony</Title>
        </HeadContainer>
        </>
    );
}
