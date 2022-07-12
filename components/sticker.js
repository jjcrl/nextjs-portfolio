export const Sticker = () => {
  return (
    <>
      <svg height={150} width={150} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <path
            id="textcircle"
            d="M5,75a70,70 0 1,0 140,0a70,70 0 1,0 -140,0"
            fill="#412cff"
            transform="rotate(12 79 75)"
          />
        </defs>
        <path
          d="M5,75a70,70 0 1,0 140,0a70,70 0 1,0 -140,0"
          fill="#412cff"
          transform="rotate(12 79 75)"
        />
        <text dx="20" dy="-10" id="text-spin">
          <textPath textLength="420" href="#textcircle">
            Contact Today ~ Open To Opertunities ~
          </textPath>
        </text>

        <svg height={110} width={120} viewBox="0, -50 , 100, 170">
          <path
            class="stroke noscaling"
            vector-effect="non-scaling-stroke"
            d="M299.365,4112.217c19.4377-17.5258,48.10309-10.61164,48.10309,17.47893,0,13.34813-13.00694,25.79268-22.72779,19.16591-16.37453-11.16263,14.78039-51.586,72.77484-34.06023"
            transform="translate(-281 -4057)"
            fill="none"
            stroke="black"
            strokeWidth={2}
          ></path>
          <polyline
            points="71.833 1.061 99.155 28.383 71.833 55.704"
            fill="none"
            stroke="black"
            strokeWidth={3}
            transform="translate(20,30)"
          />
        </svg>
      </svg>
    </>
  );
};
