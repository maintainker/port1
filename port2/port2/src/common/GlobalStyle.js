import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
    *{
        padding : 0;
        margin : 0;
    }
    
@font-face {
    font-family: 'NotoSansKR';
    font-style: normal;
    font-weight: 300;
    src: local('Noto Sans Light'), local('NotoSans-Light'), url(../assets/fonts/NotoSans-Light.eot);
    src: url(../assets/fonts/NotoSans-Light.eot?#iefix) format('embedded-opentype'),
            url(../assets/fonts/NotoSansKR-Light.woff2) format('woff2'),
            url(../assets/fonts/NotoSansKR-Light.woff) format('woff'),
            url(../assets/fonts/NotoSansKR-Light.otf) format('opentype')
}
@font-face {
    font-family: 'NotoSansKR';
    font-style: normal;
    font-weight: normal;
    src: local('Noto Sans Regular'), local('NotoSans-Regular'), url(../assets/fonts/NotoSans-Regular.eot);
    src: url(../assets/fonts/NotoSans-Regular.eot?#iefix) format('embedded-opentype'),
            url(../assets/fonts/NotoSansKR-Regular.woff2) format('woff2'),
            url(../assets/fonts/NotoSansKR-Regular.woff) format('woff'),
            url(../assets/fonts/NotoSansKR-Regular.otf) format('opentype')
}
@font-face {
    font-family: 'NotoSansKR';
    font-style: normal;
    font-weight: bold;
    src: local('Noto Sans Bold'), local('NotoSans-Bold'), url(../assets/fonts/NotoSans-Bold.eot);
    src: url(../assets/fonts/NotoSans-Bold.eot?#iefix) format('embedded-opentype'),
            url(../assets/fonts/NotoSansKR-Bold.woff2) format('woff2'),
            url(../assets/fonts/NotoSansKR-Bold.woff) format('woff'),
            url(../assets/fonts/NotoSansKR-Bold.otf) format('opentype')
}
a{
    color:#000;
    text-decoration:none;
}
ul,li{
    list-style:none;
}
`;