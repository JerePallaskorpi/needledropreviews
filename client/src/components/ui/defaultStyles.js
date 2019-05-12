import { createGlobalStyle } from 'styled-components';

// Colors
export const colorMain = '#FDF18B';
export const colorDark = '#282828';
export const colorLight = '#FAFAFA';
export const colorGray = 'rgba(17, 17, 17, 0.6)';

export const colorMainHighlight = '#fadd83';

// Rating colors
export const colorScore0 = '#db2736';
export const colorScore1 = '#de3b3f';
export const colorScore2 = '#e24f47';
export const colorScore3 = '#e56450';
export const colorScore4 = '#e97858';
export const colorScore5 = '#ec8c61';
export const colorScore6 = '#efa069';
export const colorScore7 = '#f3b472';
export const colorScore8 = '#f6c97a';
export const colorScore9 = '#fadd83';
export const colorScore10 = '#FDF18B';

// Shadows
export const shadowDefault = '0 2px 2px 0 hsla(0, 0%, 0%, 0.2)';
export const shadowStrong = '0 2px 5px 0 hsla(0, 0%, 0%, 0.5)';

// Global Styles
export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0 auto;
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
    font-size: 16px;
    background: ${colorLight};
    color: ${colorDark};

    input, select, textarea, button {
        font-family: inherit;
    }
    
    .ct-chart .ct-label,.ct-chart .ct-label.ct-horizontal{display:block;width:100%;height:100%;fill:rgba(0,0,0,.4);color:rgba(0,0,0,.4);font-size:.75rem;text-align:left}.ct-chart .ct-label.ct-vertical{display:block;width:100%;height:100%;fill:rgba(0,0,0,.4);color:rgba(0,0,0,.4);font-size:.75rem;text-align:right}.ct-chart .ct-grid{stroke:rgba(0,0,0,.2);stroke-width:1px;stroke-dasharray:2px}.ct-chart .ct-point{stroke-width:10px;stroke-linecap:round}.ct-chart .ct-line{fill:none;stroke-width:4px}.ct-chart .ct-area{stroke:none;fill-opacity:.1}.ct-chart .ct-bar{fill:none;stroke-width:10px}.ct-chart .ct-slice.ct-donut{fill:none;stroke-width:60px}.ct-chart .ct-series.ct-series-a .ct-bar,.ct-chart .ct-series.ct-series-a .ct-line,.ct-chart .ct-series.ct-series-a .ct-point,.ct-chart .ct-series.ct-series-a .ct-slice.ct-donut{stroke:#d70206}.ct-chart .ct-series.ct-series-a .ct-area,.ct-chart .ct-series.ct-series-a .ct-slice:not(.ct-donut){fill:#d70206}.ct-chart .ct-series.ct-series-b .ct-bar,.ct-chart .ct-series.ct-series-b .ct-line,.ct-chart .ct-series.ct-series-b .ct-point,.ct-chart .ct-series.ct-series-b .ct-slice.ct-donut{stroke:#F05B4F}.ct-chart .ct-series.ct-series-b .ct-area,.ct-chart .ct-series.ct-series-b .ct-slice:not(.ct-donut){fill:#F05B4F}.ct-chart .ct-series.ct-series-c .ct-bar,.ct-chart .ct-series.ct-series-c .ct-line,.ct-chart .ct-series.ct-series-c .ct-point,.ct-chart .ct-series.ct-series-c .ct-slice.ct-donut{stroke:#F4C63D}.ct-chart .ct-series.ct-series-c .ct-area,.ct-chart .ct-series.ct-series-c .ct-slice:not(.ct-donut){fill:#F4C63D}.ct-chart .ct-series.ct-series-d .ct-bar,.ct-chart .ct-series.ct-series-d .ct-line,.ct-chart .ct-series.ct-series-d .ct-point,.ct-chart .ct-series.ct-series-d .ct-slice.ct-donut{stroke:#453D3F}.ct-chart .ct-series.ct-series-d .ct-area,.ct-chart .ct-series.ct-series-d .ct-slice:not(.ct-donut){fill:#453D3F}.ct-chart.ct-square{display:block;position:relative;width:100%}.ct-chart.ct-square:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:100%}.ct-chart.ct-square:after{content:"";display:table;clear:both}.ct-chart.ct-square>svg{display:block;position:absolute;top:0;left:0}.ct-chart.ct-minor-second{display:block;position:relative;width:100%}.ct-chart.ct-minor-second:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:93.75%}.ct-chart.ct-minor-second:after{content:"";display:table;clear:both}.ct-chart.ct-minor-second>svg{display:block;position:absolute;top:0;left:0}.ct-chart.ct-major-second{display:block;position:relative;width:100%}.ct-chart.ct-major-second:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:88.8888888889%}.ct-chart.ct-major-second:after{content:"";display:table;clear:both}.ct-chart.ct-major-second>svg{display:block;position:absolute;top:0;left:0}.ct-chart.ct-minor-third{display:block;position:relative;width:100%}.ct-chart.ct-minor-third:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:83.3333333333%}.ct-chart.ct-minor-third:after{content:"";display:table;clear:both}.ct-chart.ct-minor-third>svg{display:block;position:absolute;top:0;left:0}.ct-chart.ct-major-third{display:block;position:relative;width:100%}.ct-chart.ct-major-third:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:80%}.ct-chart.ct-major-third:after{content:"";display:table;clear:both}.ct-chart.ct-major-third>svg{display:block;position:absolute;top:0;left:0}.ct-chart.ct-perfect-fourth{display:block;position:relative;width:100%}.ct-chart.ct-perfect-fourth:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:75%}.ct-chart.ct-perfect-fourth:after{content:"";display:table;clear:both}.ct-chart.ct-perfect-fourth>svg{display:block;position:absolute;top:0;left:0}.ct-chart.ct-perfect-fifth{display:block;position:relative;width:100%}.ct-chart.ct-perfect-fifth:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:66.6666666667%}.ct-chart.ct-perfect-fifth:after{content:"";display:table;clear:both}.ct-chart.ct-perfect-fifth>svg{display:block;position:absolute;top:0;left:0}.ct-chart.ct-minor-sixth{display:block;position:relative;width:100%}.ct-chart.ct-minor-sixth:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:62.5%}.ct-chart.ct-minor-sixth:after{content:"";display:table;clear:both}.ct-chart.ct-minor-sixth>svg{display:block;position:absolute;top:0;left:0}.ct-chart.ct-golden-section{display:block;position:relative;width:100%}.ct-chart.ct-golden-section:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:61.804697157%}.ct-chart.ct-golden-section:after{content:"";display:table;clear:both}.ct-chart.ct-golden-section>svg{display:block;position:absolute;top:0;left:0}.ct-chart.ct-major-sixth{display:block;position:relative;width:100%}.ct-chart.ct-major-sixth:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:60%}.ct-chart.ct-major-sixth:after{content:"";display:table;clear:both}.ct-chart.ct-major-sixth>svg{display:block;position:absolute;top:0;left:0}.ct-chart.ct-minor-seventh{display:block;position:relative;width:100%}.ct-chart.ct-minor-seventh:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:56.25%}.ct-chart.ct-minor-seventh:after{content:"";display:table;clear:both}.ct-chart.ct-minor-seventh>svg{display:block;position:absolute;top:0;left:0}.ct-chart.ct-major-seventh{display:block;position:relative;width:100%}.ct-chart.ct-major-seventh:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:53.3333333333%}.ct-chart.ct-major-seventh:after{content:"";display:table;clear:both}.ct-chart.ct-major-seventh>svg{display:block;position:absolute;top:0;left:0}.ct-chart.ct-octave{display:block;position:relative;width:100%}.ct-chart.ct-octave:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:50%}.ct-chart.ct-octave:after{content:"";display:table;clear:both}.ct-chart.ct-octave>svg{display:block;position:absolute;top:0;left:0}.ct-chart.ct-major-tenth{display:block;position:relative;width:100%}.ct-chart.ct-major-tenth:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:40%}.ct-chart.ct-major-tenth:after{content:"";display:table;clear:both}.ct-chart.ct-major-tenth>svg{display:block;position:absolute;top:0;left:0}.ct-chart.ct-major-eleventh{display:block;position:relative;width:100%}.ct-chart.ct-major-eleventh:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:37.5%}.ct-chart.ct-major-eleventh:after{content:"";display:table;clear:both}.ct-chart.ct-major-eleventh>svg{display:block;position:absolute;top:0;left:0}.ct-chart.ct-major-twelfth{display:block;position:relative;width:100%}.ct-chart.ct-major-twelfth:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:33.3333333333%}.ct-chart.ct-major-twelfth:after{content:"";display:table;clear:both}.ct-chart.ct-major-twelfth>svg{display:block;position:absolute;top:0;left:0}.ct-chart.ct-double-octave{display:block;position:relative;width:100%}.ct-chart.ct-double-octave:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:25%}.ct-chart.ct-double-octave:after{content:"";display:table;clear:both}.ct-chart.ct-double-octave>svg{display:block;position:absolute;top:0;left:0}


    *::-moz-selection { background: ${colorMain}; }
    *::selection { background: ${colorMain}; }
  }
`;
