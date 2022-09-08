

export type TextProps = {
    text: string;
    fontSize?: string;
    textAlign?: 'left' | 'right' | 'center' | 'justify';
    color?: string;
    lineHeight?: string;
    fontFamily?: string;
    textDecoration?: 'none' | 'underline' | 'overline' | 'line-through' | 'underline overline';
    textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase' | 'initial' | 'inherit';
    fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900',
    margin?: string
};

export type ChartType = {
    type: string,
    viewDate?: any,
    viewValue?: false | number[],
    count?: false | any[]
}

export type LayoutType = {
    children: any
}