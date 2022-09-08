
import styled from 'styled-components'
import { Size } from '../utils/constant/size'
import { Color } from '../utils/constant/color'
import ChartComponent from "../component/Chart"
import Paragraph from '../component/Paragraph'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Dashboard() {
    const [views, setViews] = useState<any[]>([])
    const [locations, setLocations] =useState<any[]>([])
    const [sources, setSources] = useState<any[]>([])
    const [active, setActive] = useState<string>("All Time")

    useEffect(() => {
        const loadData = async () => {
            try {
                var response = await axios.get('https://test.api.mainstack.io')

                if (response?.status === 200) {
                    setViews(response?.data?.graph_data?.views)
                    setLocations(response?.data?.top_locations)
                    setSources(response?.data?.top_sources)
                }

            }
            catch (e) {
                console.log(e)
            }

        }

        loadData()
    }, [])


    const viewValue = views !== null && Object.values(views);
    const viewDate = views !== null && Object.keys(views) as string[] | undefined;

    const locationCount = locations !== null && locations?.map((data: any) => data?.count);
    const sourceCount = sources !== null && sources?.map(data => data?.count);

    const newLocation = locations?.map(data => {
        return {
            country: data?.country,
            image: data?.country === "Nigeria" ? "https://res.cloudinary.com/doouwbecx/image/upload/v1662559180/the%20plug/Country_Nigeria_Style_Flag_Radius_On_eaieeo.png" : data?.country === "Germany" ? "https://res.cloudinary.com/doouwbecx/image/upload/v1662559181/the%20plug/Country_United_States_of_America_Style_Flag_Radius_On_l1aeli.png" : data?.country === "Ghana" ? "https://res.cloudinary.com/doouwbecx/image/upload/v1662559180/the%20plug/Country_Netherlands_Style_Flag_Radius_On_wzm0qt.png" : data?.country === "Finland" ? "https://res.cloudinary.com/doouwbecx/image/upload/v1662559180/the%20plug/Country_Andorra_Style_Flag_Radius_On_l0fhcy.png" : data?.country === "United Kingdom" ? "https://res.cloudinary.com/doouwbecx/image/upload/v1662559180/the%20plug/Country_Netherlands_Style_Flag_Radius_On_wzm0qt.png" : null,
            percent: data?.percent
        }
    })

    const newSource = sources?.map(data => {
        return {
            source: data?.source,
            image: data?.source === "google" ? "https://res.cloudinary.com/doouwbecx/image/upload/v1662559180/the%20plug/5296514_bird_tweet_twitter_twitter_logo_icon_2_o6puap.png" : data?.source === "instagram" ? "https://res.cloudinary.com/doouwbecx/image/upload/v1662559181/the%20plug/Instagram_bqrh5x.png" : data?.source === "facebook" ? "https://res.cloudinary.com/doouwbecx/image/upload/v1662559180/the%20plug/5296500_fb_social_media_facebook_facebook_logo_social_network_icon_1_hxdkq7.png" : data?.source === "linkedin" ? "https://res.cloudinary.com/doouwbecx/image/upload/v1662559181/the%20plug/g5891_qdygtg.png" : null,
            percent: data?.percent
        }
    })

    const sum = viewValue && viewValue?.reduce((partialSum: number, a: number) => partialSum + a, 0);
  
    const Data = [
        "1 Day",
        "3 Days",
        "7 Days",
        "30 Days",
        "All Time",
        "Custom Date"
    ]

    return (
        <Container>
            <Paragraph text={'Dashboard'} fontSize={Size.medium} color={Color.black} fontWeight='700' margin='0px 0px 25px 0px' />
            <RowBtw>
                <div>
                    <Paragraph text={'Good morning, Blessing ⛅️'} fontSize={Size.secondary} color={Color.black} fontWeight='700' />
                    <Paragraph text={'Check out your dashboard summary.'} fontSize={Size.primary} color={Color.black} fontWeight='400' margin='10px 0px 25px 0px' />
                </div>
                <Paragraph text={'View  analytics'} fontSize={Size.extraSmall} color={Color.secondary} fontWeight='400' />
            </RowBtw>
            <View>
                {
                    Data?.map((item: any, i: number) => {
                        return <Div key={i} onClick={() => setActive(item)} style={{ background: active === item ? "#FFDDCD" : "", border:  active === item ? '1px solid red' : ""}}>
                            <Paragraph text={item} fontSize={Size.primary} color={active === item ? Color.secondary : Color.black} fontWeight={'700'} />
                        </Div>
                    })
                }
            </View>

            <MenuDivContainer>
                <Paragraph text='Page Views' fontWeight='700' color={Color.black} fontSize='18px' />
                <Paragraph text='All time' fontWeight='400' color={Color.black} fontSize={Size.primary} margin='5px 0px 10px 0px' />
                <Paragraph text={`${sum}`} fontWeight='700' color={Color.black} fontSize={Size.large} margin='20px 0px 30px 0px' />
                <MenuDiv>
                    <ChartComponent type={'line'} viewDate={viewDate} viewValue={viewValue} />
                </MenuDiv>
            </MenuDivContainer>

            <CardDiv>
                <Card>
                    <RowBtw>
                        <Paragraph text='Top Locations' fontWeight='700' color={Color.black} fontSize="18px" />
                        <Paragraph text='View full reports' fontWeight='400' color={Color.secondary} fontSize={Size.primary} />
                    </RowBtw>

                    <Section>
                        <SectionDiv>
                            <div>
                                {
                                    newLocation?.map((data: any, i: number) => {
                                        return <RowStart key={i}>
                                            <Image src={data?.image as string} />
                                            <Paragraph text={`${data?.country} ${data?.percent}%`} fontWeight='400' color={Color.black} fontSize={Size.extraSmall} margin='0px 5px 0px 5px' />
                                            {data?.country === "Nigeria" ? <ColorDiv></ColorDiv> : data?.country === "Germany" ? <ColorDiv2></ColorDiv2> : data?.country === "Ghana" ? <ColorDiv3></ColorDiv3> : data?.country === "Finland" ? <ColorDiv4></ColorDiv4> : data?.country === "United Kingdom" ? <ColorDiv5></ColorDiv5> : null}

                                        </RowStart>
                                    })
                                }

                            </div>
                            <ChatDiv>
                                <ChartComponent type={'doughnut'} count={locationCount} />
                            </ChatDiv>
                        </SectionDiv>
                    </Section>
                </Card>
                <Card>
                    <RowBtw>
                        <Paragraph text='Top Referral source' fontWeight='700' color={Color.black} fontSize="18px" />
                        <Paragraph text='View full reports' fontWeight='400' color={Color.secondary} fontSize={Size.primary} />
                    </RowBtw>
                    <Section>
                        <SectionDiv>
                            <div>
                                {
                                    newSource?.map((data: any, i: number) => {
                                        return <RowStart key={i}>
                                            <Image src={data?.image as string} />
                                            <Paragraph text={`${data?.source} ${data?.percent}%`} fontWeight='400' color={Color.black} fontSize={Size.extraSmall} margin='0px 5px 0px 5px' />
                                            {data?.source === "google" ? <ColorDiv></ColorDiv> : data?.source === "instagram" ? <ColorDiv2></ColorDiv2> : data?.source === "facebook" ? <ColorDiv3></ColorDiv3> : data?.source === "linkedin" ? <ColorDiv4></ColorDiv4> : null}

                                        </RowStart>
                                    })
                                }
                            </div>
                            <ChatDiv>
                                <ChartComponent type={'doughnut'} count={sourceCount} />
                            </ChatDiv>
                        </SectionDiv>
                    </Section>
                </Card>
            </CardDiv>
        </Container>
    )
}

