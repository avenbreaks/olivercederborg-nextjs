const spacing = {
    none: 'none',
    1: '0.25rem',
    '-1': '-0.25rem',
    2: '0.5rem',
    '-2': '-0.5rem',
    3: '0.75rem',
    '-3': '-0.75rem',
    4: '1rem',
    '-4': '-1rem',
    5: '1.25rem',
    '-5': '-1.25rem',
    6: '1.5rem',
    '-6': '-1.5rem',
    7: '1.75rem',
    '-7': '-1.75rem',
    8: '2rem',
    '-8': '-2rem',
    10: '2.5rem',
    '-10': '-2.5rem',
    11: '2.75rem',
    '-11': '-2.75rem',
    12: '3rem',
    '-12': '-3rem',
    14: '3.5rem',
    '-14': '-3.5rem',
    16: '4rem',
    '-16': '-4rem',
    18: '4.5rem',
    '-18': '-4.5rem',
    20: '5rem',
    '-20': '-5rem',
    22: '5.5rem',
    '-22': '-5.5rem',
    24: '6rem',
    '-24': '-6rem',
    25: '6.25rem',
    '-25': '-6.25rem',
    26: '6.5rem',
    '-26': '-6.5rem',
    28: '7rem',
    '-28': '-7rem',
    30: '7.5rem',
    '-30': '-7.5rem',
    32: '8rem',
    '-32': '-8rem',
    36: '9rem',
    '-36': '-9rem',
    40: '10rem',
    '-40': '-10rem',
    44: '11rem',
    '-44': '-11rem',
    48: '12rem',
    '-48': '-12rem',
    52: '13rem',
    '-52': '-13rem',
    56: '14rem',
    '-56': '-14rem',
    60: '15rem',
    '-60': '-15rem',
    64: '16rem',
    '-64': '-16rem',
    66: '16.5rem',
    '-66': '-16.5rem',
    72: '18rem',
    '-72': '-18rem',
    80: '20rem',
    '-80': '-20rem',
    88: '22rem',
    '-88': '-22rem',
    96: '24rem',
    '-96': '-24rem',
    128: '32rem',
    '-128': '-32rem',
    xs: '20rem',
    sm: '24rem',
    md: '28rem',
    lg: '32rem',
    xl: '36rem',
    '2xl': '42rem',
    '3xl': '48rem',
    '4xl': '56rem',
    '5xl': '64rem',
    '6xl': '72rem',
    '8xl': '96rem',
    '10xl': '120rem',
}
module.exports = {
    purge: ["{pages,components}/**/*.{js,jsx,ts,tsx}"],
    theme: {
        container: {
            center: true,
            padding: '1.5rem',
        },
        backgroundPosition: {
            'large-desk-xl': 'right 0rem bottom',
            'large-desk': 'right -10rem bottom',
        },
        borderWidth: {
            default: '1px',
            0: '0',
            1: '1px',
            2: '2px',
            3: '3px',
            4: '4px',
            5: '5px',
            6: '6px',
            8: '8px',
        },
        boxShadow: {
            default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
            md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
            outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
            progress: '0 0 10px 0 rgba(0, 0, 0, 0.75)',
            none: 'none',
        },
        extend: {
            backgroundImage: theme => ({
                'hero-pattern': "url('/images/hero-graphic.webp')",
            }),
            opacity: {
                1: '.01',
                2: '.02',
                3: '.03',
                4: '.04',
                5: '.05',
                10: '.1',
                20: '.2',
                30: '.3',
                40: '.4',
                50: '.5',
                60: '.6',
                70: '.7',
                80: '.8',
                90: '.9',
            },
            fontFamily: {
                display: ['Poppins', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', 'sans-serif'],
            },
            fontSize: {
                '7xl': '4.75rem',
                '8xl': '6rem',
                'secheader': '2.5rem',
            },
            colors: {
                backgroundOne: '#141628',
                backgroundTwo: '#1B1E32',
                primaryBrand: '#FD4370',
                primaryGrey: '#262A43',
                greyText: '#D1D5E8',
            },
            negativeMargin: spacing,
            margin: spacing,
            padding: spacing,
            width: {
                row: 'calc(100% + 1.5rem)',
                'row-tight': 'calc(100% + 0.5rem)',
                column: 'calc(100% + 1.5rem)',
                'column-tight': 'calc(100% + 0.5rem)',
            },
            maxWidth: spacing,
            minWidth: spacing,
            maxHeight: spacing,
            minHeight: spacing,
        },
    },
    variants: {
        padding: ['responsive', 'hover'],
    },
    plugins: [],
}