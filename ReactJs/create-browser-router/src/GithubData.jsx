import React, { useContext } from 'react'
import { global } from './Context'
import { Link } from 'react-router-dom'

const GithubData = () => {
    let {Data}=useContext(global)
    console.log(Data)
  return (
    <div className='github' >
        {Data.map((ele,index)=>{
            return <div key={index+1} >
                <img src={ele.avatar_url} alt="" className='githubdata'/>
                <h1 className='git-data-text'>{ele.login}</h1>
                <Link to={`/details/${ele.id}`} className='github-view-more'
                  state={ele}>view more</Link>
            </div>
        })}
    </div>
  )
}

export default GithubData