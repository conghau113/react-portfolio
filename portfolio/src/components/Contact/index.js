import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import emailjs from '@emailjs/browser'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelopeCircleCheck
} from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  const [letterClass, setLetterclass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterclass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  //   function sendmail
  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_c3wq3vo',
        'template_5mypcfh',
        refForm.current,
        'eVUw2oFh3z3NTtm-n'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  // mailto
  const handleMailto = () => {
    window.location = 'mailto:conghau1132000@gmail.com'
  }
  return (
    <>
      <div className="container contactPage">
        <div className="textZone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
            <Link to="#" onClick={handleMailto}>
              <p>
                <FontAwesomeIcon icon={faEnvelopeCircleCheck} color="#4d4d4e" />
                : conghau1132000@gmail
              </p>
            </Link>
          </h1>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        {/* <div className="info-map">
          Công Hậu,
          <br />
          A41 ,
          <span>conghau1132000@gmail.com</span>
        </div> */}
        {/* <div className="map-wrap">
          <MapContainer center={[10.735307870308318, 106.70083887807446]} zoom={20}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[10.735307870308318, 106.70083887807446]}>
              <Popup>Sloba lives here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
        </div> */}
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
