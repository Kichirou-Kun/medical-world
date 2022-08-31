/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}",],
    theme: {
        extend: {
            width: {
                40: "40px",
                80: "80px",
                100: "100px",
                130: "130px",
                150: "150px",
                190: "190px",
                180: "180px",
                225: "225px",
                275: "275px",
                300: "300px",
                340: "340px",
                350: "350px",
                375: "375",
                460: "460px",
                656: "656px",
                880: "880px",
                508: "508px",
                "60%": "60%"
            },
            height: {
                80: "80px",
                120: "120px",
                150: "150px",
                225: "225px",
                300: "300px",
                340: "340px",
                370: "370px",
                420: "420px",
                510: "510px",
                600: "600px",
                685: "685px",
                800: "800px",
                "90vh": "90vh",
            },
            minWidth: {
                210: "210px",
                350: "350px",
                620: "620px",
            },
            screens: {
                xs: "280px",
                sm: "640px",
                md: "768px",
                lg: "1024px",
                xl: "1280px",
                "2xl": "1536px"
            },
            colors: {
                textColor: "#173D6A",
                bodyBg: "#F2F6FF",
                mainColor: "#00ADED",
                hoverColor: "#8CC2F0",
                darkBlue: "#F2F6FF"
            }
        },
    },
    plugins: [],
}