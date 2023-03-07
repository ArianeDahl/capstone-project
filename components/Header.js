import styled from "styled-components";

const HeadContainer = styled.div`
text-align: center;
background: papayawhip;
padding: 5px;

`;

 const Title = styled.h1`
 color: darkgreen;
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
