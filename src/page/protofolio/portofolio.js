import React from 'react'
import '../../assets/portofolio.css'
import Img1 from '../../assets/img/1.jpg'
import Portoimg from './portoImg'

export default function portofolio() {
    const data = [
        { area: "satu",
        img: Img1, 
        },
        { area: "dua",
        img: Img1 
        },
        { area: "tiga",
        img: Img1 
        },
        { area: "empat",
        img: Img1 
        },
        { area: "enam",
        img: Img1 
        },
        { area: "tujuh",
        img: Img1 
        },
        { area: "delapan",
        img: Img1 
        },
    ];
  return (
    <div id='portofolio' className='portofolio-wrapper'>
        <div className='portofolio-container'>
        {data.map((item) => {
            return <Portoimg area={item.area} img={item.img}/>
        })}
        </div>
    </div>
  )
}
