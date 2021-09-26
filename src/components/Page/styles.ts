import styled from 'styled-components'
import img1 from './images/models3.png'
import img2 from './images/img2.png'
import img3 from './images/model3D.png'
import img4 from './images/mobile4_min.png'
import img5 from './images/img5.png'
import img7 from './images/img00.png'
import mobile1 from './images/models1.png'
import mobile1_land from './images/models2.png'
import mobile1_min from './images/models3.png'
import mobile2 from './images/mobile0.png'
import mobile2_land from './images/mobile0_land.png'
import mobile2_min from './images/mobile0_min.png'
import mobile3 from './images/model3.png'
import mobile3_land from './images/model3L.png'
import mobile3_min from './images/model3D.png'
import mobile4 from './images/mobile4.png'
import mobile4_land from './images/mobile4_land.png'
import mobile4_min from './images/mobile4_min.png'
import mobile5 from './images/mobile5.png'
import mobile5_land from './images/mobile5_land.png'
import mobile5_min from './images/mobile5_min.png'
import mobile6 from './images/mobile6.png'
import mobile6_land from './images/mobile0_land.png'
import mobile6_min from './images/mobile0_min.png'
import acc1 from './images/ass1.png'
import acc2 from './images/Ass2.png'
import acc3 from './images/Ass3.png'

export const Container = styled.div`
  .colored:nth-child(1) {
    background-image: url(${img1});
    background-size: cover;
    background-repeat: no-repeat;

     @media (max-width: 599px) {
      background-image: url(${mobile1});
      background-position: center;
     }
     @media (min-width: 600px) and (orientation:portrait) {
        background-image: url(${mobile1_land});
         background-position: center;
          background-position: center;
     }
      @media (min-width: 600px) {
      background-image: url(${mobile1_min});
       background-position: center;
        background-position: center;
     }
  }
  .colored:nth-child(2) {
    background: #dfffd9;
     background-image: url(${img2});
    background-size: cover;
    background-repeat: no-repeat;
     @media (max-width: 599px) {
      background-image: url(${mobile2});
       background-position: center;
     }
     @media (min-width: 600px) and (orientation:portrait) {
        background-image: url(${mobile2_land});
         background-position: center;
     }
      @media (min-width: 600px) {
      background-image: url(${mobile2_min});
       background-position: center;
     }
    
  }
  .colored:nth-child(3) {
     background: #cdfeca;
     background-image: url(${img3});
    background-size: cover;
    background-repeat: no-repeat;
     @media (max-width: 599px) {
      background-image: url(${mobile3});
       background-position: center;
     }
     @media (min-width: 600px) and (orientation:portrait) {
        background-image: url(${mobile3_land});
         background-position: center;
     }
      @media (min-width: 600px) {
      background-image: url(${mobile3_min});
       background-position: center;
     }
  }
  .colored:nth-child(4) {
     background-image: url(${img4});
    background-size: cover;
    background-repeat: no-repeat;
     @media (max-width: 599px) {
      background-image: url(${mobile4});
       background-position: center;
     }
     @media (min-width: 600px) and (orientation:portrait) {
        background-image: url(${mobile4_land});
         background-position: center;
     }
      @media (min-width: 600px) {
      background-image: url(${mobile4_min});
       background-position: center;
     }
  }
  .colored:nth-child(5) {
     background-image: url(${img5});
    background-size: cover;
    background-repeat: no-repeat;
     @media (max-width: 599px) {
      background-image: url(${mobile5});
       background-position: center;
     }
     @media (min-width: 600px) and (orientation:portrait) {
        background-image: url(${mobile5_land});
         background-position: center;
     }
      @media (min-width: 600px) {
      background-image: url(${mobile5_min});
       background-position: center;
     }
  }
  .colored:nth-child(6) {
    background-image: url(${mobile6_min});
    background-size: cover;
    background-repeat: no-repeat;
     @media (max-width: 599px) {
      background-image: url(${mobile6});
       background-position: center;
     }
     @media (min-width: 600px) and (orientation:portrait) {
        background-image: url(${mobile6_land});
         background-position: center;
     }
      @media (min-width: 600px) {
      background-image: url(${mobile6_min});
       background-position: center;
     }
  }
  .colored:nth-child(7) {
    background-image: url(${acc3});
    background-size: cover;
    background-repeat: no-repeat;
     @media (max-width: 599px) {
      background-image: url(${acc1});
       background-position: center;
     }
     @media (min-width: 600px) and (orientation:portrait) {
        background-image: url(${acc2});
         background-position: center;
     }
      @media (min-width: 600px) {
      background-image: url(${acc3});
       background-position: center;
     }
  }
  .colored:nth-child(8) {
     background-image: url(${img7});
    background-size: 40%;
    background-repeat: no-repeat;
     background-position: center;
     @media (min-width: 600px) {
       background-size: 20%;
     }
  }
`

export const Spacer = styled.div`
  height: 15vh;
  background: #77e68c;
`
