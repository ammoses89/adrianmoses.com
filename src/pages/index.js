import React from "react"
import styled from 'styled-components'

import AM from '../../static/images/AM.png'

import "../../static/css/index.css"

const Main = styled.div`
    padding: 24px;
    height: 100vh;
    width: 100%;
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

const LinkList = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 200px; 
`;

const LinkItem = styled.li`
    margin-left: 5px;
    margin-right: 10px;
    margin-bottom: 60px;
    font-size: 1.5em;
`

const Anchor = styled.a`
    text-decoration: underline;
    color: inherit;
    font-size: 48px;
    font-weight: 700;
`;

const Image = styled.img`
    height: 48px;
    weight: 48px;
`

export default () => (
    <Main>
        <Header>
            <Image src={AM} />
        </Header>
        <LinkList>
            <LinkItem>
                <Anchor href="//thrust.fm">I build things like this.</Anchor>
            </LinkItem>
            <LinkItem>
                <Anchor href="//marsmoses.com">I upload music here.</Anchor>
            </LinkItem>
        </LinkList>
    </Main>
)
