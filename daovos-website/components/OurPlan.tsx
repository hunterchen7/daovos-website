const OurPlan = (): JSX.Element => {
  const Textbox = (props: any): JSX.Element => {
    const { number, text } = props;
    return (
      <div className="flex">
        {
          number % 2 === 0 && <div className="w-[170px]" />
        }
        <div className="w-[170px] h-[185px] border-2 border-black text-center flex flex-col justify-center text-9xl font-extrabold">
          {number}
        </div>
        <div className="border-r-2 border-y-2 border-black text-center rounded-r-full flex flex-col justify-center text-4xl font-bold px-36 bg-white">
          {text}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-evenly w-full border-b-2 border-black gap-4" id="our-plan">
      <svg width="1257" height="174" viewBox="0 0 1257 174" fill="none" xmlns="http://www.w3.org/2000/svg" className="m-12 self-center">
        <path d="M24.832 92.6V36.28H34.944V35H24.832V29.624C24.832 12.728 26.112 4.408 33.536 4.408C38.528 4.408 40.32 11.32 42.752 15.16C43.904 16.824 44.928 17.592 45.952 17.592C46.976 17.592 47.872 16.824 48.64 15.16L52.48 7.09599C46.72 4.408 39.808 2.87199 33.152 2.87199C21.12 2.87199 6.912 9.272 6.912 29.624V35H0.128V36.28H6.912V99H18.432C22.272 99 24.832 96.44 24.832 92.6ZM69.209 33.72C51.289 33.72 37.849 44.6 37.849 67C37.849 89.4 51.289 100.28 69.209 100.28C87.129 100.28 100.569 89.4 100.569 67C100.569 44.6 87.129 33.72 69.209 33.72ZM69.209 98.744C60.505 98.744 55.897 86.584 55.897 67C55.897 47.416 60.505 35.128 69.209 35.128C77.913 35.128 82.521 47.416 82.521 67C82.521 86.584 77.913 98.744 69.209 98.744ZM111.409 99H122.929C126.769 99 129.329 96.44 129.329 92.6V76.216C132.913 57.272 138.545 50.744 151.857 50.744C155.825 50.744 156.593 46.904 156.593 43.192V33.72C142.513 33.72 133.681 54.328 129.329 69.176V35H111.409V99ZM252.919 92.6V60.344C252.919 41.784 244.343 33.72 226.935 33.72C209.911 33.72 201.207 41.144 201.207 50.36C201.207 56.888 205.303 62.776 211.319 64.824C201.207 68.792 196.471 76.472 196.471 83.896C196.471 94.52 204.279 100.28 213.495 100.28C226.935 100.28 231.415 89.528 234.999 78.392V99H246.519C250.359 99 252.919 96.44 252.919 92.6ZM234.999 61.24H226.295C207.607 61.24 205.303 35.512 223.991 35.512C234.615 35.512 234.999 48.056 234.999 60.344V61.24ZM234.999 71.864C233.207 79.032 229.239 92.216 221.175 92.216C211.191 92.216 210.167 62.648 228.727 62.648H234.999V71.864ZM299.784 99L314.376 94.904C318.6 98.616 322.952 100.408 329.736 100.408C348.168 100.408 359.816 86.456 359.816 64.44C359.816 47.288 353.544 33.464 338.824 33.464C326.408 33.464 321.288 47.544 317.704 60.472V2.99999H299.784V99ZM317.704 66.616C319.88 56.888 324.488 41.656 333.064 41.656C340.744 41.656 341.896 56.632 341.896 66.616C341.896 80.696 339.336 99.128 327.944 98.872C320.904 98.744 318.088 91.576 317.704 84.536V66.616ZM419.939 50.616C418.531 40.632 410.851 33.72 398.819 33.72C377.955 33.72 368.099 50.36 368.099 67C368.099 83.512 377.315 100.152 395.747 100.152C428.259 100.152 431.715 60.344 405.347 52.152H425.443V50.616H419.939ZM405.859 50.616H387.171C388.579 41.784 393.059 35.128 398.819 35.128C404.963 35.128 406.755 40.248 405.859 50.616ZM386.915 52.152H399.459C430.563 57.528 424.931 95.16 402.915 95.288C386.147 95.288 384.483 69.688 386.915 52.152ZM428 35V36.408H434.784V86.2C434.784 99.384 444.128 100.024 448.992 100.024C455.392 100.024 462.688 95.416 466.912 88.632L465.76 87.864C463.84 90.808 461.024 94.136 456.928 94.136C451.936 94.136 452.704 89.272 452.704 78.648V36.408H461.92V35H439.136C448.48 32.44 454.496 27.192 454.496 18.36H433.504C436.96 21.304 441.696 32.056 435.808 35H428ZM466.875 35V36.408H473.659V86.2C473.659 99.384 483.003 100.024 487.867 100.024C494.267 100.024 501.563 95.416 505.787 88.632L504.635 87.864C502.715 90.808 499.899 94.136 495.803 94.136C490.811 94.136 491.579 89.272 491.579 78.648V36.408H500.795V35H478.011C487.355 32.44 493.371 27.192 493.371 18.36H472.379C475.835 21.304 480.571 32.056 474.683 35H466.875ZM561.189 50.616C559.781 40.632 552.101 33.72 540.069 33.72C519.205 33.72 509.349 50.36 509.349 67C509.349 83.512 518.565 100.152 536.997 100.152C569.509 100.152 572.965 60.344 546.597 52.152H566.693V50.616H561.189ZM547.109 50.616H528.421C529.829 41.784 534.309 35.128 540.069 35.128C546.213 35.128 548.005 40.248 547.109 50.616ZM528.165 52.152H540.709C571.813 57.528 566.181 95.16 544.165 95.288C527.397 95.288 525.733 69.688 528.165 52.152ZM576.034 99H587.554C591.394 99 593.954 96.44 593.954 92.6V76.216C597.538 57.272 603.17 50.744 616.482 50.744C620.45 50.744 621.218 46.904 621.218 43.192V33.72C607.138 33.72 598.306 54.328 593.954 69.176V35H576.034V99Z" fill="#131313"/>
        <path d="M709.08 135C735 112.44 782.76 77.88 780.12 38.76C778.44 16.92 760.2 0.599991 728.76 0.599991C707.88 0.599991 686.52 10.2 676.92 34.92H679.8C686.04 23.88 698.76 16.2 712.68 16.2C734.28 16.2 744.36 33.24 743.64 52.92C742.92 94.44 695.64 146.28 673.8 171H774.36L783.96 135H709.08ZM870.846 0.599991C771.006 0.599991 771.246 173.4 870.846 173.4C970.206 173.4 970.446 0.599991 870.846 0.599991ZM870.846 171C822.606 171 822.126 2.99999 870.846 2.99999C919.326 2.99999 918.846 171 870.846 171ZM1032.03 39L1008.27 71.16H1012.11L1014.03 68.52C1048.83 78.12 1032.99 152.76 990.274 152.76C978.034 152.76 966.274 149.4 960.034 138.36L957.394 139.56C965.554 160.44 984.754 173.4 1008.51 173.4C1073.07 173.4 1098.03 74.28 1015.95 65.64L1062.27 2.99999H972.514L962.194 39H1032.03ZM1157.25 0.599991C1057.41 0.599991 1057.65 173.4 1157.25 173.4C1256.61 173.4 1256.85 0.599991 1157.25 0.599991ZM1157.25 171C1109.01 171 1108.53 2.99999 1157.25 2.99999C1205.73 2.99999 1205.25 171 1157.25 171Z" fill="#131313"/>
        <path d="M709.08 135L707.767 133.491L703.736 137H709.08V135ZM780.12 38.76L782.115 38.6253L782.115 38.616L782.114 38.6066L780.12 38.76ZM676.92 34.92L675.056 34.196L673.998 36.92H676.92V34.92ZM679.8 34.92V36.92H680.967L681.541 35.9041L679.8 34.92ZM743.64 52.92L741.641 52.8469L741.641 52.8661L741.64 52.8853L743.64 52.92ZM673.8 171L672.301 169.676L669.364 173H673.8V171ZM774.36 171V173H775.897L776.292 171.515L774.36 171ZM783.96 135L785.892 135.515L786.563 133H783.96V135ZM710.393 136.509C723.232 125.334 741.835 110.9 756.79 94.4347C771.726 77.9903 783.493 59.0365 782.115 38.6253L778.125 38.8947C779.387 57.6035 768.594 75.4897 753.83 91.7453C739.085 107.979 720.848 122.106 707.767 133.491L710.393 136.509ZM782.114 38.6066C781.232 27.1402 775.985 17.0792 766.833 9.9151C757.703 2.76872 744.817 -1.40001 728.76 -1.40001V2.59999C744.143 2.59999 756.097 6.59126 764.367 13.0649C772.615 19.5208 777.328 28.5398 778.126 38.9134L782.114 38.6066ZM728.76 -1.40001C707.256 -1.40001 685.021 8.53471 675.056 34.196L678.784 35.644C688.019 11.8653 708.504 2.59999 728.76 2.59999V-1.40001ZM676.92 36.92H679.8V32.92H676.92V36.92ZM681.541 35.9041C687.421 25.5009 699.471 18.2 712.68 18.2V14.2C698.049 14.2 684.659 22.2591 678.059 33.9359L681.541 35.9041ZM712.68 18.2C722.893 18.2 730.21 22.1975 734.94 28.3936C739.719 34.6532 741.989 43.3398 741.641 52.8469L745.639 52.9931C746.011 42.8202 743.601 33.1468 738.12 25.9664C732.59 18.7225 724.067 14.2 712.68 14.2V18.2ZM741.64 52.8853C741.291 73.0127 729.602 95.9301 714.993 117.125C700.435 138.246 683.242 157.292 672.301 169.676L675.299 172.324C686.198 159.988 703.565 140.754 718.287 119.395C732.958 98.1098 745.269 74.3473 745.64 52.9547L741.64 52.8853ZM673.8 173H774.36V169H673.8V173ZM776.292 171.515L785.892 135.515L782.028 134.485L772.428 170.485L776.292 171.515ZM783.96 133H709.08V137H783.96V133ZM870.846 -1.40001C845.235 -1.40001 825.955 9.71267 813.134 26.3806C800.355 42.9935 794.04 65.0464 794.056 87.0014C794.071 108.956 800.416 131.008 813.202 147.62C826.03 164.286 845.293 175.4 870.846 175.4V171.4C846.598 171.4 828.482 160.914 816.372 145.18C804.22 129.392 798.07 108.244 798.056 86.9986C798.041 65.7536 804.161 44.6065 816.305 28.8194C828.406 13.0873 846.537 2.59999 870.846 2.59999V-1.40001ZM870.846 175.4C896.34 175.4 915.559 164.284 928.356 147.618C941.111 131.006 947.44 108.955 947.456 87.0014C947.471 65.0475 941.172 42.9953 928.424 26.3824C915.633 9.71439 896.399 -1.40001 870.846 -1.40001V2.59999C895.093 2.59999 913.178 13.0856 925.25 28.8176C937.365 44.6047 943.47 65.7525 943.456 86.9986C943.441 108.245 937.306 129.394 925.183 145.182C913.102 160.916 895.031 171.4 870.846 171.4V175.4ZM870.846 169C860.14 169 851.53 159.66 845.509 144.031C839.557 128.581 836.515 107.842 836.486 86.9971C836.456 66.1516 839.439 45.4151 845.375 29.9674C851.377 14.3495 860.014 4.99998 870.846 4.99998V0.999985C857.317 0.999985 847.745 12.6504 841.641 28.5326C835.473 44.5849 832.455 65.8484 832.486 87.0029C832.516 108.158 835.594 129.419 841.777 145.469C847.891 161.34 857.432 173 870.846 173V169ZM870.846 4.99998C881.612 4.99998 890.206 14.3412 896.18 29.9643C902.087 45.4131 905.055 66.1507 905.026 86.9971C904.996 107.843 901.969 128.583 896.046 144.034C890.053 159.668 881.486 169 870.846 169V173C884.205 173 893.699 161.332 899.781 145.466C905.933 129.417 908.995 108.157 909.026 87.0029C909.056 65.8493 906.054 44.5869 899.916 28.5357C893.845 12.6588 884.32 0.999985 870.846 0.999985V4.99998ZM1032.03 39L1033.64 40.1884L1036 37H1032.03V39ZM1008.27 71.16L1006.67 69.9716L1004.31 73.16H1008.27V71.16ZM1012.11 71.16V73.16H1013.13L1013.73 72.3363L1012.11 71.16ZM1014.03 68.52L1014.57 66.592L1013.23 66.2238L1012.42 67.3437L1014.03 68.52ZM960.034 138.36L961.775 137.376L960.874 135.781L959.206 136.539L960.034 138.36ZM957.394 139.56L956.566 137.739L954.841 138.523L955.531 140.288L957.394 139.56ZM1015.95 65.64L1014.35 64.4509L1012.27 67.2629L1015.74 67.629L1015.95 65.64ZM1062.27 2.99998L1063.88 4.18912L1066.24 0.999985H1062.27V2.99998ZM972.514 2.99998V0.999985H971.007L970.591 2.44885L972.514 2.99998ZM962.194 39L960.271 38.4489L959.54 41H962.194V39ZM1030.43 37.8116L1006.67 69.9716L1009.88 72.3484L1033.64 40.1884L1030.43 37.8116ZM1008.27 73.16H1012.11V69.16H1008.27V73.16ZM1013.73 72.3363L1015.65 69.6963L1012.42 67.3437L1010.5 69.9837L1013.73 72.3363ZM1013.5 70.448C1021.42 72.632 1026.53 78.4971 1029.11 86.3565C1031.71 94.2654 1031.69 104.1 1029.28 113.756C1024.43 133.21 1010.3 150.76 990.274 150.76V154.76C1012.97 154.76 1028.11 134.99 1033.16 114.724C1035.71 104.52 1035.8 93.8945 1032.91 85.1085C1030.01 76.2728 1024.05 69.208 1014.57 66.592L1013.5 70.448ZM990.274 150.76C978.317 150.76 967.487 147.482 961.775 137.376L958.293 139.344C965.06 151.318 977.751 154.76 990.274 154.76V150.76ZM959.206 136.539L956.566 137.739L958.221 141.381L960.861 140.181L959.206 136.539ZM955.531 140.288C964.005 161.971 983.969 175.4 1008.51 175.4V171.4C985.539 171.4 967.103 158.909 959.257 138.832L955.531 140.288ZM1008.51 175.4C1041.92 175.4 1065.02 149.755 1069.2 123.069C1071.3 109.685 1068.66 95.9042 1060.07 84.8926C1051.48 73.8668 1037.1 65.8546 1016.16 63.651L1015.74 67.629C1035.85 69.7453 1049.13 77.3632 1056.92 87.3524C1064.72 97.3558 1067.2 109.975 1065.25 122.451C1061.33 147.485 1039.67 171.4 1008.51 171.4V175.4ZM1017.56 66.8291L1063.88 4.18912L1060.67 1.81086L1014.35 64.4509L1017.56 66.8291ZM1062.27 0.999985H972.514V4.99998H1062.27V0.999985ZM970.591 2.44885L960.271 38.4489L964.116 39.5511L974.436 3.55112L970.591 2.44885ZM962.194 41H1032.03V37H962.194V41ZM1157.25 -1.40001C1131.64 -1.40001 1112.36 9.71267 1099.54 26.3806C1086.76 42.9935 1080.45 65.0464 1080.46 87.0014C1080.48 108.956 1086.82 131.008 1099.61 147.62C1112.44 164.286 1131.7 175.4 1157.25 175.4V171.4C1133 171.4 1114.89 160.914 1102.78 145.18C1090.63 129.392 1084.48 108.244 1084.46 86.9986C1084.45 65.7536 1090.57 44.6065 1102.71 28.8194C1114.81 13.0873 1132.94 2.59999 1157.25 2.59999V-1.40001ZM1157.25 175.4C1182.75 175.4 1201.97 164.284 1214.76 147.618C1227.52 131.006 1233.85 108.955 1233.86 87.0014C1233.88 65.0475 1227.58 42.9953 1214.83 26.3824C1202.04 9.71439 1182.8 -1.40001 1157.25 -1.40001V2.59999C1181.5 2.59999 1199.58 13.0856 1211.66 28.8176C1223.77 44.6047 1229.88 65.7525 1229.86 86.9986C1229.85 108.245 1223.71 129.394 1211.59 145.182C1199.51 160.916 1181.44 171.4 1157.25 171.4V175.4ZM1157.25 169C1146.55 169 1137.94 159.66 1131.92 144.031C1125.96 128.581 1122.92 107.842 1122.89 86.9971C1122.86 66.1516 1125.84 45.4151 1131.78 29.9674C1137.78 14.3495 1146.42 4.99998 1157.25 4.99998V0.999985C1143.72 0.999985 1134.15 12.6504 1128.05 28.5326C1121.88 44.5849 1118.86 65.8484 1118.89 87.0029C1118.92 108.158 1122 129.419 1128.18 145.469C1134.3 161.34 1143.84 173 1157.25 173V169ZM1157.25 4.99998C1168.02 4.99998 1176.61 14.3412 1182.59 29.9643C1188.49 45.4131 1191.46 66.1507 1191.43 86.9971C1191.4 107.843 1188.37 128.583 1182.45 144.034C1176.46 159.668 1167.89 169 1157.25 169V173C1170.61 173 1180.1 161.332 1186.19 145.466C1192.34 129.417 1195.4 108.157 1195.43 87.0029C1195.46 65.8493 1192.46 44.5869 1186.32 28.5357C1180.25 12.6588 1170.73 0.999985 1157.25 0.999985V4.99998Z" fill="black"/>
        <path d="M96.5 142.5H608" stroke="black" stroke-width="2"/>
        <path d="M126.5 170.5H638" stroke="black" stroke-width="2"/>
      </svg>
      <div className="self-center text-4xl font-nunito">
        FIVE KEY STREAMS FOR <span className="font-extrabold">DAOVOS</span> DISCUSSION
      </div>
      <div className="flex flex-col self-center w-[95.7vw] gap-4 p-16 bg-[url('../public/plan_bg.svg')] bg-cover bg-no-repeat">
        <div className="flex flex-col self-center gap-4">
          <Textbox number={1} text={'Work and Education'} />
          <Textbox number={2} text={'Health, Wellness & Longevity'} />
          <Textbox number={3} text={'Finance & Financial Systems'} />
          <Textbox number={4} text={'Media, Creators & Communities'} />
          <Textbox number={5} text={'Sustainable Living & Ecosystems'} />          
        </div>
        <div className="w-1/2 self-center text-xl font-nunito my-12">
          The DAOVOS community is deeply committed to the principles of diversity, inclusion, transparency, privacy and decentralisation, and these values will be reflected in our conversations and our actions as a collective. See here for the 2023 draft agenda.
        </div>        
      </div>
    </div>
  );
};

export default OurPlan;