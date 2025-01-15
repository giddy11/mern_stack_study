import React from 'react'
import "../styles/card.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFontAwesome, faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Card(props) {
    let profilePhoto = props.photo;
    let profileName = props.pname;
    let profileTitle = props.title;
    let profileText = props.ptext;
    let profilePhotoTwo = props.photo2;
    let profileNameTwo = props.pname2;
    let profileTitleTwo = props.title2;
    let profileTextTwo = props.ptext2;
  return (
    /**
     * TODO: 
     * CORRECTIONS - 2
     * The parent should be the filename s=which is card container
     * Also joining 2 cards into one resuable component isnt advisable. creating one card for one dive
     * and resusing it is best
     */
    <div>
        <div className='container'>
           

            <div className='profile_card' id='card_left'>
                

                <div className='profile_image'>
                    <img src={profilePhoto} alt='Walter White'></img>
                </div>
                
                <div className='info'>
                    <h4 className='profile_name'>{profileName}</h4>
                    <p className='profile_title'>{profileTitle}</p>
                    <p className='profile_text'>{profileText}</p>
                    <div className='icon_collection'>
                        <div className='icon'><FontAwesomeIcon icon={faTwitter} /></div>
                        <div className='icon'><FontAwesomeIcon icon={faFacebook} />
                        </div>
                        <div className='icon'><FontAwesomeIcon icon={faInstagram} />
                        </div>
                        <div className='icon'><FontAwesomeIcon icon={faLinkedin} />
                        </div>
                        
                    </div>

                </div>

                
            </div>

            <div className='profile_card' id='card_right'>
                
                <div className='profile_image'>
                <img src={profilePhotoTwo} alt='Sarah Jhonson'></img>
                </div>
                
                <div className='info'>
                    <h4 className='profile_name'>{profileNameTwo}</h4>            
                    
                    <p className='profile_title'>{profileTitleTwo}</p>

                    <p className='profile_text'>{profileTextTwo}</p>
                    <div className='icon_collection'>
                    <div className='icon'><FontAwesomeIcon icon={faTwitter} /></div>
                        <div className='icon'><FontAwesomeIcon icon={faFacebook} />
                        </div>
                        <div className='icon'><FontAwesomeIcon icon={faInstagram} />
                        </div>
                        <div className='icon'><FontAwesomeIcon icon={faLinkedin} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
