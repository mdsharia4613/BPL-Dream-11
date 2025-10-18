import './Banner.css'
import cricket from '../../assets/image/banner-main.png'

const Banner = ({ addCoin }) => {
    return (
        <div className="banner p-10 text-center">
            <div className=''>
                <img className='mx-auto' src={cricket} alt="" />
            </div>
            <div className='space-y-4 mt-3'>
                <h1 className='text-4xl font-bold '>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p className='text-gray-400'>Beyond Boundaries Beyond Limits</p>
                <div className=''>
                    <button onClick={() => addCoin()} className='bg-yellow-400 p-2 text-black' type='button'> Claim Free Credit</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;