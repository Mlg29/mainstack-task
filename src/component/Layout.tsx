import React from 'react'
import styled from 'styled-components'
import { Color } from '../utils/constant/color'
import { LayoutType } from '../utils/types'
import SideBar from './SideBar'

const Layout: React.FC<LayoutType> = ({ children }) => {
    return (
        <Container>
            <Div>
                <SideBar />
            </Div>
            <View>
                {children}
            </View>
        </Container>
    )
}

export default Layout

const Container = styled.div`
 width: 100%;
 display: flex;
`

const Div = styled.div`
width: 13%;
border-right: 1px solid ${Color.grey};
padding: 1% 3%;
`
const View = styled.div`
width: 87%;
padding: 1% 3%;
height: 95vh;
overflow-y: scroll;
-ms-overflow-style: none;
scrollbar-width: none;

::-webkit-scrollbar {
  display: none;
}
`