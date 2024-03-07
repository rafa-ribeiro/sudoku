import React from 'react';

interface BoardProps {
    matrix: number[][];
}

const Board: React.FC<BoardProps> = ({matrix}) => {
    return (
        <main className='shadow-xl p-2 inline-flex rounded-xl bg-white'>
            <div className='grid grid-cols-9 text-center max-w-[600px] m-4 border-2 border-gray-700'>
                {matrix.flat().map((row, index) => (
                    <div className={`
                        p-4 h-[62px] hover:bg-blue-50 transition cursor-pointer border border-gray-100 text-2xl
                        ${(index % 27) / 18  >= 1 && index / 72 < 1 ? 'border-b-gray-700 border-b-2' : ''}
                        ${(index + 1) % 3 === 0 && (index + 1) % 9 !== 0 ? 'border-r-gray-700 border-r-2' : ''}
                    `}>
                        {row === 0 ? '' : row}
                    </div>
                ))}
            </div>
        </main>
    )
}

export default Board;