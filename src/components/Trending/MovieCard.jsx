/* eslint-disable react/prop-types */
import { BiTime } from 'react-icons/bi';

export default function MovieCard({ data }) {
    return (
        <div className='bg-primary rounded-md shadow-md shadow-primary relative overflow-hidden mt-5 hover:shadow-lg hover:shadow-primary'>
            <img src={data.src} className='w-full' alt="" />
            <div className='p-4 text-white'>
                <h4>{data.title}</h4>
                <p>{data.main}</p>
            </div>
            <div className='flex justify-between items-center bg-cyan-50 rounded-md absolute top-2 left-2 p-2 min-w-[25%]'>
                <BiTime/>
                {data.runtime}
            </div>
        </div>
    );
}
