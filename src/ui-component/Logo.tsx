// material-ui
import { useTheme } from '@mui/material/styles';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
    const theme = useTheme();

    return (
        /**
         * if you want to use image instead of svg uncomment following, and comment out <svg> element.
         *
         * <img src={theme.palette.mode === 'dark' ? logoDark : logo} alt="Berry" width="100" />
         *
         */
         <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.66894 52L8.71062 51.7638C9.47817 51.5916 10.2651 51.5188 11.0713 51.5464C11.8776 51.574 12.65 51.6998 13.3885 51.9238C13.5159 51.7031 13.6804 51.4967 13.8819 51.3046C14.0835 51.1115 14.3157 50.9382 14.5785 50.7837C14.8414 50.6291 15.1284 50.4978 15.4364 50.3907C15.746 50.2837 16.0701 50.2031 16.4071 50.149C16.4861 49.9194 16.6038 49.6987 16.7602 49.4879C16.9166 49.277 17.1069 49.0817 17.3327 48.9018C17.5584 48.723 17.8132 48.564 18.0938 48.4272C18.376 48.2892 18.6775 48.1766 19 48.0894L18.8065 47.8234C18.5243 47.436 18.176 47.0795 17.7616 46.7517C17.3472 46.4249 16.8796 46.138 16.3587 45.8907C15.8395 45.6446 15.2816 45.4448 14.6882 45.2947C14.0948 45.1435 13.482 45.0453 12.8515 45C12.7419 45.2671 12.6048 45.5287 12.4419 45.7826C12.2775 46.0375 12.0888 46.2837 11.8743 46.5199C11.6615 46.7561 11.4245 46.9812 11.1632 47.1954C10.9036 47.4095 10.6214 47.6093 10.3199 47.7969C10.0184 47.9834 9.70069 48.1556 9.36368 48.3113C9.02667 48.468 8.67514 48.6082 8.31072 48.7307C7.94468 48.8532 7.56897 48.9581 7.18196 49.0453C6.79496 49.1325 6.3999 49.1998 6 49.2494C6.92396 50.0618 7.48028 50.979 7.66894 52Z" fill="#8C52FF"/>
<path d="M18.9294 22C19.3614 22 19.7557 21.9037 20.1151 21.71L20.5793 21.4585C20.8673 21.3032 21.168 21.165 21.4826 21.0461C21.7958 20.926 22.1188 20.8263 22.4502 20.7447C22.7815 20.6643 23.1185 20.6031 23.4625 20.5623C23.8051 20.5204 24.149 20.5 24.4958 20.5C24.8426 20.5 25.1879 20.5204 25.5305 20.5623C25.8731 20.6031 26.2115 20.6643 26.5429 20.7447C26.8742 20.8263 27.1972 20.926 27.5104 21.0461C27.8237 21.165 28.1243 21.3032 28.4137 21.4585L28.8779 21.71C29.2387 21.9048 29.6358 22.0011 30.0706 22C30.2706 22 30.451 21.9535 30.6132 21.8584C30.7754 21.7643 30.8886 21.6409 30.9515 21.4879C31.0145 21.3338 31.0159 21.1809 30.9571 21.0268C30.897 20.8727 30.788 20.747 30.6272 20.6507C30.1881 20.3844 29.7267 20.1488 29.2401 19.9426C28.7535 19.7364 28.2501 19.5642 27.73 19.4237C27.2084 19.2832 26.6771 19.1779 26.136 19.1065C25.5948 19.0363 25.0495 19 24.5 19C23.9505 19 23.4052 19.0363 22.864 19.1065C22.3229 19.1779 21.7916 19.2832 21.27 19.4237C20.7499 19.5642 20.2465 19.7364 19.7599 19.9426C19.2733 20.1488 18.8119 20.3844 18.3728 20.6507C18.212 20.747 18.103 20.8727 18.0429 21.0268C17.9841 21.1809 17.9855 21.3338 18.0485 21.4879C18.1114 21.6409 18.2246 21.7643 18.3868 21.8584C18.549 21.9535 18.7294 22 18.9294 22Z" fill="#8C52FF"/>
<path d="M35.6747 45C35.0942 45.0453 34.5285 45.1435 33.9806 45.2948C33.4313 45.4461 32.9178 45.6448 32.4369 45.8921C31.9576 46.1383 31.5259 46.4254 31.1433 46.7533C30.7607 47.0801 30.4392 47.4379 30.1786 47.8254L30 48.0904C30.2962 48.1776 30.5761 48.2902 30.8351 48.4282C31.0956 48.5651 31.3309 48.723 31.5393 48.903C31.7477 49.0819 31.9233 49.2773 32.0692 49.4882C32.2136 49.6991 32.3223 49.9199 32.3952 50.1495C32.7064 50.2036 33.0056 50.2842 33.2914 50.3913C33.5772 50.4984 33.8407 50.6287 34.0834 50.7833C34.3275 50.9379 34.5419 51.1112 34.7279 51.3044C34.914 51.4965 35.0659 51.703 35.1835 51.9227C35.8653 51.6997 36.5783 51.5738 37.3227 51.5462C38.0685 51.5186 38.7949 51.5915 39.502 51.7637L40.4637 52C40.6364 50.9798 41.1485 50.0623 42 49.2497C41.6308 49.2 41.2676 49.1326 40.9103 49.0454C40.553 48.9582 40.2047 48.8533 39.8683 48.7308C39.5303 48.6082 39.2073 48.468 38.8962 48.3123C38.585 48.1555 38.2903 47.9833 38.0119 47.7967C37.7335 47.6101 37.4745 47.4091 37.2348 47.1961C36.9937 46.9819 36.7748 46.7566 36.5769 46.5203C36.3803 46.283 36.2062 46.0379 36.0543 45.7839C35.904 45.5289 35.7774 45.2672 35.6747 45Z" fill="#8C52FF"/>
<path d="M4.318 48H5.19638C5.53997 48.0012 5.88212 47.9769 6.21995 47.9273C6.55923 47.8776 6.88988 47.8037 7.21334 47.7043C7.5368 47.6061 7.84733 47.485 8.14491 47.3408C8.4425 47.1966 8.72427 47.0318 8.98735 46.8452C9.25043 46.6598 9.49339 46.4562 9.71334 46.2345C9.93473 46.0127 10.1317 45.7777 10.3028 45.5268C10.4738 45.276 10.619 45.0155 10.7355 44.744C10.8534 44.4726 10.9411 44.1939 11 43.9092C10.9957 43.3542 10.9468 42.8017 10.8562 42.2515C10.7642 41.7014 10.6291 41.1598 10.4523 40.6254C10.2754 40.0898 10.0569 39.5676 9.79672 39.0574C9.53652 38.5461 9.23893 38.0529 8.90109 37.5755C8.56325 37.0981 8.18948 36.6412 7.77976 36.2062C7.37004 35.77 6.92869 35.3592 6.45428 34.9727C5.97987 34.5874 5.47671 34.2287 4.94623 33.8979C4.41576 33.5683 3.86084 33.2678 3.28292 33C2.21334 37.5525 1.45285 42.14 1 46.764C1.42553 47.1554 1.92726 47.4583 2.50518 47.674C3.08166 47.8885 3.68689 47.9975 4.318 48Z" fill="#8C52FF"/>
<path d="M28.6568 33C29.9483 33.0013 31.2162 32.8643 32.4623 32.5891C33.7067 32.3139 34.887 31.9107 36 31.3783L35.2345 30.5476C34.7884 30.0599 34.4472 29.5262 34.2108 28.9489C33.9744 28.3716 33.8554 27.7777 33.8539 27.1685C33.8523 26.4043 34.0605 25.6799 34.4769 24.9951C34.7524 24.5497 34.8902 24.0787 34.8933 23.5795C34.8933 23.4361 34.8667 23.2966 34.8134 23.1609C34.7587 23.024 34.682 22.8973 34.5786 22.7821C34.4753 22.6656 34.3532 22.5645 34.2123 22.48C34.0715 22.3955 33.9165 22.3302 33.7506 22.2854L33.5424 22.2278C33.4156 22.4441 33.2559 22.6425 33.0602 22.8217C32.8661 23.0022 32.6438 23.1558 32.3965 23.2838C32.1476 23.4131 31.8815 23.5104 31.5997 23.5769C31.318 23.6448 31.0299 23.6793 30.7357 23.6793C29.8324 23.6806 29.0059 23.4758 28.2545 23.0675L27.7348 22.7821C27.2543 22.5273 26.7393 22.3328 26.1883 22.1997C25.6388 22.0666 25.0768 22 24.5039 22C23.9294 22 23.3675 22.0666 22.818 22.1997C22.2686 22.3328 21.752 22.5273 21.2714 22.7821L20.7517 23.0675C19.9988 23.4771 19.1691 23.6819 18.2628 23.6793C17.9685 23.6793 17.6805 23.6448 17.3987 23.5782C17.1154 23.5116 16.8508 23.4131 16.6019 23.2851C16.353 23.1558 16.1323 23.0022 15.9366 22.823C15.7425 22.6425 15.5829 22.4454 15.4561 22.2278L15.2479 22.2854C15.0819 22.3302 14.927 22.3955 14.7861 22.48C14.6452 22.5645 14.5231 22.6656 14.4198 22.7821C14.3165 22.8973 14.2398 23.024 14.185 23.1609C14.1318 23.2966 14.1052 23.4361 14.1052 23.5795C14.1067 24.0774 14.2429 24.5497 14.5153 24.9951C14.9348 25.6799 15.1446 26.4043 15.1446 27.1685C15.143 27.7777 15.024 28.3716 14.7877 28.9489C14.5513 29.5262 14.21 30.0599 13.7639 30.5476L13 31.377C14.113 31.9095 15.2917 32.3139 16.5377 32.5891C17.7822 32.8643 19.0517 33.0013 20.3416 33H28.6568ZM27.5141 28.3844L28.5535 30.0791L26.6923 30.8369L25.6529 29.1422L27.5141 28.3844ZM21.4953 28.3844L23.3565 29.1422L22.3171 30.8369L20.4559 30.0791L21.4953 28.3844Z" fill="#8C52FF"/>
<path d="M38 43.9092C38.059 44.1939 38.1467 44.4726 38.2646 44.744C38.381 45.0155 38.5262 45.2772 38.6973 45.5268C38.8699 45.7777 39.0654 46.0139 39.2868 46.2357C39.5083 46.4562 39.7498 46.6598 40.0144 46.8464C40.2775 47.0318 40.5579 47.1966 40.8569 47.3408C41.1546 47.485 41.4651 47.6061 41.7886 47.7055C42.1121 47.8037 42.4428 47.8776 42.7822 47.9273C43.1215 47.9769 43.4623 48.0012 43.8059 48H44.683C45.3142 47.9975 45.918 47.8885 46.4946 47.674C47.0726 47.4595 47.573 47.1566 48 46.7652C47.5485 42.14 46.7894 37.5525 45.7225 33C45.1445 33.2678 44.5895 33.5671 44.0575 33.8979C43.527 34.2287 43.0237 34.5861 42.5492 34.9727C42.0748 35.3592 41.6319 35.77 41.2221 36.205C40.8124 36.6412 40.4385 37.0981 40.1006 37.5743C39.7628 38.0517 39.4637 38.5461 39.2049 39.0562C38.9446 39.5663 38.7261 40.0898 38.5478 40.6242C38.371 41.1598 38.2358 41.7014 38.1452 42.2515C38.0532 42.8017 38.0043 43.3542 38 43.9092Z" fill="#8C52FF"/>
<path d="M34.0889 34.9506C34.3675 34.8613 34.625 34.7325 34.8614 34.5642C35.0979 34.3959 35.3012 34.1954 35.4729 33.9656C35.6446 33.7344 35.7756 33.4841 35.866 33.2133C35.9548 32.9426 36 32.6659 36 32.382C35.9985 32.2532 35.988 32.1273 35.9684 32C34.756 32.6776 33.4759 33.1914 32.1235 33.5397C30.7726 33.8895 29.3991 34.0637 28 34.0622H20C18.6024 34.0637 17.2274 33.8895 15.8765 33.5397C14.5256 33.1914 13.244 32.6776 12.0316 32.0015C12.012 32.1273 12.0015 32.2547 12 32.382C12 32.6659 12.0452 32.9426 12.134 33.2133C12.2244 33.4841 12.3554 33.7344 12.5271 33.9656C12.6988 34.1954 12.9021 34.3959 13.1386 34.5642C13.375 34.7325 13.6325 34.8613 13.9111 34.9506C16.0783 35.6517 18.3042 36.0015 20.5904 36H27.4096C29.6958 36.0015 31.9217 35.6517 34.0889 34.9506Z" fill="#8C52FF"/>
<path d="M48.5702 48.6079C47.5401 49.1423 46.4103 49.4347 45.1822 49.4863C44.8138 49.7038 44.4822 49.9507 44.1875 50.2296C43.8928 50.5085 43.6425 50.8119 43.4353 51.1375C43.2296 51.463 43.0746 51.8033 42.9686 52.1584C42.8627 52.5147 42.8105 52.8746 42.8105 53.2395V53.5601C42.8105 53.6683 42.7844 53.7714 42.7322 53.8722C42.6816 53.9717 42.6079 54.0589 42.5127 54.1351C42.416 54.2113 42.3055 54.2702 42.1811 54.312C42.0568 54.3525 41.9263 54.3734 41.7912 54.3734C41.6807 54.3734 41.5732 54.3599 41.4689 54.3317L39.1985 53.7285C38.6827 53.5921 38.1531 53.5405 37.6127 53.5712C37.0708 53.6019 36.5566 53.7137 36.07 53.9066L35.1121 54.2887C35.0338 54.3194 34.9524 54.3415 34.868 54.3562C34.782 54.371 34.6961 54.3759 34.6101 54.3734C34.5226 54.3697 34.4382 54.3587 34.3553 54.3378C34.2724 54.3169 34.1941 54.2887 34.1204 54.253C34.0467 54.2162 33.9792 54.1732 33.9193 54.1228C33.8594 54.0724 33.8072 54.0172 33.7658 53.957C33.7228 53.8955 33.6906 53.8316 33.6691 53.7653C33.6476 53.6977 33.6368 53.6302 33.6368 53.5601C33.6368 53.4533 33.623 53.3476 33.5969 53.2432C33.5708 53.1388 33.5325 53.0368 33.4818 52.9385C33.4311 52.839 33.3682 52.7456 33.293 52.6572C33.2193 52.5675 33.1349 52.4852 33.0397 52.4102C32.9445 52.3353 32.8417 52.2677 32.7311 52.2075C32.6191 52.1486 32.5024 52.0982 32.3781 52.0576C32.2553 52.0171 32.1279 51.9864 31.9958 51.9655C31.8654 51.9446 31.7318 51.9336 31.5982 51.9336C31.4632 51.9336 31.3327 51.9127 31.2083 51.8721C31.084 51.8304 30.9735 51.7714 30.8768 51.6952C30.7816 51.6191 30.7079 51.5318 30.6572 51.4323C30.605 51.3316 30.5789 51.2284 30.5789 51.1203C30.5789 51.0134 30.5651 50.9077 30.539 50.8033C30.5129 50.6989 30.4746 50.5969 30.4239 50.4986C30.3732 50.3991 30.3103 50.3058 30.2351 50.2173C30.1614 50.1276 30.077 50.0453 29.9818 49.9704C29.8866 49.8954 29.7838 49.8279 29.6732 49.7677C29.5612 49.7087 29.4445 49.6583 29.3202 49.6178C29.1974 49.5772 29.07 49.5465 28.9379 49.5256C28.8075 49.5048 28.6739 49.4937 28.5404 49.4937C28.4529 49.4949 28.3669 49.4863 28.2825 49.4691C28.198 49.4519 28.1182 49.4261 28.0414 49.393C27.9662 49.3586 27.8956 49.318 27.8327 49.2701C27.7697 49.2222 27.7145 49.1694 27.67 49.1104C27.6239 49.0514 27.5871 48.9888 27.561 48.9224C27.5349 48.8561 27.5211 48.7885 27.5164 48.7185C27.5118 48.6497 27.5195 48.5809 27.5379 48.5121C27.5548 48.4445 27.584 48.3794 27.6224 48.3168L28.4022 47.0735C28.7461 46.5182 29.1728 46.0071 29.6809 45.5378C30.1875 45.0685 30.7601 44.657 31.3971 44.3044C32.0357 43.9506 32.7173 43.6656 33.4465 43.4493C34.1741 43.2343 34.9232 43.0943 35.6954 43.0292C35.7399 42.4026 35.8336 41.7798 35.9794 41.163C36.1252 40.5463 36.3202 39.9394 36.5658 39.3423C36.8099 38.7465 37.1031 38.1642 37.4439 37.5991C37.7846 37.0327 38.17 36.4872 38.6013 35.9614C39.0311 35.4356 39.5024 34.9344 40.0151 34.4589C40.5279 33.9823 41.0774 33.5351 41.6638 33.1162C42.2502 32.6972 42.8689 32.3102 43.5182 31.9564C44.1675 31.6026 44.8445 31.2832 45.5461 30.9994C44.7447 27.9637 43.8068 24.9501 42.7307 21.9611L41.7221 19.1797C41.5871 18.8099 41.4351 18.4438 41.2632 18.0838C41.0928 17.7239 40.9039 17.3701 40.6967 17.0224C40.4895 16.6735 40.2654 16.3332 40.0243 15.999C39.7833 15.6661 39.5254 15.3405 39.2507 15.0236C38.9774 14.7066 38.6873 14.3982 38.3818 14.0997C38.0763 13.8012 37.757 13.5137 37.4224 13.2361C37.0877 12.9584 36.7408 12.6918 36.3785 12.4363C36.0178 12.1807 35.6447 11.9375 35.2579 11.7053C34.8726 11.4743 34.475 11.2557 34.0667 11.0493C33.6599 10.8441 33.2408 10.6512 32.814 10.4719C32.3873 10.2925 31.9513 10.1279 31.5061 9.97676C31.0625 9.82565 30.6112 9.68929 30.1537 9.56766C29.6963 9.44604 29.2327 9.33793 28.7629 9.24579C28.2947 9.15365 27.8219 9.07748 27.3461 9.01482C26.8686 8.9534 26.3897 8.90671 25.9092 8.876C25.4272 8.84529 24.9452 8.82932 24.4632 8.82932C23.9811 8.82932 23.4991 8.84529 23.0171 8.876C22.5366 8.90671 22.0577 8.9534 21.5803 9.01482C21.1044 9.07748 20.6316 9.15365 20.1634 9.24579C19.6936 9.33793 19.23 9.44604 18.7726 9.56766C18.3151 9.68929 17.8638 9.82565 17.4202 9.97676C16.975 10.1279 16.539 10.2925 16.1123 10.4719C15.6855 10.6512 15.2664 10.8441 14.8596 11.0493C14.4513 11.2557 14.0537 11.4743 13.6684 11.7053C13.2816 11.9375 12.9086 12.1807 12.5478 12.4363C12.1855 12.6918 11.8386 12.9584 11.5039 13.2361C11.1693 13.5137 10.85 13.8012 10.5445 14.0997C10.239 14.3982 9.9489 14.7066 9.67566 15.0236C9.40088 15.3405 9.14298 15.6661 8.90197 15.999C8.66096 16.3332 8.43684 16.6735 8.22961 17.0224C8.02237 17.3701 7.83355 17.7239 7.66316 18.0838C7.49123 18.4438 7.33925 18.8099 7.20417 19.1797L6.19561 21.9611C5.11184 24.9476 4.1739 27.9612 3.38026 30.9994C4.0818 31.2832 4.75724 31.6026 5.40658 31.9564C6.05746 32.3115 6.67456 32.6972 7.26096 33.1162C7.84583 33.5351 8.39539 33.9835 8.90811 34.4589C9.42083 34.9356 9.89211 35.4368 10.3219 35.9627C10.7533 36.4872 11.1386 37.0339 11.4779 37.5991C11.8186 38.1654 12.1118 38.7465 12.3575 39.3436C12.6015 39.9394 12.7965 40.5463 12.9423 41.163C13.0882 41.781 13.1818 42.4026 13.2248 43.0292C13.9969 43.0931 14.7476 43.2343 15.4752 43.4493C16.2029 43.6656 16.886 43.9506 17.523 44.3032C18.1616 44.657 18.7342 45.0685 19.2408 45.5378C19.7489 46.0071 20.1741 46.5182 20.5195 47.0735L21.2978 48.3168C21.3377 48.3794 21.3654 48.4445 21.3838 48.5121C21.4022 48.5797 21.4083 48.6485 21.4053 48.7173C21.4007 48.7873 21.3853 48.8549 21.3607 48.9212C21.3346 48.9875 21.2993 49.049 21.2533 49.1079C21.2072 49.1669 21.1535 49.221 21.0906 49.2689C21.0276 49.3168 20.9586 49.3573 20.8818 49.3917C20.8066 49.4249 20.7268 49.4507 20.6423 49.4679C20.5579 49.4851 20.4735 49.4937 20.386 49.4937C20.2524 49.4937 20.1189 49.5048 19.9884 49.5256C19.8564 49.5465 19.7289 49.5772 19.6061 49.6178C19.4818 49.6583 19.3651 49.7087 19.2531 49.7677C19.1425 49.8279 19.0397 49.8954 18.9445 49.9704C18.8493 50.0453 18.7649 50.1276 18.6912 50.2173C18.616 50.3058 18.5531 50.3991 18.5024 50.4986C18.4518 50.5969 18.4134 50.6989 18.3873 50.8033C18.3612 50.9077 18.3474 51.0134 18.3474 51.1203C18.3474 51.2284 18.3213 51.3316 18.2691 51.4323C18.2184 51.5318 18.1447 51.6191 18.0496 51.6952C17.9529 51.7714 17.8423 51.8304 17.718 51.8721C17.5936 51.9127 17.4632 51.9336 17.3281 51.9336C17.1945 51.9336 17.061 51.9446 16.9305 51.9655C16.7985 51.9864 16.6711 52.0171 16.5482 52.0576C16.4239 52.0982 16.3072 52.1486 16.1952 52.2075C16.0846 52.2677 15.9818 52.3353 15.8866 52.4102C15.7914 52.4852 15.707 52.5675 15.6333 52.6572C15.5581 52.7456 15.4952 52.839 15.4445 52.9385C15.3939 53.0368 15.3555 53.1388 15.3294 53.2432C15.3033 53.3476 15.2895 53.4533 15.2895 53.5601C15.2895 53.6302 15.2787 53.6977 15.2572 53.7653C15.2357 53.8329 15.205 53.8968 15.1621 53.9582C15.1206 54.0184 15.07 54.0749 15.0101 54.1253C14.9502 54.1756 14.8827 54.2186 14.809 54.2555C14.7353 54.2923 14.6555 54.3206 14.5726 54.3415C14.4897 54.3624 14.4053 54.3747 14.3178 54.3771C14.2303 54.3808 14.1443 54.3747 14.0599 54.3611C13.9739 54.3464 13.8925 54.3231 13.8143 54.2923L12.8564 53.9103C12.3697 53.7174 11.8555 53.6068 11.3136 53.5761C10.7732 53.5442 10.2436 53.597 9.72785 53.7321L7.45746 54.3353C7.35307 54.3624 7.24561 54.3747 7.13509 54.3734C7 54.3734 6.86952 54.3525 6.74518 54.312C6.62083 54.2702 6.51031 54.2113 6.4136 54.1351C6.31842 54.0589 6.24474 53.9717 6.19408 53.8722C6.14189 53.7714 6.11579 53.6683 6.11579 53.5601V53.2346C6.11579 52.8697 6.0636 52.5097 5.95768 52.1547C5.85329 51.7997 5.69671 51.4594 5.49101 51.1338C5.28531 50.807 5.03509 50.5048 4.73882 50.2259C4.44408 49.947 4.1125 49.6989 3.74561 49.4826C2.51754 49.4323 1.38772 49.1399 0.35614 48.6079C0.153509 51.0675 0.0230264 53.5307 0 56H48.9263C48.9033 53.5307 48.7728 51.0675 48.5702 48.6079ZM32.6175 13.709C32.7511 13.709 32.8846 13.7201 33.0151 13.741C33.1471 13.7619 33.2746 13.7926 33.3974 13.8331C33.5217 13.8737 33.6384 13.924 33.7504 13.983C33.861 14.0432 33.9638 14.1108 34.059 14.1857C34.1542 14.2607 34.2386 14.343 34.3123 14.4326C34.3875 14.5211 34.4504 14.6145 34.5011 14.714C34.5518 14.8123 34.5901 14.9142 34.6162 15.0187C34.6423 15.1231 34.6561 15.2287 34.6561 15.3356C34.6561 15.4425 34.6423 15.5482 34.6162 15.6538C34.5901 15.7582 34.5518 15.8602 34.5011 15.9585C34.4504 16.0568 34.3875 16.1514 34.3123 16.2398C34.2386 16.3283 34.1542 16.4106 34.059 16.4855C33.9638 16.5617 33.861 16.6293 33.7504 16.6882C33.6384 16.7472 33.5217 16.7976 33.3974 16.8381C33.2746 16.8799 33.1471 16.9106 33.0151 16.9315C32.8846 16.9524 32.7511 16.9622 32.6175 16.9622C32.484 16.9622 32.3504 16.9524 32.22 16.9315C32.0879 16.9106 31.9605 16.8799 31.8377 16.8381C31.7134 16.7976 31.5967 16.7472 31.4846 16.6882C31.3741 16.6293 31.2713 16.5617 31.1761 16.4855C31.0809 16.4106 30.9965 16.3283 30.9228 16.2398C30.8476 16.1514 30.7846 16.0568 30.734 15.9585C30.6833 15.8602 30.645 15.7582 30.6189 15.6538C30.5928 15.5482 30.5789 15.4425 30.5789 15.3356C30.5789 15.2287 30.5928 15.1231 30.6189 15.0187C30.645 14.9142 30.6833 14.8123 30.734 14.714C30.7846 14.6145 30.8476 14.5211 30.9228 14.4326C30.9965 14.343 31.0809 14.2607 31.1761 14.1857C31.2713 14.1108 31.3741 14.0432 31.4846 13.983C31.5967 13.924 31.7134 13.8737 31.8377 13.8331C31.9605 13.7926 32.0879 13.7619 32.22 13.741C32.3504 13.7201 32.484 13.709 32.6175 13.709ZM16.3088 13.709C16.4423 13.709 16.5759 13.7201 16.7064 13.741C16.8384 13.7619 16.9658 13.7926 17.0886 13.8331C17.2129 13.8737 17.3296 13.924 17.4417 13.983C17.5522 14.0432 17.655 14.1108 17.7502 14.1857C17.8454 14.2607 17.9298 14.343 18.0035 14.4326C18.0787 14.5211 18.1417 14.6145 18.1923 14.714C18.243 14.8123 18.2814 14.9142 18.3075 15.0187C18.3336 15.1231 18.3474 15.2287 18.3474 15.3356C18.3474 15.4425 18.3336 15.5482 18.3075 15.6538C18.2814 15.7582 18.243 15.8602 18.1923 15.9585C18.1417 16.0568 18.0787 16.1514 18.0035 16.2398C17.9298 16.3283 17.8454 16.4106 17.7502 16.4855C17.655 16.5617 17.5522 16.6293 17.4417 16.6882C17.3296 16.7472 17.2129 16.7976 17.0886 16.8381C16.9658 16.8799 16.8384 16.9106 16.7064 16.9315C16.5759 16.9524 16.4423 16.9622 16.3088 16.9622C16.1752 16.9622 16.0417 16.9524 15.9112 16.9315C15.7792 16.9106 15.6518 16.8799 15.5289 16.8381C15.4046 16.7976 15.2879 16.7472 15.1759 16.6882C15.0654 16.6293 14.9625 16.5617 14.8673 16.4855C14.7721 16.4106 14.6877 16.3283 14.614 16.2398C14.5388 16.1514 14.4759 16.0568 14.4252 15.9585C14.3746 15.8602 14.3362 15.7582 14.3101 15.6538C14.284 15.5482 14.2702 15.4425 14.2702 15.3356C14.2702 15.2287 14.284 15.1231 14.3101 15.0187C14.3362 14.9142 14.3746 14.8123 14.4252 14.714C14.4759 14.6145 14.5388 14.5211 14.614 14.4326C14.6877 14.343 14.7721 14.2607 14.8673 14.1857C14.9625 14.1108 15.0654 14.0432 15.1759 13.983C15.2879 13.924 15.4046 13.8737 15.5289 13.8331C15.6518 13.7926 15.7792 13.7619 15.9112 13.741C16.0417 13.7201 16.1752 13.709 16.3088 13.709ZM20.9877 37.2944C18.4379 37.2956 15.9526 36.9737 13.5349 36.3288C13.3507 36.2808 13.1726 36.2231 12.9976 36.158C12.8241 36.0929 12.6537 36.0192 12.491 35.9369C12.3268 35.8558 12.1702 35.7673 12.0197 35.6703C11.8693 35.5744 11.7265 35.4712 11.5914 35.3619C11.4564 35.2513 11.3305 35.1359 11.2123 35.0142C11.0941 34.8926 10.9851 34.7648 10.8868 34.6334C10.7871 34.5007 10.698 34.3643 10.6197 34.2243C10.5399 34.0842 10.4724 33.9405 10.4156 33.7931C10.3572 33.6469 10.3112 33.497 10.2759 33.3459C10.2406 33.1948 10.216 33.0424 10.2037 32.8889C10.1899 32.7353 10.1899 32.5817 10.1991 32.4282C10.2099 32.2746 10.2314 32.121 10.2636 31.9699C10.2958 31.8176 10.3404 31.6689 10.3956 31.5203C10.4493 31.3729 10.5154 31.2291 10.5921 31.0878C10.6689 30.9466 10.7548 30.809 10.8515 30.6763C10.9482 30.5424 11.0542 30.4146 11.1708 30.2918L12.3037 29.0841C12.6107 28.7573 12.8441 28.3998 13.0068 28.0116C13.168 27.6246 13.2493 27.2266 13.2509 26.8175C13.2493 26.3396 13.1158 25.8862 12.8487 25.4587C12.4373 24.8027 12.2316 24.1073 12.2316 23.3727C12.2316 23.0643 12.2899 22.7633 12.4081 22.4697C12.5279 22.1773 12.6998 21.9046 12.9254 21.6552C13.1511 21.4046 13.4197 21.1883 13.7314 21.0065C14.043 20.8235 14.3822 20.6834 14.7476 20.5864L15.3969 20.4144C15.575 19.8652 15.9465 19.4193 16.5129 19.0765C17.0825 18.7362 17.6827 18.434 18.3136 18.1698C18.9445 17.9069 19.5969 17.6846 20.2724 17.5052C20.9478 17.3258 21.6371 17.1895 22.3401 17.0986C23.0432 17.0076 23.7509 16.9622 24.4632 16.9622C25.1754 16.9622 25.8831 17.0076 26.5862 17.0986C27.2893 17.1895 27.9785 17.3258 28.6539 17.5052C29.3294 17.6846 29.9818 17.9069 30.6127 18.1698C31.2436 18.434 31.8439 18.7362 32.4134 19.0765C32.9814 19.4193 33.3559 19.8652 33.5355 20.4144L34.1833 20.5864C34.5487 20.6846 34.8879 20.8247 35.198 21.0065C35.5096 21.1896 35.7783 21.4058 36.0024 21.6564C36.2281 21.9058 36.4 22.1773 36.5182 22.4709C36.6364 22.7645 36.6947 23.0643 36.6947 23.3727C36.6963 24.1061 36.4921 24.8015 36.0838 25.4587C35.8136 25.8862 35.6785 26.3396 35.6754 26.8175C35.677 27.2266 35.7583 27.6246 35.9195 28.0128C36.0822 28.3998 36.3156 28.7573 36.6226 29.0853L37.7555 30.2905C37.8721 30.4134 37.9781 30.5424 38.0748 30.6751C38.1715 30.8077 38.2575 30.9453 38.3342 31.0866C38.411 31.2279 38.477 31.3729 38.5307 31.5203C38.586 31.6677 38.6305 31.8176 38.6627 31.9687C38.695 32.121 38.7164 32.2734 38.7272 32.4269C38.7364 32.5805 38.7349 32.7341 38.7226 32.8876C38.7103 33.0412 38.6857 33.1935 38.6504 33.3459C38.6151 33.497 38.5691 33.6456 38.5107 33.7931C38.4539 33.9393 38.3864 34.083 38.3066 34.2243C38.2283 34.3643 38.1393 34.5007 38.0395 34.6322C37.9412 34.7648 37.8322 34.8914 37.714 35.013C37.5958 35.1359 37.47 35.2513 37.3349 35.3607C37.1998 35.4712 37.057 35.5744 36.9066 35.6703C36.7561 35.7673 36.5996 35.8558 36.4353 35.9369C36.2726 36.0192 36.1022 36.0929 35.9287 36.158C35.7537 36.2231 35.5757 36.2808 35.3914 36.3288C32.9737 36.9737 30.4884 37.2956 27.9386 37.2944H20.9877Z" fill="#8C52FF"/>
<path d="M43.1128 13.1442C43.5357 13.4826 43.5357 14.0321 43.1128 14.3706C42.6876 14.709 42.0032 14.709 41.5803 14.3706C41.1574 14.0321 41.1574 13.4826 41.5803 13.1442C42.0032 12.8039 42.6899 12.8039 43.1128 13.1442ZM42.0783 10.2637C41.6508 10.2637 41.3052 10.5403 41.3052 10.8824C41.3052 11.2245 41.6508 11.5029 42.0783 11.5029C42.9036 11.5029 43.6812 11.7613 44.2655 12.2289C44.8499 12.6965 45.1727 13.3189 45.1727 13.9794C45.1727 14.3215 45.5183 14.5999 45.9458 14.5999C46.3732 14.5999 46.7188 14.3233 46.7188 13.9794C46.7188 12.9877 46.2368 12.0542 45.3592 11.3518C44.4838 10.6513 43.3174 10.2637 42.0783 10.2637ZM42.0783 7.78538C41.6508 7.78538 41.3052 8.06378 41.3052 8.40587C41.3052 8.74796 41.6508 9.02454 42.0783 9.02454C43.729 9.02454 45.2842 9.54131 46.4528 10.4766C47.6215 11.4137 48.2649 12.6583 48.2649 13.9812C48.2649 14.3233 48.6105 14.5999 49.038 14.5999C49.4654 14.5999 49.811 14.3233 49.811 13.9812C49.811 12.3272 49.0084 10.7714 47.5465 9.60136C46.0868 8.42952 44.1428 7.78538 42.0783 7.78538ZM42.0783 5.30887C41.6508 5.30887 41.3052 5.58545 41.3052 5.92754C41.3052 6.26963 41.6508 6.54621 42.0783 6.54621C44.5566 6.54621 46.8871 7.31955 48.6401 8.7243C50.3931 10.1291 51.3594 11.9942 51.3594 13.9794C51.3594 14.3215 51.705 14.5999 52.1325 14.5999C52.5599 14.5999 52.9055 14.3233 52.9055 13.9794C52.9055 11.663 51.78 9.48491 49.7337 7.84906C47.6874 6.2114 44.9704 5.30887 42.0783 5.30887ZM51.921 6.09676C49.2904 3.98964 45.798 2.83054 42.0805 2.83054C41.6531 2.84145 41.2825 3.10166 41.2825 3.45103C41.2848 3.79312 41.6304 4.0697 42.0555 4.0697C42.0624 4.06788 42.0714 4.0697 42.0805 4.0697C45.3842 4.0697 48.49 5.09961 50.8274 6.972C53.1647 8.84258 54.4516 11.3318 54.4516 13.9794C54.4516 14.3215 54.7995 14.5999 55.2247 14.5999C55.6521 14.5999 56 14.3215 56 13.9794C55.9977 11.0025 54.5494 8.20207 51.921 6.09676Z" fill="#8C52FF"/>
<path d="M29.3263 2.28123C29.2695 2.14855 29.2143 2.05273 29.1851 1.95076C29.0454 1.479 29.4292 1.13993 30.0309 1.20135C30.5744 1.25541 31.0564 1.73945 30.6173 2.09572C30.341 2.32177 30.2566 2.17558 30.4823 2.66454C32.6667 7.3821 32.4333 7.2703 32.8309 7.02214C33.1533 6.82066 34.0391 6.12654 34.9355 5.47541C36.7546 4.15229 37.3886 4.36359 37.3349 3.79478C37.2781 3.20017 37.7048 2.76527 38.3266 2.93358C39.0158 3.12155 39.1248 3.81321 38.4708 4.18669C37.82 4.55893 38.7825 3.30091 35.9855 10.3085C35.3178 11.9842 35.9948 11.2249 29.6825 10.6623C27.9693 10.5099 21.6401 9.69419 19.313 9.94358C16.0309 10.2949 15.6641 10.8429 15.4476 10.1229C13.8035 4.64247 14.1873 3.95326 13.6577 3.74564C12.8948 3.44711 12.9838 2.25543 14.0798 2.44463C14.5956 2.53431 14.7798 2.79476 14.7399 3.06749C14.6401 3.73213 13.9417 2.9729 18.8386 5.75675C19.5893 6.18305 19.2715 6.23465 20.6055 3.10066C20.8972 2.4176 21.1474 1.98024 21.3255 1.50357C19.8671 0.299612 21.7691 -0.517361 22.4983 0.381924C22.773 0.720998 22.5336 0.926163 22.2956 1.21241C22.6948 2.06255 22.859 1.96796 24.9068 6.01597C25.2476 6.69043 25.177 6.50492 29.3263 2.28123ZM21.5772 0.432294C21.2073 0.569889 21.373 0.963019 21.568 1.02199C21.9395 1.13379 22.3816 0.416323 21.5772 0.432294ZM38.3649 3.60313C38.4171 3.39797 38.0073 3.22966 37.8998 3.47659C37.648 4.06629 38.2698 3.98275 38.3649 3.60313ZM13.7037 3.06258C13.7114 3.29969 13.9632 3.37708 14.0614 3.26529C14.4391 2.83284 13.6945 2.73333 13.7037 3.06258ZM30.186 1.82913C30.2612 1.63994 29.7945 1.51709 29.6994 1.73331C29.6026 1.95936 30.0923 2.06993 30.186 1.82913Z" fill="#FFDE59"/>
<path d="M31.763 7.88247C37.0494 5.99262 36.8008 5.27459 34.2149 9.86948C33.9395 10.3588 25.0371 9.34341 17.0696 8.94174C16.7689 8.92752 16.754 8.79126 16.6929 8.53296C15.6687 4.22718 15.301 4.67506 19.0615 7.0744C19.252 7.01516 19.0481 7.17867 21.8453 4.31012C22.4631 3.67622 22.3009 3.80418 24.6262 6.72012C24.9597 7.13838 24.8897 7.14075 25.3542 6.88245C29.8292 4.39069 29.4689 4.34329 29.9394 5.07435C31.9089 8.13129 31.3447 7.27582 31.763 7.88247ZM17.2795 8.44173C17.4805 8.54007 33.0031 9.63251 33.7162 9.59815C33.8204 9.49862 33.6522 9.79484 35.0858 7.26161C35.1007 7.23554 35.0798 7.19525 35.0724 7.13483C31.4787 8.37893 31.6886 8.75808 31.1839 7.97252C29.3439 5.11108 29.4898 5.29 29.329 5.22128C28.7692 5.51157 29.719 4.99023 25.4137 7.38839C24.5786 7.85285 24.921 7.89432 22.5941 4.99023C22.2785 4.59686 22.2979 4.56368 21.9317 4.93928C19.0168 7.92631 19.3532 7.85048 18.6789 7.40142C16.6185 6.03172 17.0889 6.31609 16.7525 6.17627C16.748 6.50803 17.1232 8.10167 17.2795 8.44173Z" fill="#8C52FF"/>
</svg>


         
    );
};

export default Logo;