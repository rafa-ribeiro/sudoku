import React from 'react';

interface BoardProps {
    matrix: number[][];
}

const Board: React.FC<BoardProps> = ({matrix}) => {
    return (
        <main className='grid grid-cols-9 text-center max-w-[600px] m-4 border border-gray-500'>
            {matrix.flat().map((row) => (
                <div className='p-4 h-[62px] hover:bg-gray-50 transition cursor-pointer border border-gray-200 text-2xl'>
                    {row === 0 ? '' : row}
                </div>
            ))}
        </main>
    )
}

export default Board;