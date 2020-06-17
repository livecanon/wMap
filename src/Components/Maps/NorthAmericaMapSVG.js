import React from "react";

const NorthAmericaMapSVG = (props) => {
    return (
        <svg
            width="100%"
            viewBox="0 0 580 459"
            fill="none"
            onClick={props.onClickHandler}
            style={{ marginBottom: "1rem" }}
        >
            <path
                id="Belize"
                d="M287.5 395.1L288.9 392.9L289.9 392.7L291.2 391L292.2 387.8L291.9 387.2L292.8 384.9L292.4 383.9L293.7 381.2L294 379.4H292.9L293 378.5H292L289.5 382.4L288.6 381.6L287.9 381.9L287.8 382.9L287.1 387.9L285.9 395.1H287.5Z"
                fill="#2431EB"
                stroke="white"
            />
            <path
                id="Canada"
                d="M464 200.7L463.3 197.7L460.8 199.6L461.3 201.7L466.9 204.3L468.8 203.9L472.1 201.4L467.4 201.5L464 200.7ZM478.4 184.8L478.6 183.7L474.5 181.1L468.6 179.5L466.7 180.1L470.2 183L475.9 184.9L478.4 184.8ZM173.1 188.5L173.3 185.1L170.1 182.5L169.7 179.6L169.6 177.5L165.5 176.8L163.1 175.9L159 174.5L157.6 176L157 179.3L161.3 180.4L160.9 182.2L163.8 184.4V186.6L170.1 189.4L173.1 188.5ZM509.2 175L513.1 171.2L514.5 169.5L512.4 169.2L507.5 171.4L503.3 174.9L495.2 184.7L489.9 188.4L491.5 190.1L487.7 192.3L487.9 194.2L497.5 194.3L502.9 194L507.3 195.5L502.9 198.4L505.8 198.6L513.1 193.2L514.3 194L511.8 199.1L514.8 200.3L517.1 200.1L520.6 194.6L520.1 190.7L520.4 187.4L516.7 188.5L519.5 183.9L515.2 182L512.5 183.5L508.6 181.8L511 179.7L508.1 178.4L504.3 180.4L509.2 175ZM152.4 153.8L150.5 155.8L149.1 158.4L150 160.3L149.4 163.1L150.1 165.9H152L151.8 161L158.9 154.1L154 154.6L152.4 153.8ZM433.3 106.8L432.9 105.6L431.2 105.5L428.4 107.2L428 107.6L428.1 109.3L429.8 109.8L433.3 106.8ZM423.7 103.6L424.5 102.5L418.5 102.4L413.6 105.1V106.6L416.6 106.8L423.7 103.6ZM420.6 86.9998L417.9 86.4998L412.9 91.6998L409.3 96.0998L403.6 98.8998L409.9 98.2998L409.1 101.7L417.3 98.6998L423.5 95.6998L424.3 98.2998L430.2 99.5998L435.1 97.7998L433.2 95.9998L429.8 96.3998L431.1 93.6998L427.4 91.9998L424 90.0998L422.5 88.5998L419.7 89.4998L420.6 86.9998ZM465.2 78.7998L468.9 77.0998L469.9 76.3998L471.3 74.0998L469 72.5998L464.8 73.2998L461 76.3998L460.3 78.9998L465.2 78.7998ZM391.4 68.0998L390.6 66.0998L390.3 65.0998L388.7 64.0998L385.7 62.5998L380.8 64.8998L375.8 66.5998L379.3 68.9998L383.1 68.3998L387.2 69.9998L391.4 68.0998ZM413.8 65.9998L407.2 64.9998L412.9 62.3998L412.5 56.3998L410.6 54.0998L406.1 53.2998L398 57.0998L392.5 62.8998L395.4 64.9998L397 68.2998L390.7 73.7998L387.5 73.5998L381.3 77.9998L385.5 72.7998L380.7 70.9998L376.2 71.8998L373.8 75.2998L367.9 75.1998L360.7 75.9998L355.6 73.5998L350.6 73.9998L349.1 71.0998L347 69.7998L343.2 70.2998L338 70.5998L333.6 72.3998L335.6 74.6998L328.6 77.4998L327.2 74.1998L322.8 75.1998L311 75.7998L304.6 74.5998L313.1 71.9998L310.3 69.1998L305.9 69.5998L301.2 68.5998L293.7 66.6998L289.9 64.3998L285.4 64.0998L282.1 65.6998L276.2 66.5998L280.1 62.4998L270.7 66.0998L269.3 61.3998L267.2 60.7998L263.4 63.2998L258.9 64.4998L258.7 62.2998L250.5 63.6998L241.7 65.9998L236.5 65.3998L229.5 66.9998L223.3 69.2998L219.6 68.7998L216.3 66.1998L210.4 64.8998L186.1 85.0998L150.7 117.5L154.9 117.6L157.6 119.2L158.2 121.8L158.4 125.7L166 122.4L172.4 120.5L171.9 123.5L172.6 125.9L174.3 128.6L173.2 132.8L171.7 139.6L176.3 143.4L173.2 147.1L168.1 150L165.6 153.1L167.7 157.5L164.6 162.4L168.7 165L165.1 168.7L163.8 174.2L170.7 176.7L172.3 179.4L177.7 185.5H178.4H192.3H206.9H211.7H226.7H241.2H255.9H270.7H287.4H304.2H314.3L315.6 183.1H317.2L316.4 186.5L317.4 187.5L320.6 187.9L325.2 188.9L329 190.8L333.4 190L338.7 191.6L341.9 189.2L345.1 188.2L346.9 186.7L348.4 185.9L352.4 187.1L355.7 187.3L356.5 188.1L356.6 191.6L361.8 192.6L360.1 194.3L361.3 196.2L359.4 198.5L361.2 199.3L359.3 201.4L360.5 201.6L361.8 200.7L362.3 202.1L365.7 202.8L369.5 202.9L373.3 203.5L377.3 204.7L378.1 206.7L379.5 211.4L377.1 213.4L373.3 212.6L372.3 208.8L371.4 212.7L367.6 216.1L366.8 219L365.7 220.7L361.6 222.7L357.9 226.1L355.9 228.3L358.6 228.7L363.1 226.7L366 225L367.6 224.7L370.2 225.3L371.9 224.4L374.7 223.6L379.4 222.8L379.7 221L379.4 221.1L377.7 221.4L375.9 220.8L378.2 218.7L380.1 218L384 217.1L388.6 216.2L390.4 217.4L392.3 216L394.2 215.2L395.1 215.6L395.2 215.7L401.9 211.5L404.6 210.3H412.3H421.6L422.6 208.7L424.3 208.4L426.8 207.5L429.5 204.7L432.7 199.8L438.2 195.1L439.3 196.8L443 195.7L444.5 197.5L441.7 206L443.8 209.5L449.7 208.7L457.8 208.5L447.4 213.6L445.9 218.8L449.6 219.3L456.7 214.8L462.5 212.4L474.7 208.7L482.2 204.6L479.6 202.4L480.6 197.9L473.5 204.9L464.9 205.7L459.4 202.6L459.3 198L459.9 191.2L466 187.1L462.7 184L455.1 184.6L443 189.8L432.1 198L427.5 199L435.3 193.3L445.4 185L452.6 182.3L458.3 177.9L463.5 177.4L470.8 177.5L480.8 178.8L489.4 177.8L497.2 172.7L505.9 170.5L510.1 168.4L514.3 166.1L516.3 159.3L515.2 157L511.8 156.2V151.1L509.5 149.2L502.6 147.6L499.8 144.2L495 140.8L498.4 137.1L496.4 130L493.8 122.5L492.8 117.3L488.5 120L481.1 126.5L473 129.7L471.4 126.3L467.7 125.3L469.9 118L472.5 113.1L464.8 112.6L464.7 110.4L461.1 107.1L458.1 105.1L453.6 106.6L449.4 106.1L442.8 104.5L438.9 105.8L435.1 114.8L434.1 120.1L425.3 126.2L428.4 130.7L428.9 135.7L427.2 139.7L422.5 143.8L415 148L406 150.8L407.7 154L405.5 163.6L399.9 169.9L395.3 171.8L390.9 166L390.8 159.2L392.5 153.2L396.1 148L391.3 147.4L383.8 147L380.2 144.5L375.4 142.9L373.7 140L370.4 137.8L363.4 135.2L356.3 136.4L357 131.9L358.5 126.4L352.5 125.4L357.4 118.6L362.3 114L371.7 107.5L380.3 102.9L385.9 102.2L388.8 98.4998L393.9 96.0998L400.3 95.6998L408 91.8998L410.9 89.4998L418.3 84.7998L421.5 81.9998L424.7 83.6998L431.2 82.7998L442 78.9998L444.3 76.2998L443.5 73.3998L448.5 70.4998L450.2 67.7998L446.7 65.1998L441.3 64.3998L435.8 63.9998L431.2 69.8998L424.7 74.4998L417.5 78.4998L416.2 74.7998L420.4 70.7998L418.2 67.2998L409.5 71.4998L413.8 65.9998ZM338.3 47.0998L335.5 46.0998L321.4 49.2998L316.3 51.2998L308.5 55.1998L313.9 56.5998L320.1 56.4998L308.6 58.5998V60.4998L314.2 60.5998L323.2 60.1998L329.7 61.3998L323.5 62.3998L318 62.0998L310.9 62.9998L307.6 63.5998L308.2 67.7998L312.4 67.1998L316.5 68.6998L316.2 71.1998L324 70.6998L335.2 69.8998L344.6 68.0998L349.6 67.6998L355.3 69.1998L362 69.9998L365.1 68.0998L364.4 65.9998L371.4 65.5998L374 63.1998L369 60.6998L364.8 58.0998L367.2 54.4998L369.9 49.3998L367.7 47.3998L364.7 46.4998L360.5 47.2998L357.7 52.5998L353.4 54.6998L355.6 49.5998L353.9 47.8998L346.6 50.5998L344 47.9998L333.6 49.4998L338.3 47.0998ZM377.4 45.5998L375.7 44.4998L370.3 44.6998L368.2 45.3998L370.4 48.9998L377.4 45.5998ZM485.1 47.1998L480.7 44.3998L472.3 43.8998L470.2 44.1998L468.5 45.9998L470.5 48.7998L471.4 49.0998L476.2 48.3998L480.3 48.4998L484.4 48.5998L485.1 47.1998ZM445.7 46.8998L451.4 43.6998L440.2 44.9998L434.4 47.0998L427.3 51.6998L424 56.8998L429.6 56.9998L423.5 59.2998L425.3 61.1998L431.2 61.9998L438.5 63.4998L452.3 64.6998L460.2 64.0998L463.4 62.4998L465.4 64.2998L468.7 64.5998L470.7 67.8998L467.2 69.2998L474.3 71.0998L478.9 73.6998L479.4 75.5998L479 77.9998L470.4 83.3998L467.2 86.0998L467.4 88.0998L458.2 88.7998L450.2 88.8998L444.8 93.0998L447.2 94.9998L460.2 94.0998L461.1 92.4998L465.8 95.1998L470.5 98.0998L468.1 99.6998L471.9 102.5L479.5 105.8L490.2 108.1L490.5 106.1L487.7 102.6L484.2 97.6998L492.7 102.3L497.4 103.8L501 99.6998V94.0998L500 92.5998L495.6 90.0998L492.9 86.7998L495.2 83.5998L501 82.8998L504.8 88.2998L508.8 90.6998L519.5 84.1998L522.8 80.2998L516.4 79.9998L513.2 74.8998L507.3 73.6998L499.6 70.1998L508.6 67.6998L507.8 62.6998L505.6 60.5998L497.3 58.4998L495.4 55.1998L487.2 56.3998L488.3 54.0998L484.7 51.5998L477.9 48.9998L472.7 51.0998L463.7 52.5998L467 49.1998L464.7 43.8998L453.1 45.9998L446 50.0998L445.7 46.8998ZM395.7 43.4998L388.6 45.8998L389.5 49.2998L382.1 48.5998L380.4 50.2998L386.2 54.1998L387.1 56.1998L390.5 56.6998L398.9 54.6998L404 49.9998L400.2 47.7998L406.2 45.3998L406.7 43.8998L399.2 44.4998L395.7 43.4998ZM418 48.8998L423.6 47.8998L433.6 43.3998L427.5 42.1998L419.7 41.9998L414.5 43.3998L410.3 45.4998L407.8 48.0998L406 52.5998L410.3 52.7998L418 48.8998ZM303.3 56.0998L305.9 53.7998L315 50.1998L328.8 46.5998L335.2 45.2998L333.6 43.1998L331.7 41.6998L322.3 41.4998L318.2 40.3998L304.2 41.1998L303.9 44.2998L296.3 47.5998L288.9 51.3998L284.6 53.5998L290.5 56.2998L289.9 58.5998L303.3 56.0998ZM427.4 37.7998L427.7 36.1998L426.3 34.4998L419.4 35.7998L415 37.9998L418.2 39.2998L423.3 39.6998L427.4 37.7998ZM418.7 29.1998L417.6 29.8998L412.8 29.5998L405.2 31.1998L401.4 31.0998L397.1 34.8998L403.7 34.4998L400.3 37.3998L403.5 38.1998L410.3 37.6998L416.1 33.9998L418.9 31.4998L418.7 29.1998ZM379.6 31.6998L381.4 29.3998L378.3 28.8998L372.6 30.5998L371.9 35.2998L365.8 34.8998L363 31.9998L354.8 30.3998L349.4 31.7998L337.8 36.5998L341.9 37.3998L359.7 36.8998L349.1 39.0998L347.6 40.6998L353.5 40.5998L365.7 38.3998L379.5 37.5998L384.6 35.2998L386.9 32.8998L383.2 32.6998L378.9 33.4998L379.6 31.6998ZM434.8 27.3998L427.7 27.0998L423.9 29.0998L426.5 30.5998L433.5 31.1998L434.9 33.2998L432.7 35.6998L431.2 38.4998L439.7 40.0998L445.2 40.6998L453.2 40.5998L464.8 39.7998L469.1 40.3998L475.8 39.3998L479.3 37.9998L480.3 35.9998L478 34.0998L472.2 33.7998L464.2 34.1998L457.2 35.2998L452.1 34.8998L447.3 34.5998L446.1 33.4998L443 32.3998L445.8 30.4998L444.4 28.8998L437.1 28.9998L434.8 27.3998ZM359.8 24.7998L353.8 25.4998L348.3 25.3998L336.2 28.4998L324.6 32.1998L328.2 33.1998L335.2 32.4998L345 30.3998L348.8 30.0998L354 28.4998L359.8 24.7998ZM440.3 25.3998L441.3 24.8998L439.8 23.9998L432.6 23.8998L432 25.1998L438.4 25.4998L440.3 25.3998ZM381.9 24.5998L385.1 23.1998L381 22.3998L375.1 22.8998L370 24.3998L373.3 25.8998L381.9 24.5998ZM389.7 20.3998L386.4 19.4998L384.8 19.2998L379.1 20.5998L378.1 21.2998H384.1L389.7 20.3998ZM436.1 22.8998L439.1 21.1998L436.8 19.5998L435.1 19.2998L430.7 19.1998L428.6 20.9998L427.9 22.7998L429.5 23.8998L436.1 22.8998ZM422.4 21.6998L422.5 19.4998L415.1 17.7998L409 17.1998L406.9 18.8998L409.7 19.9998L404.4 21.3998L412.1 21.5998L416.1 23.0998L421.3 23.5998L422.4 21.6998ZM476.1 15.5998L476.7 12.7998L472 11.9998L467.3 11.0998L465.7 8.8998L457.5 9.0998L457.8 9.9998L453.9 10.2998L449.8 11.5998L444.9 13.4998L444.6 15.3998L446.6 16.8998H453.1L448.8 18.0998L446.7 19.6998L448.3 21.5998L455 22.1998L461.8 21.7998L472.3 18.3998L478.7 17.0998L476.1 15.5998ZM554.6 1.7998L547.6 1.5998L540.7 1.2998L530.5 1.8998L529.1 1.4998L518.8 1.6998L512.4 2.0998L507.3 2.6998L502.3 4.6998L500 3.6998L496.1 3.4998L489.4 4.8998L482 5.4998L477.9 5.5998L471.9 6.3998L470.8 7.6998L473.3 8.8998L474.1 10.4998L478.5 11.9998L490.9 11.6998L498.1 12.1998L490.9 13.6998L488.7 13.2998L479.4 13.0998L478.3 15.2998L481.3 16.9998L478.5 18.5998L471 19.6998L466.1 21.3998L470.9 22.2998L472.6 25.2998L465.1 23.2998L462.6 23.5998L460.6 26.9998L452.6 28.0998L450.6 30.3998L457.3 30.6998L462.2 31.2998L473.9 30.4998L482.3 31.8998L494.9 28.8998L495.9 27.7998L489.5 27.9998L490 26.8998L496.5 25.4998L500.1 23.5998L506.9 22.2998L511.9 20.6998L511.1 18.4998L514.4 17.6998L510.1 17.0998L521.2 16.6998L524.4 15.7998L532.3 14.9998L541.6 11.4998L548.4 10.3998L558.7 7.8998H551.3L555.2 6.9998L564.2 6.1998L573.9 4.5998L575 3.4998L569.8 2.4998L563.1 2.0998L554.6 1.7998Z"
                fill="#2431EB"
                stroke="white"
            />
            <path
                id="Costa Rica"
                d="M314.1 426.6L312.7 427.9L311 427.5L310.2 426.2L308.5 425.7L307.1 426.5L303.6 424.8L302.7 425.6L301.3 426.8L302.8 427.7L301.9 429.7L301.8 431.7L302.5 433L304.2 433.6L305.4 435.4L306.6 433.8L306.3 432L307.7 433.1L308 435L309.9 435.8L312 437.1L313.5 438.6L313.6 440L312.9 441.1L314 442.4L316.9 443.8L317.3 442.6L317.8 441.3L317.7 440.1L318.5 439.4L317.4 438.4L317.5 435.9L319.7 435.3L317.3 432.6L315.3 430L314.1 426.6Z"
                fill="#2431EB"
                stroke="white"
            />
            <path
                id="Cuba"
                d="M344 351.3L339.1 349.2L334.8 349.1L330.1 348.6L328.7 349.3L324.5 349.9L321.5 351.2L318.8 352.6L317.3 354.9L314.2 356.9L316.4 357.5L319.3 356.8L320.2 355.2L322.5 355.1L326.9 351.8L332.3 352.1L330 353.7L331.8 355L338.8 356L340.3 357.3L345.2 359L348.4 358.8L349.2 362.4L350.9 364.2L354.4 364.6L356.5 366.3L352.4 369.8L360.3 369.2L364.1 369.7L367.8 369.4L371.6 368.6L372.4 367.1L368.5 364.5L364.5 364.2L365.1 362.5L362 361.2H360.1L357.1 358.4L352.9 354.4L351.1 352.9L345.9 353.7L344 351.3Z"
                fill="#2431EB"
                stroke="white"
            />
            <path
                id="Dominican Republic"
                d="M384.6 381.4V383.2L386 384.2L388.6 379.8L390.6 378.9L391.2 380.5L393.4 380.1L394.5 378.9L396.3 379.2L398.9 379L401.4 380.3L403.7 377.7L401.2 375.4L398.8 375.2L399.1 373.3L396.1 373.4L395.3 371.2L393.9 371.3L390.8 369.7L386.4 369.6L385.6 370.7L385.8 374.2L385.1 376.6L383.6 377.7L384.8 379.6L384.6 381.4Z"
                fill="#2431EB"
                stroke="white"
            />
            <path
                id="Guatemala"
                d="M287.8 382.9L282.7 382.8H277.5L277.1 386.4H274.5L276.3 388.5L278.2 390L278.7 391.4L279.5 391.8L279.1 393.9H272L268.7 399.1L269.4 400.3L268.6 401.8L268.2 403.7L270.9 406.3L273.4 407.6L276.8 407.7L279.6 408.8L279.8 407.8L281.9 406.2L283 405.5L282.8 404.8L284.2 404.4L285.5 402.8L285.2 401.5L285.7 400.3L288.5 398.5L291.3 396.1L289.8 395.3L289.2 396.2L287.5 395.1H285.9L287.1 387.9L287.8 382.9Z"
                fill="#2431EB"
                stroke="white"
            />
            <path
                id="Honduras"
                d="M319.1 400.8L317.8 399L315.9 398L314.4 396.6L312.8 395.4L312 395.3L309.5 394.4L308.4 394.9L306.9 395.1L305.6 394.7L303.9 394.3L303.1 395L301.3 395.7L298.7 395.9L296.2 395.3L295.3 395.7L294.8 395.1L293.2 395.2L291.9 396.3L291.3 396.1L288.5 398.5L285.7 400.3L285.2 401.5L285.5 402.8L284.2 404.4L285.7 404.9L286.8 406.2L288.4 407.2L288.5 408.1L291 407.3L292.1 407.8L292.8 408.5L292.2 411L293.9 411.6L294.6 413.6L296.4 413.3L297.2 411.8H298L298.2 408.7L299.5 408.5H300.7L302.1 406.8L303.6 408.1L304.2 407.3L305.3 406.6L307.4 404.8L307.7 403.5L308.2 403.6L309 402.1L309.6 401.9L310.5 402.8L311.6 403.1L312.9 402.3H314.3L316.3 401.5L317.2 400.6L319.1 400.8Z"
                fill="#2431EB"
                stroke="white"
            />
            <path
                id="Haiti"
                d="M385.6 370.7L381 369.7L377.6 369.5L376.2 371.2L379.6 372.2L379.3 374.6L381.5 377.4L379.4 378.8L375.2 378.3L370.2 377.4L369.5 379.5L372.3 381.4L375 380.3L378.3 380.7L381 380.3L384.6 381.4L384.8 379.6L383.6 377.7L385.1 376.6L385.8 374.2L385.6 370.7Z"
                fill="#2431EB"
                stroke="white"
            />
            <path
                id="Jamaica"
                d="M355.7 382.5L359.6 382.4L358.8 380.6L356.1 379.1L352.4 378.5L351.2 378.3L348.8 378.7L348 380.2L350.9 382.5L353.9 383.5L355.7 382.5Z"
                fill="#2431EB"
                stroke="white"
            />
            <path
                id="Mexico"
                d="M249.4 331.8L245.8 330.4L241.9 328.4L241.1 325.4L240.9 320.9L238.5 317.3L237.5 313.6L235.9 309.2L232.8 306.7L228.4 306.8L223.6 311.8L219.6 309.9L217.4 308L217 304.5L216.2 301.2L213.8 298.4L211.7 296.4L210.4 294.2H201.1L200.3 296.8H196H185.3L174.6 292.4L167.5 289.3L168.5 288L161.5 288.7L155.2 289.2L155.4 294.9L156.1 300L156.8 304.1L157.6 308.1L160.2 309.9L163.1 314.4L162.1 317.3L159.4 319.6L157.3 319.3L156.7 319.8L159 323.5L161.9 325L162.9 326.7L163.8 325.8L166.9 328.7L169 330.7L169.1 334.1L167.9 338.8L170.4 340.4L173.7 343.5L176.6 347.1L177.3 351H178.3L181 348.7L181.4 347.5L179.9 344.7L178.3 341.8L175.7 341.6L176.1 338.2L175.2 335.2L174.2 332.4L173.7 326.5L171.1 323.3L170.5 321L169.3 319.4V315.3L168.3 315.4L168.2 313.2L167.5 312.7L167.1 311.3L164.4 306.9L163.3 304.3L164.3 299.5L164.4 296.5L166.2 293.9L168.6 295.6L170.5 295.4L173.6 297.9L172.7 300.3L173.1 305.2L174.6 309.9L174.2 311.9L175.9 315L178.2 318.4L180.9 318.9L181.2 323.3L183.6 326.4L186.1 327.9L184.3 331.9L185 333.4L189.1 336L191 340L195.5 344.9L199.3 351.3L200.6 354.5V357L202 359.9L201.7 362.1L200.1 363.7L200.4 365.5L198.5 366.2L199.3 369.3L201.5 373.3L206.8 376.9L208.7 379.8L214.1 381.8L217.1 382.2L218.3 383.9L222.5 386.9L228.4 389.9L232.4 390.8L237.2 393.7L241.2 394.9L244.9 396.6L247.8 395.9L252.6 393.5L255.7 393.1L260.1 394.7L262.7 396.8L268.2 403.7L268.6 401.8L269.4 400.3L268.7 399.1L272 393.9H279.1L279.5 391.8L278.7 391.4L278.2 390L276.3 388.5L274.5 386.4H277.1L277.5 382.8H282.7L287.8 382.9L287.9 381.9L288.6 381.6L289.5 382.4L292 378.5H293L294.2 378.4L295.4 380L297.4 375L298.6 372.3L297.7 371.2L299.5 367.3L303 363.5L303.6 360.4L302.4 359.1L299 359.6L294.2 359.4L288.2 360.9L284.2 362.6L283 364.4L281.8 369.8L280 373.5L276.1 376.1L272.5 377.2L268.2 378.3L263.9 378.9L258.8 380.7L256.9 378.1L251.3 376.4L249.5 373.2L248.8 369.6L245.8 364.9L245.4 359.9L244.2 356.8L243.7 353.4L244.8 350.3L246.6 341.7L248.4 337.2L251.5 331.6L249.4 331.8Z"
                fill="#2431EB"
                stroke="white"
            />
            <path
                id="Nicaragua"
                d="M319.1 400.8L317.2 400.6L316.3 401.5L314.3 402.3H312.9L311.6 403.1L310.5 402.8L309.6 401.9L309 402.1L308.2 403.6L307.7 403.5L307.4 404.8L305.3 406.6L304.2 407.3L303.6 408.1L302.1 406.8L300.7 408.5H299.5L298.2 408.7L298 411.8H297.2L296.4 413.3L294.6 413.6L294.2 414L293.3 413L292.6 414L295.2 416.9L297.4 418.9L298.4 421L300.9 423.6L302.7 425.6L303.6 424.8L307.1 426.5L308.5 425.7L310.2 426.2L311 427.5L312.7 427.9L314.1 426.6L313.3 425.5L313.2 423.8L314.4 422.2L314.2 420.5L314.9 417.8L315.8 417.1L315.9 414.3L315.7 412.6L316.1 409.8L317 407.3L318.4 405.1L318.1 402.8L318.5 401.4L319.1 400.8Z"
                fill="#2431EB"
                stroke="white"
            />
            <path
                id="Panama"
                d="M348.5 441L346.5 439.2L344.8 437.3L342.3 436.2L339.2 436L339.5 435.4L336.4 435L334.4 436.9L330.9 438.2L328.4 439.8L325.7 440.3L324.2 438.7L323.7 439.2L321.4 438.9L321.6 437.6L319.7 435.3L317.5 435.9L317.4 438.4L318.5 439.4L317.7 440.1L317.8 441.3L317.3 442.6L316.9 443.8L317.5 444.8L317.8 443.4H320.2L321.6 444.1L323.9 444.6L324.9 447.1L326.7 447.5L327.5 446.4L328.3 450.2L330.9 449.9L331.8 449L333.3 448.1L330.8 444.7L331.4 443.4L332.7 443.1L335 441.5L336.2 439.3L338.7 438.9L341.4 440.7L342.4 442.8L343.8 443.2L342.3 444.9L343.3 448.4L345.1 450.2L346 447.1L347.8 447.6L348.9 445.7L347.8 441.9L348.5 441Z"
                fill="#2431EB"
                stroke="white"
            />
            <path
                id="El Salvador"
                d="M292.2 411L292.8 408.5L292.1 407.8L291 407.3L288.5 408.1L288.4 407.2L286.8 406.2L285.7 404.9L284.2 404.4L282.8 404.8L283 405.5L281.9 406.2L279.8 407.8L279.6 408.8L281 410.1L284.1 410.5L286.3 411.8L288.2 412.4L291.5 412.5L292.2 411Z"
                fill="#2431EB"
                stroke="white"
            />
            <path
                id="United States"
                d="M317.2 183.1H315.6L314.3 185.5H304.2H287.4H270.7H255.9H241.2H226.7H211.7H206.9H192.3H178.4L176.8 190.6L174.4 195.7L172.1 197.3L173.2 191.4L167.4 189.3L166 190.5L165.6 193.4L163.8 198.8L159.6 207.1L155.6 212.7L151.6 218.3L146.2 224.1L145.1 228.8L142.3 234.1L138.4 239.3L139.4 242.7L137.5 247.9L139 253.3L140.3 255.5L139.5 257L139.9 266L142.4 272.5L141.6 276L142.6 277L147.2 277.7L148.5 279.4L151.3 279.7L151.2 281.6L153.4 282.3L155.5 286L155.2 289.2L161.5 288.7L168.5 288L167.5 289.3L174.6 292.4L185.3 296.8H196H200.3L201.1 294.2H210.4L211.7 296.4L213.8 298.4L216.2 301.2L217 304.5L217.4 308L219.6 309.9L223.6 311.8L228.4 306.8L232.8 306.7L235.9 309.2L237.5 313.6L238.5 317.3L240.9 320.9L241.1 325.4L241.9 328.4L245.8 330.4L249.4 331.8L251.5 331.6L250.9 329.4L251.3 326.3L252.3 321.9L254.2 319.1L257.9 316L263.9 313.3L270 308.6L274.9 307.1L278.4 306.7L281.9 308.1L286.8 307.3L290.1 310.7L293.9 310.9L296.3 309.7L298 310.6L299.3 309.8L298.4 308.5L299.1 306L298.6 304.3L301 303.3L305.2 302.9L309.9 303.6L316.1 302.8L319.1 304.3L321.1 307.3L322 307.6L328.1 304.7L330 305.7L333 311L333.8 314.5L331.8 318.7L332.2 321.2L333.8 326.1L335.8 331.6L337.6 333L338 335.8L340.6 336.6L342.3 335.8L344.3 331.9L345 329.4L345.9 325.1L344.7 317.7L345.2 315L343.7 310.5L343 305.1L343.1 300.7L344.9 296.2L348.4 292.4L352.1 289.4L359 285.3L360.3 283.1L363.6 280.8L366.4 280.4L370.8 276.6L376.8 274.7L381.4 269.9L382.3 263.4L382.4 261.2L381 260.8L382.5 254.6L379.5 252.5L382.7 253.5V249.4L384.6 246.7L383.6 252L385.6 254.5L382.7 258.9L383.1 259.1L387.5 254L389.9 251.5L390.5 249L389.6 247.9L389.5 244.4L390.7 246L391.8 246.4L391.7 248L396.9 243.1L399.4 238.6L398 238.3L400.1 236.5L399.7 237.3H403L410.8 235.4L409.7 234.2L401.8 235.4L406.6 233.6L409.7 233.3L412.1 233L416.2 231.9L418.6 232L422.4 231L423.4 229.3L422.3 227.9L422.1 230.1L420 230L419.4 226.7L420.5 223.4L421.9 222.1L425.8 218.4L431.7 216.6L437.7 214.5L444 211.5L443.8 209.5L441.7 206L444.5 197.5L443 195.7L439.3 196.8L438.2 195.1L432.7 199.8L429.5 204.7L426.8 207.5L424.3 208.4L422.6 208.7L421.6 210.3H412.3H404.6L401.9 211.5L395.2 215.7L395.4 216.6L394.8 219L390.2 221L386.3 220.5L382.3 220.3L379.7 221L379.4 222.8L379.3 223.4L373.5 227.1L369 228.9L366.1 229.7L362.4 231.4L358.4 232.3L355.9 232L353.2 230.7L355.9 228.3L357.9 226.1L361.6 222.7L362.3 220.2L362.8 216.7L361.2 216L356.9 218.8L356 218.7L356.3 217.2L360.1 214.7L361.7 211.9L362.4 209.1L359.7 206.7L356 205.4L354.3 207.8L352.9 208.4L350.7 211.5L351.1 209.4L348.5 210.9L346.4 212.9L343.8 216L342.5 218.6L342.6 222.4L340.8 226.4L337.5 229.4L336.1 230.3L334.5 231H332.7L332.4 230.6L332.3 227.3L333 225.7L333.7 224.2L334.3 221.2L336.8 217.7L339.7 213.4L344.3 208.7H343.6L338.2 212.7L337.8 212L340.7 209.7L345.4 205.7L349.1 205.2L353.5 203.9L357.2 204.6H357.3L362 204.1L360.5 201.6L359.3 201.4L357.9 201.1L357.5 199.4L352.4 199.9L347.4 201.3L344.9 199L342.4 198.2L345.5 194.9L340.2 196.9L335.3 199L330.7 200.5L328.6 198.4L323.1 199.7L323.5 198.8L328.1 196.2L332.8 193.7L338.7 191.6L333.4 190L329 190.8L325.2 188.9L320.6 187.9L317.4 187.5L316.4 186.5L317.2 183.1ZM76.6 136.2L83.5 133.4V131.6L80.9 131.2L77.5 132.1L71.1 134.2L68.9 136.9L69.6 138.5L76.6 136.2ZM37.9 119.8L40.2 117.5L37.3 117L31.6 118L32.4 119.6L34 120.7L37.9 119.8ZM39.1 97.5002L36 99.7002L36.4 100.2L40.6 99.8002L40.9 100.9L42.6 102.1L47.5 100.9L48.7 100.3L45.4 99.5002L43.8 98.0002L40.4 98.6002L39.1 97.5002ZM164 57.3002L159.6 56.2002L149.4 59.0002L146.2 58.7002L135.2 61.0002L130.4 61.6002L122.6 64.1002L117.8 66.7002L109.2 69.2002L101.6 69.3002L95.3 72.2002L98.5 73.9002L99.2 76.2002L98.4 78.9002L100.7 81.0002L99.5 84.5002L90.3 84.7002L94.6 81.9002H91.2L78.1 84.6002L69 86.9002L70 90.2002L68.8 92.4002L73.3 93.8002L80.2 93.1002L82 94.4002L84.9 93.1002L91 91.9002H93.7L87.8 94.0002L88.9 95.0002L86.4 97.6002L80.9 99.4002L78.4 98.9002L71.4 101.6L69.6 100.7L65.5 101.1L60.2 104.1L52.6 107.2L46.8 110.6L47.1 113L43.1 116.3L44.5 117.7L45 120.4L52.2 119.3L52.6 121.4L49.3 123.5L45.7 127H48.5L55.7 124.7L54.1 127.6L57.7 125.5L57.3 128.5L62.1 126.3L62.5 127.4L69.7 125.6L63.5 129L57.8 133.5L52.1 135.6L49.8 136.8L39.5 140.4L34.6 142.8L28.1 143.5L19.6 146.8L13 148.6L4.89999 151.4L4.5 152.4L14.5 150.7L20.5 148.7L27.4 146.7L33.5 145L36.3 145.5L44.4 142.9L48.9 140.1L59.4 137L63.3 134.4L69.9 132.6L77.5 130.1L86.4 125.9L86.2 123L97.3 118.9L104.7 115L113.9 111.8L113.5 113.2L106.8 115L98.5 120.7L95.3 124.2L101.7 122.9L107.8 121L114.3 119.7L117.2 119.4L120.7 115.3L127 114.1L129.6 116.6L135.6 119.3L142.3 118.8L148 120.8L151.2 121.9L154.5 128L158.2 129.7L165.3 129.9L169.4 130.3L166.7 135.8L168.3 140.7L165 145.9L167.5 147.8L168.1 150L173.2 147.1L176.3 143.4L171.7 139.6L173.2 132.8L174.3 128.6L172.6 125.9L171.9 123.5L172.4 120.5L166 122.4L158.4 125.7L158.2 121.8L157.6 119.2L154.9 117.6L150.7 117.5L186.1 85.1002L210.4 64.9002L206.9 64.2002L202.8 62.6002L196.3 63.4002L194.1 62.7002L187 62.2002L180.8 60.6002L176 61.1002L171.1 60.2002L173.1 59.0002L166.8 58.7002L163.5 59.7002L164 57.3002Z"
                fill="#2431EB"
                stroke="white"
            />
            <path
                id="Puerto Rico"
                d="M405.8 381.3V381.2H405.9V381.1L406 381V380.9H405.9H405.6H405.5V381V381.1L405.7 381.2V381.3H405.8ZM419.4 381L420.1 380.8V380.7L419.7 380.6H419.1L418.6 380.8L418.7 381H418.9H419.4ZM415.7 378.8L415.6 378.6H415.4L411.9 378.5L410.6 378.3L410.3 378.4L410 378.5L409.9 378.9L409.7 379.1L409.4 379.3L409.5 379.6L409.6 379.8L409.8 380.2L409.7 380.7L409.5 381.7L409.8 381.9L410.5 381.8L410.8 381.9L411.1 382L411.5 381.9L411.9 381.7L412.8 381.8L413.3 381.7L413.9 382L414.3 381.9L414.5 382H414.8H415.4L416.3 381.8L417.1 381.3L417.4 380.8L417.8 380.5L418.4 380.1V379.2L417.7 379.1L417.1 378.8L416 378.7H415.9L416 378.9H415.9L415.7 378.8Z"
                fill="#2431EB"
                stroke="white"
            />
        </svg>
    );
};

export default NorthAmericaMapSVG;
