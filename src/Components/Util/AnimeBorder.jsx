import React from "react";

const AnimeBorder = ({ imgSrc }) => {
  return (
    <div className="w-96">
      <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id="a">
            <path fill="currentColor">
              <animate
                attributeName="d"
                dur="10000ms"
                repeatCount="indefinite"
                values="M891.5 619.5Q829 739 739 848.5T500 958q-149 0-270.5-86.5t-150-229Q51 500 76 355t155-214.5Q361 71 493 93t258.5 77.5Q878 226 916 363t-24.5 256.5Z;
                
                M892.5 621.5Q835 743 741 847t-235 86q-141-18-258-91.5T90.5 634q-40.5-134 1-267.5t158-206.5q116.5-73 250-70.5t232 86.5Q830 260 890 380t2.5 241.5Z;
                
                M923.5 636Q874 772 753 839t-263 97.5Q348 967 249.5 860T80 626.5Q9 500 85.5 377.5t176.5-212Q362 76 505.5 59.5t250 80.5q106.5 97 162 228.5t6 267.5Z;
                
                M893 633.5Q867 767 751.5 843t-259 98.5Q349 964 247 861T100.5 629Q56 500 87 361.5T232 125q114-98 258-67.5T747.5 163Q861 238 890 369t3 264.5Z;

                M934.5 646.5Q903 793 774 869t-265 48.5Q373 890 257.5 825T74 630Q6 500 74 370t175.5-220Q357 60 499 63.5T772 137q131 70 162.5 216.5t0 293Z;
                
                M912 628.5Q853 757 740 824t-245.5 83.5Q362 924 261 835.5t-154-212q-53-123.5-4-250T251 142Q350 37 500 37t260 97q110 97 160.5 231.5t-8.5 263Z;
                
                M891.5 619.5Q829 739 739 848.5T500 958q-149 0-270.5-86.5t-150-229Q51 500 76 355t155-214.5Q361 71 493 93t258.5 77.5Q878 226 916 363t-24.5 256.5Z"
              ></animate>
            </path>
          </clipPath>
          <pattern
            id="b"
            patternUnits="userSpaceOnUse"
            width="100%"
            height="100%"
          >
            <image href={imgSrc} width="100%" height="100%" />
          </pattern>
        </defs>
        <g clipPath="url(#a)">
          <path fill="url(#b)">
            <animate
              attributeName="d"
              dur="10000ms"
              repeatCount="indefinite"
              values="M891.5 619.5Q829 739 739 848.5T500 958q-149 0-270.5-86.5t-150-229Q51 500 76 355t155-214.5Q361 71 493 93t258.5 77.5Q878 226 916 363t-24.5 256.5Z;
                
                M892.5 621.5Q835 743 741 847t-235 86q-141-18-258-91.5T90.5 634q-40.5-134 1-267.5t158-206.5q116.5-73 250-70.5t232 86.5Q830 260 890 380t2.5 241.5Z;
                
                M923.5 636Q874 772 753 839t-263 97.5Q348 967 249.5 860T80 626.5Q9 500 85.5 377.5t176.5-212Q362 76 505.5 59.5t250 80.5q106.5 97 162 228.5t6 267.5Z;
                
                M893 633.5Q867 767 751.5 843t-259 98.5Q349 964 247 861T100.5 629Q56 500 87 361.5T232 125q114-98 258-67.5T747.5 163Q861 238 890 369t3 264.5Z;

                M934.5 646.5Q903 793 774 869t-265 48.5Q373 890 257.5 825T74 630Q6 500 74 370t175.5-220Q357 60 499 63.5T772 137q131 70 162.5 216.5t0 293Z;
                
                M912 628.5Q853 757 740 824t-245.5 83.5Q362 924 261 835.5t-154-212q-53-123.5-4-250T251 142Q350 37 500 37t260 97q110 97 160.5 231.5t-8.5 263Z;
                
                M891.5 619.5Q829 739 739 848.5T500 958q-149 0-270.5-86.5t-150-229Q51 500 76 355t155-214.5Q361 71 493 93t258.5 77.5Q878 226 916 363t-24.5 256.5Z"
            ></animate>
          </path>

          <path fill="transparent" stroke="#4f4f4f" strokeWidth="40">
            <animate
              attributeName="d"
              dur="10000ms"
              repeatCount="indefinite"
              values="M891.5 619.5Q829 739 739 848.5T500 958q-149 0-270.5-86.5t-150-229Q51 500 76 355t155-214.5Q361 71 493 93t258.5 77.5Q878 226 916 363t-24.5 256.5Z;
                
                M892.5 621.5Q835 743 741 847t-235 86q-141-18-258-91.5T90.5 634q-40.5-134 1-267.5t158-206.5q116.5-73 250-70.5t232 86.5Q830 260 890 380t2.5 241.5Z;
                
                M923.5 636Q874 772 753 839t-263 97.5Q348 967 249.5 860T80 626.5Q9 500 85.5 377.5t176.5-212Q362 76 505.5 59.5t250 80.5q106.5 97 162 228.5t6 267.5Z;
                
                M893 633.5Q867 767 751.5 843t-259 98.5Q349 964 247 861T100.5 629Q56 500 87 361.5T232 125q114-98 258-67.5T747.5 163Q861 238 890 369t3 264.5Z;

                M934.5 646.5Q903 793 774 869t-265 48.5Q373 890 257.5 825T74 630Q6 500 74 370t175.5-220Q357 60 499 63.5T772 137q131 70 162.5 216.5t0 293Z;
                
                M912 628.5Q853 757 740 824t-245.5 83.5Q362 924 261 835.5t-154-212q-53-123.5-4-250T251 142Q350 37 500 37t260 97q110 97 160.5 231.5t-8.5 263Z;
                
                M891.5 619.5Q829 739 739 848.5T500 958q-149 0-270.5-86.5t-150-229Q51 500 76 355t155-214.5Q361 71 493 93t258.5 77.5Q878 226 916 363t-24.5 256.5Z"
            ></animate>
          </path>

          <path fill="transparent" stroke="#8EEEE3" strokeWidth="15">
            <animate
              attributeName="d"
              dur="10000ms"
              repeatCount="indefinite"
              values="M891.5 619.5Q829 739 739 848.5T500 958q-149 0-270.5-86.5t-150-229Q51 500 76 355t155-214.5Q361 71 493 93t258.5 77.5Q878 226 916 363t-24.5 256.5Z;
                
                M892.5 621.5Q835 743 741 847t-235 86q-141-18-258-91.5T90.5 634q-40.5-134 1-267.5t158-206.5q116.5-73 250-70.5t232 86.5Q830 260 890 380t2.5 241.5Z;
                
                M923.5 636Q874 772 753 839t-263 97.5Q348 967 249.5 860T80 626.5Q9 500 85.5 377.5t176.5-212Q362 76 505.5 59.5t250 80.5q106.5 97 162 228.5t6 267.5Z;
                
                M893 633.5Q867 767 751.5 843t-259 98.5Q349 964 247 861T100.5 629Q56 500 87 361.5T232 125q114-98 258-67.5T747.5 163Q861 238 890 369t3 264.5Z;

                M934.5 646.5Q903 793 774 869t-265 48.5Q373 890 257.5 825T74 630Q6 500 74 370t175.5-220Q357 60 499 63.5T772 137q131 70 162.5 216.5t0 293Z;
                
                M912 628.5Q853 757 740 824t-245.5 83.5Q362 924 261 835.5t-154-212q-53-123.5-4-250T251 142Q350 37 500 37t260 97q110 97 160.5 231.5t-8.5 263Z;
                
                M891.5 619.5Q829 739 739 848.5T500 958q-149 0-270.5-86.5t-150-229Q51 500 76 355t155-214.5Q361 71 493 93t258.5 77.5Q878 226 916 363t-24.5 256.5Z"
            ></animate>
          </path>
        </g>
      </svg>
    </div>
  );
};

export default AnimeBorder;
