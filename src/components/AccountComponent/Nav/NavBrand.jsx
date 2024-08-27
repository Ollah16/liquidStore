import { Bars3Icon } from '@heroicons/react/24/outline'
import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { expandNav } from '../../../reduxtoolkit/navslice'
import { RxCross2 } from "react-icons/rx";


const NavBrand = () => {
    const dispatch = useDispatch()
    const { isExpanded } = useSelector(state => state.nav)

    return (
        <nav className='bg-theme text-white relative z-30'>
            <div className='w-full px-5 lg:px-0 lg:w-10/12 mx-auto flex justify-between items-center'>
                <div className='block'>
                    <Link
                        aria-label='navbrand'
                        href='/' className="text-base font-semibold flex relative items-center h-[94px]">
                        <div className="absolute left-0 hidden md:flex md:flex-col items-center leading-tight">
                            <span>LLOYDS</span>
                            <span>PREMIER</span>
                            <span>BANK</span>
                        </div>
                        <div className='md:-ml-14 ml-[-130px]'>
                            <span className="icon" data-svg-path="/assets/1loyds-desktop-logo.svg" data-
                                selector="icon-lloyds-desktop-logo" itemProp="logo">
                                <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"
                                    aria-hidden="true" focusable="false" height="52px" version="1.1"
                                    viewBox="0 0 210 52" width="180px">
                                    <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                                        <g>
                                            <g transform="translate(158.000000, 0.000000)">
                                                <rect fill="#FFFFFF" height="52" width="52" x="0" y="0"></rect>
                                                <path
                                                    d="M43.4099219,26.2069901 C44.114532,26.7331031 44.8497772,27.1044769 44.8497772,27.9400682 C44.8497772,28.1876508 44.5434251,28.4352334 43.8694502,28.4352334 C43.3486515,28.4352334 42.7972175,28.2804942 42.5215006,27.9091204 C42.307054,27.6305899 42.6134062,27.2282682 42.4295949,26.9497378 C42.2764188,26.7021552 41.9700666,26.8259465 41.7556201,26.7021552 C41.5105383,26.5474161 41.4799031,26.4545726 41.2960918,26.0831988 C41.1122805,25.6499292 40.4689409,24.9381293 39.7030604,24.1644337 C39.0597208,23.5145294 38.3857459,23.1741033 38.0793937,23.2050511 C37.8649472,23.235999 37.8036767,23.235999 37.5892302,23.235999 C37.0377963,23.235999 36.578268,23.762112 35.7817523,24.102538 C35.2303183,24.3501206 34.9239661,24.4739119 34.5869787,24.5358076 L34.4644378,24.6905467 L35.1690479,24.6595989 C35.8430227,24.6595989 36.7008088,24.5667554 37.3747837,24.5667554 C38.0487585,24.5667554 38.3857459,25.1857119 38.6614629,25.8356162 C39.1822616,27.1354248 39.9481421,29.023242 40.8978339,30.601581 C41.3573622,31.3443288 41.7249849,31.8085462 41.7249849,32.7369809 C41.7249849,33.0155113 41.6943496,33.417833 41.326727,33.417833 C40.8059283,33.417833 39.4886138,32.8607722 39.4886138,32.2727635 C39.4886138,31.8085462 39.8562365,31.6228592 39.8562365,31.1586419 C39.8562365,30.8801114 39.4273434,30.9110593 39.3354377,30.6634767 C38.9984503,29.2708246 38.6001925,27.8781725 37.834312,27.0425813 C37.4360541,26.6093118 37.3747837,26.4236248 36.9765258,26.4236248 C36.7620793,26.4236248 36.5476327,26.4855205 36.3638214,26.5474161 C35.2915887,26.9497378 33.8517334,28.1876508 32.0442555,28.7137638 C31.3702806,28.9303985 31.2477398,28.5280768 30.5431297,28.6518681 L30.6044002,28.6518681 C30.022331,28.7756594 29.5934379,29.1160855 28.7969222,29.3327203 C27.7246895,29.6421985 25.8559411,29.7969376 24.3548154,29.5803028 C23.2825827,29.4255637 21.9039978,29.208929 21.3219286,29.2398768 C20.8624003,30.5396854 19.9127085,32.2727635 18.4728532,32.9536156 C17.7069727,33.2940417 17.4925262,33.7582591 17.7069727,34.6247981 C17.9826897,35.707972 18.9323815,36.4816676 19.422545,37.4101023 C19.8820733,38.1837979 20.6173186,39.4526586 21.3831991,39.8549804 C22.1490796,40.2573021 22.6392431,40.8453107 22.6392431,41.3714237 C22.6392431,41.6190063 22.5473374,41.7427976 22.3022557,41.7427976 L20.7398595,41.7427976 C20.4947777,41.7427976 20.3722368,41.5880585 20.3416016,41.495215 C20.1271551,41.0928933 20.2803312,40.7215194 19.973979,40.3501455 C19.7595324,40.102563 19.6063563,40.1644586 19.3306394,39.9478238 C18.8711111,39.4836065 19.2080985,39.2360239 18.8711111,38.6480152 C17.890784,37.0696762 17.461891,36.6983023 16.63474,35.5532328 C16.1752117,34.9652242 15.5931426,34.655746 15.5931426,33.8820504 C15.5931426,32.9226678 16.5428344,32.7679287 16.5121992,31.8085462 C15.8994948,32.2727635 15.1948847,32.6131896 14.0920168,32.7679287 C13.9388407,32.7988765 13.5712181,33.0774069 13.418042,33.2630939 C13.0504194,33.6344678 12.8972433,34.0367895 12.8359728,34.5938503 C12.7134319,35.8936589 12.4683502,37.1934675 12.6215263,38.4932761 C12.8359728,39.3288674 12.9891489,39.6073978 13.6631237,40.0716151 C14.0920168,40.3501455 14.5821803,40.7524673 14.6434508,41.3714237 C14.6434508,41.5261628 14.5821803,41.7427976 14.3677338,41.7427976 L12.6827967,41.7427976 C12.5296206,41.7427976 12.3764445,41.6190063 12.3151741,41.5261628 C12.1313628,41.1857368 12.2539036,40.969102 12.161998,40.5667803 C12.0088219,39.7930847 11.1204005,39.8240325 11.1204005,39.0193891 C11.1204005,38.7718065 11.2735766,38.4623283 11.2735766,37.9671631 C11.3348471,36.8839893 11.6411993,35.0890155 11.3348471,32.9536156 C11.181671,31.7157027 12.4683502,31.653807 13.142325,30.5706332 C13.5405829,29.9516767 13.418042,30.1992593 13.6631237,29.7659898 C13.9082055,29.3017724 13.8469351,28.9613464 13.8162998,28.682816 C13.8162998,28.3114421 13.4486772,27.5686943 13.693759,26.0213031 C13.7856646,25.340451 14.122652,24.628651 14.5821803,24.0406424 C14.5821803,24.0096946 14.5821803,23.9168511 14.4290042,23.9168511 C13.7550294,23.9787467 13.7550294,23.7930598 13.3261363,23.7930598 C12.8972433,23.7930598 12.5602558,24.1644337 12.4989854,24.3501206 C12.2845389,24.2572771 12.1926332,24.0096946 12.1926332,23.8859033 C12.1926332,23.6383207 12.2539036,23.4216859 12.4683502,23.2050511 C12.5602558,23.1122077 12.4683502,23.050312 12.3458093,23.050312 C11.8250106,23.050312 11.3348471,23.7002163 11.2123062,24.1334859 C10.905954,24.0715902 10.8753188,23.6692685 10.7527779,23.6692685 C10.5996018,23.6692685 10.5076961,23.8859033 10.5076961,24.102538 C10.5076961,25.6189814 12.9585137,25.9594075 12.9585137,27.971016 C12.9585137,30.2921028 10.2013439,29.7969376 10.2013439,30.6325289 C10.2013439,30.787268 10.3238848,30.9420071 10.5383313,31.0348506 C10.4464257,31.2514853 10.2013439,31.3443288 9.95626218,31.3443288 C9.34355779,31.3443288 8.88402949,30.8801114 8.88402949,30.261155 C8.88402949,28.9922942 10.5689666,28.9613464 10.5689666,28.0019638 C10.5689666,27.5377465 10.2932496,27.4139552 10.0175326,27.1973204 C8.4245012,26.0522509 7.50544461,24.9071814 7.50544461,23.0193642 C7.50544461,20.9768078 8.91466471,19.4294166 10.7221427,19.4294166 C13.3567715,19.4294166 13.4486772,22.524199 15.8382243,22.7717816 C16.7266457,22.1528251 17.7988784,21.7814512 18.8404758,21.7814512 C20.402872,21.7814512 21.0768469,22.183773 22.7311487,22.183773 C23.4051236,22.183773 24.5079915,21.998086 25.8253059,21.0696513 C26.3154694,20.7292252 26.529916,20.6673296 26.9894442,20.2650079 C28.0310417,19.367521 29.0113687,17.603495 29.0113687,16.3346342 L29.0113687,16.3965299 C29.0113687,15.9942082 28.9194631,15.7466256 28.7356518,15.7466256 C28.1842178,15.7466256 27.6634191,16.2727386 27.1119851,16.8297994 C26.7443625,17.2011733 27.2957964,17.3868603 26.4992807,17.8201298 C26.2235638,17.9748689 25.8865763,17.6963385 25.5802241,17.6963385 C24.9368845,17.6963385 24.6611676,16.9226429 24.6611676,16.2727386 C24.6611676,15.9323125 24.9062493,15.8394691 25.0594254,15.5299908 C25.3964128,14.8800865 25.3657776,14.6325039 25.6721298,14.0135475 C25.8559411,13.5802779 26.1929285,13.3017475 26.1622933,12.9922693 C26.1622933,12.868478 26.0703877,12.8065823 26.0703877,12.682791 C26.0703877,12.0328867 26.9281738,11.5996172 26.9281738,10.9497129 C26.9281738,10.578339 26.529916,10.4235999 26.4380103,10.1450695 C26.3461046,9.86653907 26.4073751,9.7736956 26.4073751,9.7736956 C26.4380103,9.71179995 26.4686455,9.71179995 26.529916,9.71179995 C26.8669034,9.71179995 26.9894442,10.0831738 27.2957964,10.2688608 C27.3264317,9.83559124 27.1732556,9.74274777 27.1732556,9.43326953 C27.1732556,9.27853041 27.1426203,9 27.3264317,9 C27.5408782,9 27.510243,9.27853041 27.6940543,9.43326953 C27.9391361,9.61895648 28.1535826,9.58800865 28.3986643,9.7736956 C28.7356518,9.99033036 28.9194631,10.3617042 29.042004,10.3617042 C29.3789914,10.4235999 29.470897,9.99033036 29.2870857,9.7736956 C29.6547083,9.74274777 30.0529662,10.052226 30.5431297,10.052226 C31.3090102,10.052226 31.5847272,10.2688608 31.7379033,10.3926521 C32.2280668,10.8259216 32.3199724,11.1663477 32.8714064,11.1663477 C33.1471234,11.1663477 33.3002995,10.9187651 33.3615699,10.8259216 C33.7291925,11.104452 33.7598278,11.816252 33.3615699,12.4352084 C33.514746,12.9303736 34.2193561,12.9922693 34.5563435,13.2398519 C34.8933309,13.4874345 34.8320605,13.6112258 35.0771422,13.735017 C35.2609535,13.8588083 35.4447648,13.8278605 35.5673057,13.735017 C35.7204818,14.4158692 35.1690479,15.0038778 34.4644378,15.0967213 C34.495073,15.9632604 35.3834944,16.4893734 35.7817523,16.7060081 C35.5366705,17.2321211 35.1077774,17.3868603 34.7401548,17.4797037 C34.8626957,18.0058167 35.4141296,18.7795123 35.1384126,19.4603645 C34.8933309,19.3365732 34.495073,19.4603645 34.495073,19.8317383 C34.495073,20.2650079 35.046507,20.4816426 34.4644378,20.7911209 C34.2193561,20.94586 34.1580856,21.3172339 34.6176139,21.6886078 C35.2303183,21.5338687 35.8123875,21.5338687 36.5169975,21.5338687 C36.9458906,21.5338687 37.4973246,21.4100774 37.8955824,21.4100774 C38.6001925,21.4100774 39.0290855,21.6886078 39.5498843,22.2766164 C40.8671987,23.6692685 42.0619723,25.1857119 43.4099219,26.2069901"
                                                    fill="#231f20" fillRule="nonzero">
                                                </path>
                                                <path
                                                    d="M8.33259554,22.4004077 C8.60831252,22.4004077 9.12911125,20.8220687 10.2013439,20.8220687 C10.5076961,20.8220687 10.5689666,20.94586 10.5689666,21.0696513 C10.5689666,21.2862861 10.2013439,21.471973 10.2013439,21.7505034 C10.2013439,21.8123991 10.2319792,21.8742947 10.3238848,21.8742947 C10.5689666,21.8742947 10.7834131,21.2862861 11.8250106,21.2862861 C12.1007275,21.2862861 12.3458093,21.3172339 12.5908911,21.3791295 C12.7134319,21.4100774 12.9585137,21.5338687 12.8359728,21.1934426 C12.5908911,20.4506948 11.7637401,19.7698427 10.630237,19.7698427 C9.49673388,19.7698427 8.30196032,20.7911209 8.17941944,22.0290338 C8.21005466,22.2456686 8.21005466,22.4004077 8.33259554,22.4004077"
                                                    fill="##6D6E70" fillRule="nonzero">
                                                </path>
                                                <path
                                                    d="M27.9391361,12.5589997 C27.6327839,12.4352084 27.5715134,12.2804693 27.6940543,11.8781476 C27.7553247,11.4758259 27.78596,11.290139 27.6021486,11.2591911 C27.4489725,11.1972955 27.234526,11.3210868 27.0200795,11.5377216 C26.8362682,11.7853041 26.529916,12.1257302 26.4380103,12.3733128 C26.3461046,12.7137389 26.7443625,12.6518432 26.4686455,13.208904 C25.978482,14.1063909 25.8559411,14.3230257 25.6108594,14.9419822 C25.3964128,15.6228343 25.2432367,15.7156778 25.1206959,15.9323125 C24.9675198,16.1179995 25.3045072,16.1489473 25.6721298,16.025156 C26.0703877,15.8704169 26.1010229,16.3655821 25.9478468,16.7060081 C25.8253059,16.9535907 25.9172116,17.0464342 26.254199,16.7679038 C26.5605512,16.5203212 26.1010229,16.3346342 26.1929285,15.5609387 C26.3154694,14.8800865 26.4380103,14.4777648 26.8669034,13.7969127 C27.234526,13.208904 27.5408782,12.7756345 28.1535826,12.9922693 C28.3986643,13.1160606 28.2761235,12.7137389 27.9391361,12.5589997"
                                                    fill="#6D6E70" fillRule="nonzero">
                                                </path>
                                                <path
                                                    d="M44.0226263,28.0329117 C44.2064376,28.0329117 44.4821546,27.971016 44.4821546,27.8162769 C44.4821546,27.5377465 44.0532615,27.0425813 43.6856389,26.91879 C43.9307207,27.4139552 43.6856389,28.0329117 44.0226263,28.0329117"
                                                    fill="#6D6E70" fillRule="nonzero"></path>
                                                <path
                                                    d="M31.0332932,21.5029208 C33.6985573,22.7408338 33.5453812,25.0000249 33.7598278,24.4429641 C33.8517334,24.1953815 34.2193561,23.0812598 33.2696643,21.998086 C32.534419,21.1315469 32.258702,21.3481817 32.534419,20.6363818 C33.6985573,17.789182 34.4338026,13.4874345 30.9413876,12.0019389 C30.5431297,11.8471998 30.2061423,11.8471998 30.2061423,11.9090954 C30.2061423,11.9709911 30.5737649,12.0947824 31.0332932,12.4042606 C33.3615699,13.9516518 32.6263246,18.1915037 30.5124945,20.2340601 C29.8385197,20.94586 30.1755071,21.1005991 31.0332932,21.5029208"
                                                    fill="#6D6E70" fillRule="nonzero"></path>
                                                <path
                                                    d="M21.9039978,41.3095281 C22.0878091,41.3095281 21.9959035,41.0309977 21.934633,40.9072064 C21.7814569,40.628676 21.4751047,40.442989 21.1993878,40.3191977 C21.2606582,40.5977281 21.2912934,41.3095281 21.5670104,41.3095281 L21.9039978,41.3095281"
                                                    fill="#6D6E70" fillRule="nonzero"></path>
                                                <path
                                                    d="M13.8469351,41.3095281 C14.0307464,41.3095281 13.9082055,41.0309977 13.8162998,40.9072064 C13.6631237,40.628676 13.3261363,40.442989 13.0504194,40.3191977 C13.1116898,40.5977281 13.1729602,41.3095281 13.4486772,41.3095281 L13.8469351,41.3095281"
                                                    fill="#6D6E70" fillRule="nonzero"></path>
                                                <path
                                                    d="M23.6195701,25.1238162 C25.0900606,24.9690771 25.3351424,24.628651 25.5802241,23.5145294 C25.702765,22.9884164 26.0703877,22.4313555 26.4073751,22.0909295 C26.6218216,21.8433469 26.8362682,21.6576599 27.0507147,21.3172339 C27.1119851,21.1624948 27.1732556,21.0696513 27.0507147,21.1005991 C26.8975386,21.2243904 26.3767399,21.5648165 26.1622933,21.7195556 C25.1206959,22.4623034 23.5276644,22.8027294 22.91496,22.8027294 C21.5670104,22.8027294 20.402872,22.4004077 19.1774633,22.4004077 C15.5012369,22.4004077 14.122652,25.3095032 14.3064634,27.0116335 C14.3370986,27.2901639 14.3677338,27.2901639 14.4596395,27.2901639 C14.7047212,27.2901639 14.949803,26.2998335 15.8688596,25.4023466 C17.2168092,24.102538 18.6872997,23.3597903 20.7704947,23.3597903 C22.2716204,23.3597903 22.91496,23.8549554 22.91496,24.0406424 C22.91496,24.4120163 22.2716204,24.4429641 22.3328909,24.814338 C22.3022557,24.9690771 22.6392431,25.2476075 23.6195701,25.1238162"
                                                    fill="#6D6E70" fillRule="nonzero"></path>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </span>
                        </div>
                    </Link>
                </div>
                <div className='h-full flex items-center md:hidden'>
                    <button aria-label='expand-nav' onClick={() => dispatch(expandNav(!isExpanded))}>
                        {!isExpanded ?
                            <Bars3Icon className='size-8 hover:shadow hover:shadow-white' /> :
                            <RxCross2 className='size-8 hover:shadow hover:shadow-white' />
                        }</button>
                </div>
            </div>

        </nav>
    )
}

export default NavBrand
