import MovieCard from './MovieCard.jsx';
import datas from './moviesData.js';

export default function Trending() {
    return (
        <>
            <h3 className='border-b border-primary mt-12 pd-4 pb-4'>Trending</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
                {datas.map(data => (
                    <MovieCard data={data} key={data.title} />
                ))}
            </div>
            <div className='flex justify-center'>
                <button className='btn hover:scale-125 translate ease-out duration-500'>
                    load more
                </button>
            </div>
        </>
    );
}
