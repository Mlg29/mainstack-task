import React from 'react'
import styled from 'styled-components'
import { Color } from '../utils/constant/color'
import { Size } from "../utils/constant/size"
import Paragraph from './Paragraph'

function SideBar() {

  const itemList = [
    {
      id: 1,
      name: "Dashboard",
      icon: "https://res.cloudinary.com/doouwbecx/image/upload/v1662559181/the%20plug/dashboard_gxbklu.png",
    },
    {
      id: 2,
      name: "Item 1",
      icon: "https://res.cloudinary.com/doouwbecx/image/upload/v1662559181/the%20plug/edit_kevs2t.png",
    },
    {
      id: 3,
      name: "Item 2",
      icon: "https://res.cloudinary.com/doouwbecx/image/upload/v1662559181/the%20plug/group_fjedzo.png",
    },
    {
      id: 4,
      name: "Item 3",
      icon: "https://res.cloudinary.com/doouwbecx/image/upload/v1662559181/the%20plug/hourglass_empty_gscbdx.png",
    },
  ]
  const itemOther = [
    {
      id: 1,
      name: "Item 4",
      icon: "https://res.cloudinary.com/doouwbecx/image/upload/v1662559180/the%20plug/add_a_photo_zqx8dv.png",
    },
    {
      id: 2,
      name: "Item 5",
      icon: "https://res.cloudinary.com/doouwbecx/image/upload/v1662559181/the%20plug/delete_cli9v1.png",
    }
  ]
  const itemOther2 = [
    {
      id: 1,
      name: "Item 6",
      icon: "https://res.cloudinary.com/doouwbecx/image/upload/v1662559182/the%20plug/subscriptions_jsl6he.png",
    },
    {
      id: 2,
      name: "Item 7",
      icon: "https://res.cloudinary.com/doouwbecx/image/upload/v1662559181/the%20plug/file_present_rh6y0j.png",
    },
    {
      id: 3,
      name: "Item 8",
      icon: "https://res.cloudinary.com/doouwbecx/image/upload/v1662559180/the%20plug/alarm_w77qiw.png",
    },
  ]
  return (
    <Container>
      <ImageIcon src='https://res.cloudinary.com/doouwbecx/image/upload/v1662559181/the%20plug/mainstack-logo_snqldf.png' />
      <Component>
        <Div>
          {
            itemList?.map((data, i) => {
              return <View key={i}>
                <Image src={data?.icon} />
                <Paragraph text={data?.name} fontSize={Size.extraSmall} fontWeight={data?.name === "Dashboard" ? "700" : "400"} color={data?.name === "Dashboard" ? Color.secondary : Color.dark} margin='0px 0px 0px 10px' />
              </View>
            })
          }
        </Div>
        <Header>Other 2</Header>
        <Div>
          {
            itemOther?.map((data, i) => {
              return <View key={i}>
                <Image src={data?.icon} />
                <Paragraph text={data?.name} fontSize={Size.extraSmall} margin='0px 0px 0px 10px' />
              </View>
            })
          }
        </Div>
        <Header>Other 2</Header>
        <Div>
          {
            itemOther2?.map((data, i) => {
              return <View key={i}>
                <Image src={data?.icon} />
                <Paragraph text={data?.name} fontSize={Size.extraSmall} margin='0px 0px 0px 10px' />
              </View>
            })
          }
        </Div>

      </Component>
      <BottomDiv>
        <SubDiv>
          <Image src='https://res.cloudinary.com/doouwbecx/image/upload/v1662559182/the%20plug/image_c6dmac.png' />
          <Paragraph text='Blessing Daniel' fontSize={Size.extraSmall} margin='0px 0px 0px 10px' />
        </SubDiv>
      </BottomDiv>
    </Container>
  )
}

export default SideBar


const Container = styled.div`
 width: 100%;
 display: flex;
 flex-direction: column;
 align-items: start;
 flex: 1;
 height: 100vh;
`
const Component = styled.div`
  margin-top: 5%;
  flex: 6;
`

const Image = styled.img`
  width: 15px;
  height: 15px;
`

const ImageIcon = styled.img`

`

const Div = styled.div`

`

const View = styled.div`
 display: flex;
 align-items: center;
 padding: 5px;
`


const Header = styled.p`
 text-transform: uppercase;
 font-size: ${Size.extraSmall}
`

const BottomDiv = styled.div`
 flex: 1;
`
const SubDiv = styled.div`
  display: flex;
  align-items: center;
`