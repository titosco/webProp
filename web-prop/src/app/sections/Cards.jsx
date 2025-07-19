import Image from 'next/image'
import React from 'react'
import Img1 from '../images/img1.png';
import Img2 from '../images/img2.png';
import Img3 from '../images/img3.png';
import Img4 from '../images/img4.png';

const Cards = () => {
  return (
    <div className='mt-4 grid relative md:grid-cols-2 md:gap-20 lg:grid-cols-4 lg:gap-6'>
        {/* card for 4 listings */}
        {/* card1 */}
        <div className='card'>
            <div className="card-inner">
                <div className="card-face">
                    <Image alt='' src={Img1} className='img-front'/>
                    <div className='m-4'>
                        <span className='card-title'>
                            Redesigning my site increased sales by over 400% in one week.
                        </span>
                        <span className='card-desc'>
                            Jul 1,2020
                        </span>
                    </div>
                </div>
            </div>
        </div>
        {/* card 2 */}
               <div className='card'>
            <div className="card-inner">
                <div className="card-face">
                    <Image alt='' src={Img2} className='img-front'/>
                    <div className='m-4'>
                        <span className='card-title'>
                            Design handoff: What engineers really want to see.
                        </span>
                        <span className='card-desc'>
                            Jul 1,2020
                        </span>
                    </div>
                </div>
            </div>
        </div>
        {/* card 3 */}
               <div className='card'>
            <div className="card-inner">
                <div className="card-face">
                    <Image alt='' src={Img3} className='img-front'/>
                    <div className='m-4'>
                        <span className='card-title'>
                            A comprehensive list of human-computer interactions
                        </span>
                        <span className='card-desc'>
                            Jul 1,2020
                        </span>
                    </div>
                </div>
            </div>
        </div>
        {/* card 4 */}
               <div className='card'>
            <div className="card-inner">
                <div className="card-face">
                    <Image alt='' src={Img4} className='img-front'/>
                    <div className='m-4'>
                        <span className='card-title'>
                            Why do poeple hate Redesigning?
                        </span>
                        <span className='card-desc'>
                            Jul 1,2020
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards