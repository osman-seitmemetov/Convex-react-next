import {FC} from "react";
import style from "./Picture.module.scss";

interface PictureOrdersEmptyProps {
    className?: string
}

const PictureOrdersEmpty: FC<PictureOrdersEmptyProps> = ({className}) => {
    return (
        <svg className={`${style.picture} ${className}`} width="381" height="281" viewBox="0 0 381 281" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M138.848 62.3363C144.745 68.1257 154.034 65.1252 145.959 57.1625C141.431 52.7002 132.181 55.7969 138.848 62.3363Z" fill="#EBF2FF"/>
            <path d="M174.289 62.1632C177.372 63.5096 180.263 55.1622 176.408 54.4697C172.188 53.7004 169.972 60.2783 174.289 62.1632Z" fill="#EBF2FF"/>
            <path d="M161.742 79.5504C162.397 79.5312 162.937 79.4735 163.226 79.3966C165.635 78.7041 166.579 75.896 163.361 75.7614C161.916 75.7037 158.351 75.7806 157.657 77.5116C156.982 79.2042 159.796 79.5889 161.742 79.5504Z" fill="#EBF2FF"/>
            <path d="M143.918 124.981C155.422 128.674 172.014 122.961 177.525 111.729C182.459 101.669 175.348 105.631 170.029 108.228C163.824 111.267 157.022 113.287 150.084 113.44C143.108 113.594 136.113 111.825 130.37 107.766C127.885 105.997 124.454 99.9383 121.275 103.516C116.361 109.094 138.503 123.23 143.918 124.981Z" fill="#EBF2FF"/>
            <path d="M56.8524 157.313C71.6714 160.236 85.893 153.139 95.509 142.118C99.1319 137.964 116.919 113.037 108.921 108.497C107.572 107.728 87.3769 116.98 74.4656 127.173C71.5365 129.481 51.1098 156.178 56.8524 157.313Z" fill="#EBF2FF"/>
            <path d="M78.6091 172.488C72.9821 176.238 80.4976 199.088 86.8184 194.895C92.9656 190.818 85.4887 167.91 78.6091 172.488Z" fill="#EBF2FF"/>
            <path d="M80.9408 233.382C79.6304 222.958 67.3359 238.806 64.8307 241.057C59.2808 246.057 46.5238 257.232 50.1273 266.099C54.02 275.697 62.0365 266.214 65.0042 261.56C69.7254 254.193 82.1356 242.749 80.9408 233.382Z" fill="#EBF2FF"/>
            <path d="M95.7215 193.895C96.1069 191.106 101.002 170.007 96.1262 170.065C91.8481 170.122 91.6361 189.952 91.2122 192.972C88.6878 210.936 85.5081 228.824 81.6926 246.557C80.652 251.385 74.7167 266.483 77.9348 269.58C81.8467 273.331 84.6024 254.847 85.2191 252.058C89.4778 232.805 92.9851 213.398 95.7215 193.895Z" fill="#EBF2FF"/>
            <path d="M118.075 262.521C112.352 260.905 92.9853 254.097 89.1697 260.828C85.1615 267.887 98.0149 274.984 102.678 277.427C108.498 280.466 116.842 282.813 123.009 279.081C132.548 273.35 126.131 264.771 118.075 262.521Z" fill="#EBF2FF"/>
            <path d="M171.531 225.092C164.266 225.092 156.866 226.477 149.756 227.131C143.628 227.689 137.018 228.266 131.295 230.689C128.5 231.882 125.379 234.132 127.383 237.44C130.504 242.557 144.88 242.076 150.064 242.537C160.104 243.403 179.663 245.557 188.2 238.537C196.294 231.882 186.081 226.996 179.779 225.804C177.043 225.285 174.306 225.092 171.531 225.092Z" fill="#EBF2FF"/>
            <path d="M233.293 245.211C212.153 233.844 220.073 209.532 220.863 190.183C221.095 184.471 220.941 165.756 213.714 163.39C206.295 160.948 211.845 180.989 211.941 184.451C212.288 195.684 210.323 206.839 208.877 217.918C207.76 226.554 204.445 239.498 209.32 247.538C213.232 253.981 227.589 260.386 235.085 260.982C248.613 262.098 239.633 248.634 233.293 245.211Z" fill="#EBF2FF"/>
            <path d="M250.002 200.166C243.123 190.279 233.661 216.053 235.742 221.957C240.483 235.325 255.899 208.628 250.002 200.166Z" fill="#EBF2FF"/>
            <path d="M312.284 181.874C302.745 173.777 293.938 164.795 286.095 155.043C283.166 151.408 277.481 139.483 273.608 137.579C269.368 135.502 269.599 138.04 270.679 141.56C273.627 151.177 285.671 162.102 292.416 169.334C296.597 173.796 300.914 178.489 305.712 182.278C306.676 183.028 309.104 186.163 310.665 185.798C312.11 185.452 314.133 183.451 312.284 181.874Z" fill="#EBF2FF"/>
            <path d="M335.947 106.766C330.744 101.996 324.886 94.2449 317.158 98.9764C313.034 101.496 303.572 114.633 304.652 119.614C306.906 129.962 316.156 118.383 320.993 116.671C324.365 115.46 345.987 115.998 335.947 106.766Z" fill="#EBF2FF"/>
            <path d="M365.72 88.5905C364.216 83.0127 352.924 78.0119 347.894 80.7624C340.148 84.9745 349.59 90.0715 351.228 94.7645C352.461 98.3228 348.26 110.94 355.41 110.094C359.803 109.575 366.779 92.5526 365.72 88.5905Z" fill="#EBF2FF"/>
            <path d="M0.274604 205.839C-0.0915348 205.839 -0.0915348 206.416 0.274604 206.416C0.660014 206.416 0.660014 205.839 0.274604 205.839Z" fill="#EBF2FF"/>
            <path d="M218.377 125.5C214.986 121.441 199.087 104.67 192.94 107.497C191.071 107.151 190.705 108.651 191.186 111.017C191.379 116.691 198.027 126.846 200.109 129.481C206.333 137.367 215.197 147.811 225.025 145.484C234.217 143.329 219.707 127.096 218.377 125.5Z" fill="#EBF2FF"/>
            <path d="M310.666 45.4109C308.855 45.8148 308.527 42.949 310.338 42.5451C314.905 41.5257 319.511 40.6794 324.117 39.9293C340.188 37.275 372.177 30.3509 372.235 30.2739C369.364 29.947 301.493 18.5029 295.076 17.5989C296.868 20.3878 305.906 32.5627 303.093 37.2558C300.915 43.1413 299.701 46.3341 298.14 51.0079C296.271 56.6049 309.914 51.1041 313.923 52.1042C313.942 52.1042 313.942 52.1042 313.961 52.1042C317.218 57.2397 320.532 62.3174 324.483 66.9719C325.119 67.7028 326.256 67.5297 326.93 66.9719C340.208 56.0087 371.233 35.1016 374.066 33.3513C373.7 33.409 326.988 41.7757 310.666 45.4109Z" fill="#E0FFEC"/>
            <path d="M136.132 36.1977C149.621 31.9663 191.246 35.4284 180.165 12.2902C178.489 8.77039 168.005 -0.28871 165.404 2.82716C165.577 2.63482 166.021 6.63544 165.866 7.17399C164.325 12.0978 160.972 13.5981 155.942 14.5213C146.5 16.2716 135.843 13.5404 127.653 19.8683C123.24 23.2726 114.279 38.9674 118.018 45.4107C119.848 48.565 123.876 45.1222 126.015 46.4878C128.829 48.2958 127.191 50.5461 128.713 52.0848C130.582 53.9889 130.871 55.5661 132.413 51.6232C135.804 42.9295 132.336 37.3902 136.132 36.1977Z" fill="#E0FFEC"/>
            <path d="M127.809 47.7188C125.092 46.007 121.353 46.1416 118.752 48.0265C116.169 49.9114 114.898 53.4312 115.707 56.5279C116.266 58.682 117.711 60.5285 119.484 61.8748C121.43 63.3366 123.801 64.2406 126.229 64.4329" stroke="#002464" strokeWidth="1.54164" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M120.908 53.1235C122.18 53.8352 123.471 54.5468 124.743 55.2585" stroke="#002464" strokeWidth="1.54164" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M151.183 51.9309C151.067 53.1618 151.144 54.412 151.414 55.6237C151.973 54.412 151.954 52.931 151.356 51.7385" stroke="#002464" strokeWidth="1.54164" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M145.152 45.5454C148.236 44.0451 151.666 43.2565 155.096 43.2373" stroke="#002464" strokeWidth="1.54164" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M172.129 40.987C169.451 40.91 166.753 41.6409 164.498 43.0642C164.171 43.2565 163.862 43.4873 163.67 43.8143C163.438 44.2182 163.419 44.6991 163.4 45.1607C163.361 46.6994 163.323 48.2573 163.631 49.7575C164.228 52.8542 166.175 55.5469 167.023 58.5858C167.158 59.0859 167.273 59.6437 167.081 60.1245C166.926 60.5477 166.56 60.8554 166.213 61.1439C165.076 62.1248 163.92 63.125 162.783 64.1059" stroke="#002464" strokeWidth="1.54164" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M169.414 50.7003C169.337 51.7774 169.376 52.8737 169.568 53.9316C169.915 52.7583 169.915 51.4696 169.549 50.2964" stroke="#002464" strokeWidth="1.54164" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M155.752 69.4531C158.874 70.4148 162.265 70.5879 165.464 69.9147" stroke="#002464" strokeWidth="1.54164" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M176.448 31.6201C176.833 41.0639 177.238 50.5077 177.624 59.9514C177.816 64.6445 178.009 69.4144 177.007 74.0113C176.005 78.6082 173.673 83.1089 169.761 85.7439C165.541 88.5905 159.991 88.8982 155.058 87.6288C150.125 86.3594 145.673 83.6859 141.434 80.8778" stroke="#002464" strokeWidth="1.54164" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M172.574 84.0132C172.227 90.6488 172.497 97.3229 173.402 103.901" stroke="#002464" strokeWidth="1.54164" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M125.65 66.6257C126.826 78.3776 127.288 90.2063 127.038 102.016" stroke="#002464" strokeWidth="1.54164" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M142.436 82.1472C144.825 86.0517 147.716 89.783 151.628 92.1872C155.52 94.5914 160.588 95.4762 164.751 93.5528C166.119 92.9181 167.352 92.0141 168.566 91.0909C169.626 90.3023 170.686 89.456 171.38 88.3405C172.074 87.2249 172.324 85.7247 171.669 84.5899C168.027 88.2828 162.438 89.6676 157.293 88.956C152.148 88.2635 147.407 85.7247 143.283 82.5511" fill="#002464"/>
            <path d="M142.436 82.1472C144.825 86.0517 147.716 89.783 151.628 92.1872C155.52 94.5914 160.588 95.4762 164.751 93.5528C166.119 92.9181 167.352 92.0141 168.566 91.0909C169.626 90.3023 170.686 89.456 171.38 88.3405C172.074 87.2249 172.324 85.7247 171.669 84.5899C168.027 88.2828 162.438 89.6676 157.293 88.956C152.148 88.2635 147.407 85.7247 143.283 82.5511" stroke="#002464" strokeWidth="1.54164" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M124.378 102.17C113.587 107.17 101.736 110.517 90.5586 116.268C75.2964 124.135 63.5992 137.771 55.4864 152.889C47.3735 168.007 42.5366 184.625 38.2778 201.243C31.7258 226.689 26.3687 252.424 20.9922 278.139" stroke="#002464" strokeWidth="1.54164" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M79.6504 175.008C82.6566 180.355 84.969 186.086 86.5299 192.03" stroke="#002464" strokeWidth="1.54164" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M94.1432 173.219C88.4006 204.609 82.4845 235.96 76.4336 267.292" stroke="#002464" strokeWidth="1.54164" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M76.279 234.344C70.6328 246.077 57.2012 253.097 53.0195 265.445" stroke="#002464" strokeWidth="1.54164" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M64.8715 254.924C62.983 257.963 61.4414 261.214 60.2852 264.599" stroke="#002464" strokeWidth="1.54164" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M127.057 104.901C134.013 109.094 141.76 112.248 149.873 112.94C157.986 113.633 166.484 111.69 172.843 106.651" stroke="#002464" strokeWidth="1.54164" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M134.168 112.864C141.992 119.249 153.149 121.346 162.746 118.211" stroke="#002464" strokeWidth="1.54164" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M211.751 163.852C216.472 201.493 204.544 238.96 199.707 276.581" stroke="#002464" strokeWidth="1.54164" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M132.145 233.805C148.351 229.959 165.097 228.439 181.727 229.305" stroke="#002464" strokeWidth="1.54164" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M145.365 238.73C151.879 237.422 158.7 237.691 165.098 239.499" stroke="#002464" strokeWidth="1.54164" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M92.3711 261.425C103.375 261.945 114.783 262.579 124.534 267.695C124.88 267.869 125.266 268.119 125.285 268.503C125.324 268.965 124.861 269.273 124.456 269.484C118.444 272.581 111.603 273.619 104.897 274.6C108.038 276.274 111.372 277.524 114.84 278.332" stroke="#002464" strokeWidth="1.54164" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M176.641 104.131C196.123 105.343 213.621 117.883 224.624 133.963C235.608 150.062 240.85 169.372 243.933 188.606" stroke="#002464" strokeWidth="1.54164" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M227.648 219.496C242.737 196.107 257.826 172.738 272.934 149.35" stroke="#002464" strokeWidth="1.54164" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M274.381 137.445C285.423 152.235 297.39 166.334 310.224 179.605" stroke="#002464" strokeWidth="1.54164" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M271.123 145.676C280.296 160.39 291.453 173.854 304.21 185.625" stroke="#002464" strokeWidth="1.54164" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M299.007 183.048C290.644 203.416 282.223 223.9 270.564 242.595C266.44 249.212 261.603 255.867 254.569 259.271C247.17 262.848 238.286 262.271 230.539 259.502C222.792 256.751 215.932 252.001 209.188 247.327" stroke="#002464" strokeWidth="1.54164" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M242.7 202.743C238.634 209.071 236.417 216.553 236.379 224.073" stroke="#002464" strokeWidth="1.54164" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M88.0724 121.307C85.4709 122.865 83.1199 124.865 81.1543 127.173" stroke="#002464" strokeWidth="1.54164" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M280.643 140.214C283.475 136.867 286.462 133.655 289.584 130.597" stroke="#002464" strokeWidth="1.54164" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M290.797 130.828C286.23 120.192 288.985 106.843 297.407 98.8999C299.488 96.938 301.839 95.3032 304.19 93.6875C309.2 90.2062 314.211 86.7442 319.221 83.2629C320.473 82.3973 322.266 81.5318 323.403 82.5512C323.961 83.0513 324.135 83.8783 324.135 84.6284C324.135 86.4172 323.325 88.0905 322.458 89.6485C319.414 95.0531 315.251 99.8423 310.318 103.612" stroke="#002464" strokeWidth="1.54164" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M308.875 109.498C309.896 107.574 310.552 105.459 310.783 103.285" stroke="#002464" strokeWidth="1.54164" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M318.934 97.8037C328.338 91.4565 338.32 85.9364 348.706 81.3588C349.863 80.8395 351.077 80.3394 352.349 80.2817C353.62 80.224 354.989 80.7049 355.644 81.8012C356.588 83.3399 355.74 85.3594 354.623 86.7827C352.773 89.1292 350.21 90.8026 347.685 92.4375C342.232 95.9765 336.778 99.5155 331.324 103.054" stroke="#002464" strokeWidth="1.54164" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M362.274 84.4553C363.565 84.2245 364.837 85.1862 365.28 86.4171C365.723 87.6481 365.415 89.0329 364.779 90.1677C364.162 91.3025 363.237 92.245 362.332 93.1874C362.081 93.4374 361.831 93.7452 361.85 94.1106C361.869 94.3991 362.1 94.6299 362.293 94.8607C363.16 95.9571 363.18 97.5727 362.659 98.8614C362.139 100.169 361.156 101.227 360.135 102.189" stroke="#002464" strokeWidth="1.54164" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M358.765 94.3989C351.654 100.073 344.312 105.478 336.797 110.594" stroke="#002464" strokeWidth="1.54164" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M340.363 115.248C345.065 112.075 349.844 109.055 354.701 106.151" stroke="#002464" strokeWidth="1.54164" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M358.169 106.613C358.573 108.555 357.417 110.479 356.068 111.96C352.676 115.691 347.974 117.941 343.87 120.884C338.551 124.673 334.196 129.636 329.359 134.04C324.522 138.425 318.915 142.368 312.459 143.426" stroke="#002464" strokeWidth="1.54164" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M318.124 145.676C314 154.37 309.568 162.89 304.789 171.238" stroke="#002464" strokeWidth="1.54164" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M308.586 123.673C313.115 119.807 318.857 117.383 324.792 116.806" stroke="#002464" strokeWidth="1.54164" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M328.279 100.9C332.923 105.67 336.951 111.056 340.227 116.864" stroke="#002464" strokeWidth="1.54164" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M74.5047 101.112C74.2349 101.458 74.5239 102.073 74.9672 102.093C75.4104 102.131 75.7572 101.573 75.5453 101.189" stroke="#002464" strokeWidth="1.54164" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M187.991 95.3608C187.683 95.5532 187.837 96.1494 188.203 96.1494C188.569 96.1494 188.723 95.5532 188.415 95.3608" stroke="#002464" strokeWidth="1.54164" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M256.477 120.461C255.976 120.153 255.244 120.73 255.398 121.288C255.571 121.846 256.496 121.903 256.747 121.384" stroke="#002464" strokeWidth="1.54164" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M219.324 268.753C218.785 268.869 219.555 269.753 219.941 269.349C220.326 268.946 220.076 268.292 219.825 267.792" stroke="#002464" strokeWidth="1.54164" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M328.955 166.756C328.376 166.987 329.513 167.795 329.552 167.179" stroke="#002464" strokeWidth="1.54164" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M210.324 157.89C210.17 158.448 210.305 159.063 210.69 159.506" stroke="#002464" strokeWidth="1.54164" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M166.098 117.383C166.502 117.114 166.907 116.845 167.312 116.576" stroke="#002464" strokeWidth="1.54164" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M185.389 229.285C185.658 229.285 185.928 229.285 186.198 229.285" stroke="#002464" strokeWidth="1.54164" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M77.7051 171.854C77.7051 171.7 77.7051 171.546 77.7051 171.411" stroke="#002464" strokeWidth="1.54164" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M35.3475 241.114C34.9043 242.326 34.4803 243.518 34.0371 244.73" stroke="#002464" strokeWidth="1.54164" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M129.021 50.277C129.001 51.7387 129.252 53.1813 129.734 54.5661C129.791 54.72 129.868 54.9123 130.023 54.9508C130.235 55.0277 130.447 54.8354 130.601 54.643C132.065 52.7197 132.451 50.1808 132.643 47.7766C132.952 44.1414 132.952 40.487 132.682 36.8518" stroke="#46C578" strokeWidth="1.54164" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M117.284 45.853C116.321 39.2943 116.937 32.4278 119.655 26.3884C122.372 20.349 127.286 15.1752 133.452 12.7325C137.615 11.0784 142.182 10.6937 146.653 10.7899C152.877 10.9245 159.756 11.7708 164.709 8.00098" stroke="#46C578" strokeWidth="1.54164" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M136.074 36.2555C144.573 33.1396 153.88 33.5628 162.86 32.428C166.849 31.9279 170.857 31.0816 174.326 29.0428C177.795 27.0233 180.647 23.6381 181.206 19.676C181.822 15.3868 179.664 11.0785 176.581 8.02032C173.498 4.96215 169.547 2.96184 165.693 1" stroke="#46C578" strokeWidth="1.54164" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M165.23 1.13489C166.098 2.15428 166.425 3.59681 166.098 4.88547" stroke="#46C578" strokeWidth="1.54164" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M159.409 14.4443C158.947 16.964 157.232 19.0797 155.286 20.753C148.888 26.2539 140.081 27.7349 131.93 29.9467" stroke="#46C578" strokeWidth="1.54164" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M166.193 12.8672C166.424 14.1174 165.73 15.3291 164.998 16.3677C161.626 21.1377 156.789 24.8498 151.297 26.8694" stroke="#46C578" strokeWidth="1.54164" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M170.858 15.6177C169.701 18.1181 167.832 20.2915 165.539 21.8302" stroke="#46C578" strokeWidth="1.54164" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M127.594 36.7942C128.345 38.5829 128.519 40.6025 128.056 42.4874" stroke="#46C578" strokeWidth="1.54164" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M232.406 80.4931C240.827 81.4548 249.422 80.9932 257.708 79.1082C266.207 77.1849 274.782 73.4535 279.908 66.414C280.814 65.1638 281.642 63.6636 281.353 62.1441C280.872 59.586 277.692 58.6051 275.071 58.6243C273.163 58.6435 271.198 58.932 269.598 59.9514C267.999 60.9708 266.843 62.875 267.151 64.7599C267.613 67.5103 270.774 68.9336 273.568 69.1836C280.756 69.8376 287.655 66.0101 293.108 61.2786" stroke="#46C578" strokeWidth="1.54164" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M251.155 83.1279C242.31 86.4938 232.79 88.071 223.348 87.7056" stroke="#46C578" strokeWidth="1.54164" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M308.891 42.5066L379.999 29.043L324.115 68.2798L313.959 51.0849L308.891 42.5066ZM308.891 42.5066L297.521 53.8545L313.901 51.1618" stroke="#46C578" strokeWidth="1.54164" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M297.521 53.8542L304.266 33.2741L379.999 29.0426L292.318 13.0786L304.266 33.2741" stroke="#46C578" strokeWidth="1.54164" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}

export default PictureOrdersEmpty;