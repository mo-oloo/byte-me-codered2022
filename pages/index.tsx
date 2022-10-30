import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="sign-in-form">
      <h1>OverLook</h1>
      <ul>
        <li>
          <Link href="http://localhost:3000/auth/signup?">Get started</Link>
        </li>
        <li>
          <Link href="http://localhost:3000/abtus">About us</Link>
        </li>
        <li>
          <Link href="http://localhost:3000/GPA">GPA calculator</Link>
        </li>
      </ul>
    </div>
  )
}
