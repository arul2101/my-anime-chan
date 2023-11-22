import React from 'react'

const TitleSection: React.FC<{ title: string }> = ({ title }) => {
  return <h2 className="text-[1.7rem]">{title}</h2>
}

export default TitleSection