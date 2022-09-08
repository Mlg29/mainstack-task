import React, { useMemo, memo } from 'react'
import { TextProps } from '../utils/types';


const Paragraph = memo(
    ({
        text,
        fontSize = '16px',
        lineHeight = "22px",
        textTransform ='inherit',
        textDecoration = 'none',
        textAlign='left',
        color = 'black',
        fontFamily = 'Söhne',
        fontWeight = '400',
        margin= "0%",
        ...rest
    }: TextProps) => {

        const propsStyle = useMemo(
            () => ({
                color,
                fontSize,
                textAlign,
                lineHeight,
                fontWeight,
                fontFamily,
                margin,
                textTransform, textDecoration
            }),
            [color, fontWeight, textAlign, lineHeight,fontFamily, fontSize, margin, textTransform, textDecoration],
        );

        return (
            <p
                style={propsStyle}
                {...rest}
            >
                {text}
            </p>
        )
    })


export default Paragraph

