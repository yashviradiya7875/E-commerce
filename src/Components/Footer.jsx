import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {

  const socialDetails = [
    {
      name: "GitHub",
      URI: "https://github.com/yashviradiya7875",
      Logo: <GitHubIcon />
    },
    {
      name: "LinkedIn",
      URI: "https://www.linkedin.com/in/yash-viradiya-393552279/",
      Logo: <LinkedInIcon />
    },
    {
      name: "Instagram",
      URI: "https://www.instagram.com/yash__patel_7875/",
      Logo: <InstagramIcon />
    },
    {
      name: "Email",
      URI: "yashviradiya02@gmail.com/",
      Logo: <EmailIcon />
    }
  ]
  return (
    <>
      <div
        className='text-lg justify-center align-middle flex gap-4 pt-5 pb-5 '>
        {socialDetails.map((data) => {
          return (
            <div key={data.name}>
              <a

                className='text-center p-3 text-gray-700 hover:text-blue-600 justify-center align-middle '
                href={data.URI}>
                <div 
                key={data.name}
                >

                  <p className='  align-middle m-auto justify-center'>{data.Logo}</p>
                  <p>
                    {data.name}
                  </p>
                </div>
              </a>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Footer
