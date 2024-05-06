import React from 'react'

export const Election = ({age}) => {

    let flag=0;
		if (age==0||age==1)
		{
			return(<p>not prime no</p>)
		}
		else 
		{
			for (let i=2;i<=age/2 ;i++ )
			{
				if (age%i==0)
				{
                    flag=1
					return(
                        <>
                        <p>not prime no</p>
                        </>
                    )
				}
			}
			if (flag==0)
			{
				return(<p>prime number</p>)
			}
		}
}

export default Election