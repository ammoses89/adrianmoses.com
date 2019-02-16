import React from "react"
import styled from 'styled-components'

import "../../static/css/index.css"

const Title = styled.h1`
    font-size: 3.5em;
    text-align: center;
    color: #2F4858;
`;

const Main = styled.div`
    padding: 5px;
    height: 100vh;
    background-color: #86BBD8;
    width: 100%;
`;

const Section = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40%;
`;

const LinkList = styled.ul`
    color: #2F4858;
    list-style-type: none;
    display: flex;
    justify-content: center;
`;

const LinkItem = styled.li`
    margin-left: 5px;
    margin-right: 10px;
    font-size: 1.5em;
`

const Anchor = styled.a`
    text-decoration: none;
    color: inherit;
`;

export default () => (
    <Main>
        <Section>
            <Title>Adrian Moses</Title>
        </Section>
        <LinkList>
            <LinkItem>
                <Anchor href="//thrust.fm">thrust.fm</Anchor>
            </LinkItem>
            <LinkItem>
                <Anchor href="//marsmoses.com">marsmoses.com</Anchor>
            </LinkItem>
        </LinkList>
    </Main>
)
