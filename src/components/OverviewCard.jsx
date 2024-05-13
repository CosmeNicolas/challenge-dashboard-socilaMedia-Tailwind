import facebookLogo from '../assets/images/icon-facebook.svg'
import twitterLogo from '../assets/images/icon-twitter.svg'
import instagramLogo from '../assets/images/icon-instagram.svg'
import youtubeLogo from '../assets/images/icon-youtube.svg'
import iconUp from '../assets/images/icon-up.svg'
import iconDown from '../assets/images/icon-down.svg'

const networkLogos = {
    Facebook: facebookLogo,
    Twitter: twitterLogo,
    Instagram: instagramLogo,
    Youtube: youtubeLogo
}

const networkColors = {
    Facebook: 'bg-Facebook',
    Twitter: 'bg-Twitter',
    Instagram: 'bg-Instagram-Gradient',
    Youtube: 'bg-YouTube'
}

export const OverviewCard = ({user,audienceType, audience, network, isUp, today}) => {

  return (
    <article className="bg-Light-Grayish-Blue mb-4 rounded-[5px] w-[326px] h-[216px] mx-auto  overflow-hidden text-center dark:bg-Dark-Desaturated-Blue-Top hover:brightness-95 cursor-pointer hover:dark:brightness-125">
        <div className={`${networkColors[network]} h-1 mb-8`}></div>
        <div className='flex items-center place-content-center gap-2'>
        <img src={networkLogos[network]} alt={`logo${network}`} />
        <p className='text-xs text-Dark-Grayish-Blue font-bold'>{user}</p>
        </div>
        <p className='text-[56px] font-bold text-Very-Dark-Blue dark:text-white'>{audience}</p>
        <p className='uppercase tracking-[5px] text-Dark-Grayish-Blue text-xs mb-6'>{audienceType}</p>
        <div className='flex items-center place-content-center gap-1 '>
            <img src={isUp ?  iconUp : iconDown} alt="icon arrow" />
            <p className={`text-xs font-bold ${isUp ? 'text-Lime-Green'  : 'text-Bright-Red'}`}>{today} </p>
        </div>
    </article>
  )
}



export const OverviewTodayCard = ({network ,statsType ,stats ,porcentage ,isUp}) => {
  return (
    <article className='bg-Light-Grayish-Blue w-[326px]  h-[125px] mb-4 mx-auto rounded-[5px] p-[27px]  cursor-pointer hover:brightness-95 hover:dark:brightness-125 dark:bg-Dark-Desaturated-Blue-Top'>
        <div className='flex items-center justify-between'>
            <p className='text-Dark-Grayish-Blue'>{statsType}</p>
            <img src={networkLogos[network]} alt="" />
        </div>
       <div className='flex justify-between'>
        <p className='text-[42px] font-bold text-Very-Dark-Blue dark:text-Very-Pale-Blue'>{stats}</p>
        <div className='flex items-center place-content-center gap-1 '>
            <img src={isUp ?  iconUp : iconDown} alt="icon arrow" />
            <p className={`text-xs font-bold ${isUp ? 'text-Lime-Green'  : 'text-Bright-Red'}`}>{porcentage} Today </p>
        </div>
       </div>
    </article>
  )
}
