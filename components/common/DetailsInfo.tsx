import React from 'react'

import './DetailsInfo.scss'

type InfoParams = {
  title: string
  date: string
  tags: string
  desc: string
  link?: string
}

const DetailsInfo: React.FC<{info: InfoParams}> = ({ info }) => {
  return (
    <div className="DetailsInfoWrap">
      <div className="DetailsInfoTitle">
        { info.title }
      </div>
      <div className="DetailsInfoDate">
        date : { info.date }
      </div>
      <div className="DetailsInfoTags">
        tags : { info.tags }
      </div>
      <a href={info.link} target="_blank" className="DetailsInfoLink">
        link : { info.link }
      </a>
      <div className="DetailsInfoDescription">
        { info.desc }
      </div>
    </div>
  )
}

export default DetailsInfo