export default Dashboard

const Container = styled.div`

`
const RowStart = styled.div`
    display: flex;
    align-items: center;
    padding: 5px 0px;
`
const Section = styled.div`
    
`
const Image = styled.img`
    width: 20px;
    height: 20px;
`

const ColorDiv = styled.div`
  background: #599EEA;
  width: 10px;
  height: 10px;
  border-radius: 50%;
`
const ColorDiv2 = styled.div`
  background: #844FF6;
  width: 10px;
  height: 10px;
  border-radius: 50%;
`
const ColorDiv3 = styled.div`
  background: #0FB77A;
  width: 10px;
  height: 10px;
  border-radius: 50%;
`
const ColorDiv4 = styled.div`
  background: #FAB70A;
  width: 10px;
  height: 10px;
  border-radius: 50%;
`
const ColorDiv5 = styled.div`
  background: #F09468;
  width: 10px;
  height: 10px;
  border-radius: 50%;
`

const View = styled.div`
    display: flex;
`

const Div = styled.div`
background: #FFFFFF;
border: 1px solid #EFF1F6;
border-radius: 100px;
padding: 5px 10px;
margin: 0px 5px 10px 5px;
cursor: pointer;
`
const MenuDiv = styled.div`
 height: 300px;
`

const MenuDivContainer = styled.div`
border: 1px solid ${Color.grey};
padding: 10px;
border-radius: 10px;
`

const Card = styled.div`
    background: #FFFFFF;
    border: 1px solid #EFF1F6;
    border-radius: 12px;
    width: 45%;
    padding: 20px;
`

const CardDiv = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-top: 2%;

`

const RowBtw = styled.div`
    display: flex;
    justify-content: space-between;

`

const ChatDiv = styled.div`
    width: 150px;
`
const SectionDiv = styled.div`
    margin-top: 3%;
    display: flex;
    justify-content: space-between;
`