module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        fontFamily: {
            san400: ['clearsans-400', 'sans-serif'],
            san500: ['clearsans-500', 'sans-serif'],
            san700: ['clearsans-700', 'sans-serif'],
        },
        colors: {
            blue: '#004DFF',
            white: '#fff',
            'blue-light': '#BBCFFB',
            pink: '#ff49db',
            orange: '#ff7849',
            green: '#04B800',
            yellow: '#ffc82c',
            'gray-dark': '#273444',
            'gray-light': '#D3D7DB',
            'black-light': '#667386',
            'black-dark': '#04004D',
        },
        extend: {
            boxShadow: {
                type1: '0px 10px 20px rgba(41, 39, 77, 0.1)',
            },
        },
    },
    plugins: [],
};
