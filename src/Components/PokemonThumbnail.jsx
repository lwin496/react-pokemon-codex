import React from 'react'

const PokemonThumbnail = ({id, name,image,type}) => {
      const style = `thumb-container ${type}`
  return (
    <div className='thumb-container flex flex-col items-center justify-center px-1 py-1 m-1  max-w-4 text-center'>
      <div className='border-slate-600 bg-slate-200 shadow-lg '>
            <small className='font-bold text-2xl bg-slate-300 rounded-lg p-2'>#0{id}</small>
            <img src={image} alt={name} className='h-[270px] w-[270px]' />
            <div>
                  <h3 className='text-4xl font-semibold'>{name}</h3>
                  <small className='text-xl'>Type: {type}</small>
            </div>
      </div>
    </div>
  )
}

export default PokemonThumbnail

